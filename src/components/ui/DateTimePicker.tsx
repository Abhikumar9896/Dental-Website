import { useState, useRef, useEffect } from 'react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const DAY_HEADERS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const HOURS_12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

interface DateTimePickerProps {
  value: string                    // "YYYY-MM-DDTHH:mm"
  onChange: (val: string) => void
  min?: string                     // "YYYY-MM-DDTHH:mm"
  className?: string
  id?: string
  placeholder?: string
}

function formatDisplay(val: string): string {
  if (!val || !val.includes('T')) return ''
  const [datePart, timePart] = val.split('T')
  const [y, mo, dd] = datePart.split('-')
  const [hStr, mStr] = timePart.split(':')
  const h = parseInt(hStr)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${dd}/${mo}/${y}, ${String(h12).padStart(2, '0')}:${mStr} ${ampm}`
}

function getDaysInMonth(y: number, m: number): number {
  return new Date(y, m + 1, 0).getDate()
}

function getFirstDayOfMonth(y: number, m: number): number {
  return new Date(y, m, 1).getDay()
}

function to24(h12: number, ampm: 'AM' | 'PM'): number {
  if (ampm === 'AM') return h12 === 12 ? 0 : h12
  return h12 === 12 ? 12 : h12 + 12
}

interface Parsed {
  year: number; month: number; day: number
  hour24: number; minute: number
  hour12: number; ampm: 'AM' | 'PM'
}

function parseVal(val: string): Parsed | null {
  if (!val || !val.includes('T')) return null
  const [datePart, timePart] = val.split('T')
  const [y, mo, dd] = datePart.split('-').map(Number)
  const [h, m] = timePart.split(':').map(Number)
  const ampm: 'AM' | 'PM' = h >= 12 ? 'PM' : 'AM'
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return { year: y, month: mo, day: dd, hour24: h, minute: m, hour12: h12, ampm }
}

function buildVal(y: number, mo: number, d: number, h24: number, min: number): string {
  return `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}T${String(h24).padStart(2, '0')}:${String(min).padStart(2, '0')}`
}

function getClinicRanges(dayOfWeek: number): [number, number][] {
  if (dayOfWeek === 0) return [[10, 14]]
  return [[10, 14], [17, 20]]
}

function isClinicH24Valid(h24: number, dayOfWeek: number): boolean {
  return getClinicRanges(dayOfWeek).some(([s, e]) => h24 >= s && h24 <= e)
}

export default function DateTimePicker({
  value, onChange, min, className = '', id, placeholder,
}: DateTimePickerProps) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const hourRef = useRef<HTMLDivElement>(null)
  const minuteRef = useRef<HTMLDivElement>(null)

  const today = new Date()
  const parsed = parseVal(value)
  const minParsed = min ? parseVal(min.length === 10 ? min + 'T00:00' : min) : null

  const [calYear, setCalYear] = useState(() => parsed?.year ?? today.getFullYear())
  const [calMonth, setCalMonth] = useState(() => parsed ? parsed.month - 1 : today.getMonth())

  const [timeH12, setTimeH12] = useState(() => parsed?.hour12 ?? (today.getHours() % 12 || 12))
  const [timeMin, setTimeMin] = useState(() => parsed?.minute ?? today.getMinutes())
  const [timeAmpm, setTimeAmpm] = useState<'AM' | 'PM'>(() => parsed?.ampm ?? (today.getHours() >= 12 ? 'PM' : 'AM'))

  // Sync state when value changes
  useEffect(() => {
    const p = parseVal(value)
    if (p) {
      setTimeH12(p.hour12)
      setTimeMin(p.minute)
      setTimeAmpm(p.ampm)
      setCalYear(p.year)
      setCalMonth(p.month - 1)
    }
  }, [value])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Scroll selected hour/minute into view
  useEffect(() => {
    if (!open) return
    const timer = setTimeout(() => {
      const scroll = (ref: React.RefObject<HTMLDivElement | null>) => {
        const el = ref.current?.querySelector('[data-selected="true"]') as HTMLElement | null
        el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }
      scroll(hourRef)
      scroll(minuteRef)
    }, 60)
    return () => clearTimeout(timer)
  }, [open])

  // ── Disabled helpers ──────────────────────────────────────────────────────
  function isDateDisabled(y: number, m: number, d: number): boolean {
    if (!minParsed) return false
    if (y !== minParsed.year) return y < minParsed.year
    if (m !== minParsed.month) return m < minParsed.month
    return d < minParsed.day
  }

  function isHourDisabled(h12: number, ampm: 'AM' | 'PM'): boolean {
    const h24 = to24(h12, ampm)

    // Clinic hours check (only when a date is selected)
    if (parsed) {
      const dw = new Date(parsed.year, parsed.month - 1, parsed.day).getDay()
      if (!isClinicH24Valid(h24, dw)) return true
    }

    // Past-time check
    if (!minParsed || !parsed) return false
    if (parsed.year !== minParsed.year || parsed.month !== minParsed.month || parsed.day !== minParsed.day) return false
    return h24 < minParsed.hour24
  }

  function isMinuteDisabled(m: number, h12 = timeH12, ampm = timeAmpm): boolean {
    if (!minParsed || !parsed) return false
    if (parsed.year !== minParsed.year || parsed.month !== minParsed.month || parsed.day !== minParsed.day) return false
    const h24 = to24(h12, ampm)
    if (h24 > minParsed.hour24) return false
    if (h24 < minParsed.hour24) return true
    return m < minParsed.minute
  }

  // ── Emit helpers ─────────────────────────────────────────────────────────
  function emit(y: number, mo: number, d: number, h12: number, m: number, ampm: 'AM' | 'PM') {
    onChange(buildVal(y, mo, d, to24(h12, ampm), m))
  }

  // Select a day — auto-resets time to 10:00 AM if current time is outside clinic hours
  function handleSelectDay(y: number, mo: number, d: number) {
    const dw = new Date(y, mo - 1, d).getDay()
    let h12 = timeH12, min = timeMin, ampm = timeAmpm

    if (!isClinicH24Valid(to24(h12, ampm), dw)) {
      // Reset to 10:00 AM — first valid clinic slot
      h12 = 10; min = 0; ampm = 'AM'
      setTimeH12(10)
      setTimeMin(0)
      setTimeAmpm('AM')
    }

    emit(y, mo, d, h12, min, ampm)
  }

  function handleHour(h: number) {
    setTimeH12(h)
    if (parsed) emit(parsed.year, parsed.month, parsed.day, h, timeMin, timeAmpm)
  }

  function handleMinute(m: number) {
    setTimeMin(m)
    if (parsed) emit(parsed.year, parsed.month, parsed.day, timeH12, m, timeAmpm)
  }

  function handleAmpm(ap: 'AM' | 'PM') {
    if (parsed) {
      const dw = new Date(parsed.year, parsed.month - 1, parsed.day).getDay()
      let h24 = to24(timeH12, ap)
      let h12 = timeH12
      let m = timeMin
      let finalAp = ap
      
      if (!isClinicH24Valid(h24, dw)) {
         const ranges = getClinicRanges(dw)
         const validH24s: number[] = []
         ranges.forEach(([s, e]) => {
           for(let i=s; i<=e; i++) validH24s.push(i)
         })
         const ampmH24s = validH24s.filter(h => (h >= 12 ? 'PM' : 'AM') === ap)
         
         if (ampmH24s.length > 0) {
           h24 = ampmH24s[0]
           h12 = h24 > 12 ? h24 - 12 : (h24 === 0 ? 12 : h24)
           m = 0
         } else {
           h24 = 10
           h12 = 10
           m = 0
           finalAp = 'AM'
         }
      }
      setTimeH12(h12)
      setTimeMin(m)
      setTimeAmpm(finalAp)
      emit(parsed.year, parsed.month, parsed.day, h12, m, finalAp)
    } else {
      setTimeAmpm(ap)
    }
  }

  function handleToday() {
    const now = new Date()
    const y = now.getFullYear()
    const mo = now.getMonth() + 1
    const d = now.getDate()
    let h24 = now.getHours()
    let min = now.getMinutes()
    const dw = now.getDay()
    
    if (!isClinicH24Valid(h24, dw)) {
      h24 = 10
      min = 0
    }
    
    onChange(buildVal(y, mo, d, h24, min))
    setOpen(false)
  }

  function handleClear() {
    onChange('')
    setOpen(false)
  }

  function prevMonth() {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1) }
    else setCalMonth(m => m - 1)
  }

  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1) }
    else setCalMonth(m => m + 1)
  }

  // ── Build calendar grid (6 rows × 7 cols = 42 cells) ─────────────────────
  const daysInMonth = getDaysInMonth(calYear, calMonth)
  const firstDay = getFirstDayOfMonth(calYear, calMonth)
  const prevDays = getDaysInMonth(calYear, calMonth === 0 ? 11 : calMonth - 1)

  const cells: { day: number; type: 'prev' | 'curr' | 'next' }[] = []
  for (let i = 0; i < firstDay; i++)
    cells.push({ day: prevDays - firstDay + 1 + i, type: 'prev' })
  for (let i = 1; i <= daysInMonth; i++)
    cells.push({ day: i, type: 'curr' })
  for (let i = 1; cells.length < 42; i++)
    cells.push({ day: i, type: 'next' })

  const minutes = Array.from({ length: 60 }, (_, i) => i)

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* ── Trigger Input ── */}
      <div
        id={id}
        role="button"
        tabIndex={0}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
        className={`
          w-full h-[40px] lg:h-[46px] border rounded-md px-3 lg:px-4
          font-poppins text-[13px] lg:text-[14px] flex items-center justify-between
          cursor-pointer transition-colors bg-white select-none
          ${open
            ? 'border-[#165ba7] ring-1 ring-[#165ba7]'
            : 'border-gray-200/80 hover:border-gray-300'}
        `}
      >
        <span className={value ? 'text-gray-600' : 'text-gray-400'}>
          {value ? formatDisplay(value) : (placeholder ?? 'Select date & time')}
        </span>
        <svg
          width="15" height="15" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="text-gray-400 shrink-0 ml-2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {/* ── Popup ── */}
      {open && (
        <div
          className="absolute right-0 top-[calc(100%+8px)] z-[999] bg-white rounded-2xl overflow-hidden"
          style={{
            minWidth: 460,
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div className="flex">
            {/* ── Calendar ── */}
            <div className="flex-1 p-4 pb-3">
              {/* Month navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <span className="font-poppins font-semibold text-[14px] text-gray-800">
                  {MONTHS[calMonth]} {calYear}
                </span>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 mb-1">
                {DAY_HEADERS.map(h => (
                  <div key={h} className="text-center font-poppins text-[11px] font-semibold text-gray-400 py-1">
                    {h}
                  </div>
                ))}
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7 gap-y-0.5">
                {cells.map((cell, i) => {
                  if (cell.type === 'prev') {
                    // Prev month ka year/month
                    const pMonth = calMonth === 0 ? 11 : calMonth - 1
                    const pYear = calMonth === 0 ? calYear - 1 : calYear
                    const disabled = isDateDisabled(pYear, pMonth + 1, cell.day)
                    return (
                      <div key={i} className="flex items-center justify-center">
                        <button
                          type="button"
                          disabled={disabled}
                          onClick={() => {
                            if (disabled) return
                            prevMonth()
                            handleSelectDay(pYear, pMonth + 1, cell.day)
                          }}
                          className={[
                            'w-8 h-8 rounded-full font-poppins text-[12px] flex items-center justify-center transition-all',
                            disabled ? 'text-gray-200 cursor-not-allowed' : 'text-gray-300 hover:bg-blue-50 hover:text-[#165ba7] cursor-pointer',
                          ].join(' ')}
                        >
                          {cell.day}
                        </button>
                      </div>
                    )
                  }

                  if (cell.type === 'next') {
                    // Next month ka year/month
                    const nMonth = calMonth === 11 ? 0 : calMonth + 1
                    const nYear = calMonth === 11 ? calYear + 1 : calYear
                    const disabled = isDateDisabled(nYear, nMonth + 1, cell.day)
                    return (
                      <div key={i} className="flex items-center justify-center">
                        <button
                          type="button"
                          disabled={disabled}
                          onClick={() => {
                            if (disabled) return
                            nextMonth()
                            handleSelectDay(nYear, nMonth + 1, cell.day)
                          }}
                          className={[
                            'w-8 h-8 rounded-full font-poppins text-[12px] flex items-center justify-center transition-all',
                            disabled ? 'text-gray-200 cursor-not-allowed' : 'text-gray-300 hover:bg-blue-50 hover:text-[#165ba7] cursor-pointer',
                          ].join(' ')}
                        >
                          {cell.day}
                        </button>
                      </div>
                    )
                  }

                  const disabled = isDateDisabled(calYear, calMonth + 1, cell.day)
                  const isSelected =
                    parsed?.year === calYear &&
                    parsed?.month === calMonth + 1 &&
                    parsed?.day === cell.day
                  const isToday =
                    today.getFullYear() === calYear &&
                    today.getMonth() === calMonth &&
                    today.getDate() === cell.day

                  return (
                    <div key={i} className="flex items-center justify-center">
                      <button
                        type="button"
                        disabled={disabled}
                        onClick={() => !disabled && handleSelectDay(calYear, calMonth + 1, cell.day)}
                        className={[
                          'w-8 h-8 rounded-full font-poppins text-[13px] flex items-center justify-center transition-all',
                          isSelected ? 'bg-[#165ba7] text-white font-semibold shadow-sm' : '',
                          !isSelected && isToday ? 'border-2 border-[#165ba7] text-[#165ba7] font-medium' : '',
                          !isSelected && !isToday && !disabled ? 'text-gray-700 hover:bg-blue-50 hover:text-[#165ba7] cursor-pointer' : '',
                          disabled ? 'text-gray-300 cursor-not-allowed' : '',
                        ].filter(Boolean).join(' ')}
                      >
                        {cell.day}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ── Divider ── */}
            <div className="w-px bg-gray-100 my-4 shrink-0" />

            {/* ── Time Picker ── */}
            <div className="flex items-start gap-0.5 py-4 px-3">
              {/* Hours scroll */}
              <div
                ref={hourRef}
                className="h-[196px] overflow-y-auto flex flex-col gap-0.5 w-11"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {HOURS_12.map(h => {
                  const disabled = isHourDisabled(h, timeAmpm)
                  const sel = timeH12 === h
                  return (
                    <button
                      key={h}
                      type="button"
                      data-selected={sel}
                      disabled={disabled}
                      onClick={() => !disabled && handleHour(h)}
                      className={[
                        'w-10 h-9 rounded-lg font-poppins text-[14px] shrink-0 flex items-center justify-center transition-all',
                        sel ? 'bg-[#165ba7] text-white font-semibold' : '',
                        !sel && !disabled ? 'text-gray-700 hover:bg-blue-50 hover:text-[#165ba7] cursor-pointer' : '',
                        disabled ? 'text-gray-300 cursor-not-allowed' : '',
                      ].filter(Boolean).join(' ')}
                    >
                      {String(h).padStart(2, '0')}
                    </button>
                  )
                })}
              </div>

              {/* Colon */}
              <div className="font-poppins text-gray-400 font-bold text-[16px] mt-[10px] px-0.5 shrink-0">:</div>

              {/* Minutes scroll */}
              <div
                ref={minuteRef}
                className="h-[196px] overflow-y-auto flex flex-col gap-0.5 w-11"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {minutes.map(m => {
                  const disabled = isMinuteDisabled(m)
                  const sel = timeMin === m
                  return (
                    <button
                      key={m}
                      type="button"
                      data-selected={sel}
                      disabled={disabled}
                      onClick={() => !disabled && handleMinute(m)}
                      className={[
                        'w-10 h-9 rounded-lg font-poppins text-[14px] shrink-0 flex items-center justify-center transition-all',
                        sel ? 'bg-[#165ba7] text-white font-semibold' : '',
                        !sel && !disabled ? 'text-gray-700 hover:bg-blue-50 hover:text-[#165ba7] cursor-pointer' : '',
                        disabled ? 'text-gray-300 cursor-not-allowed' : '',
                      ].filter(Boolean).join(' ')}
                    >
                      {String(m).padStart(2, '0')}
                    </button>
                  )
                })}
              </div>

              {/* AM / PM */}
              <div className="flex flex-col gap-1.5 ml-2 mt-1 shrink-0">
                {(['AM', 'PM'] as const).map(ap => (
                  <button
                    key={ap}
                    type="button"
                    onClick={() => handleAmpm(ap)}
                    className={[
                      'w-12 h-9 rounded-lg font-poppins text-[13px] font-medium transition-all',
                      timeAmpm === ap
                        ? 'bg-[#165ba7] text-white shadow-sm'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-[#165ba7] cursor-pointer',
                    ].join(' ')}
                  >
                    {ap}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Footer ── */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100" style={{ background: '#fafafa' }}>
            <button
              type="button"
              onClick={handleClear}
              className="font-poppins text-[13px] font-medium text-[#D35B8F] hover:text-[#B04B74] transition-colors"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleToday}
              className="font-poppins text-[13px] font-semibold text-[#165ba7] hover:text-[#10437b] transition-colors"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
