const IMG = '/images/home'

const faqs = [
  'Are dental treatments painful?',
  'How long does a dental implant last?',
  'How often should I visit the dentist?',
  'Do you offer cosmetic dentistry treatments?',
] as const

export default function FaqSection({
  openFaq,
  setOpenFaq,
}: {
  openFaq: number | null
  setOpenFaq: (val: number | null) => void
}) {
  return (
    <div
      className="absolute left-[60px] top-[4884px] box-border flex h-[529px] w-[1320px] rounded-xl bg-[#F9F4F1]"
      style={{ padding: '40px 59px 40px 60px' }}
    >
      <div className="flex h-[449px] w-[1202px]" style={{ gap: 135 }}>
        <div className="flex h-full w-[322px] shrink-0 flex-col justify-between">
          <div
            className="inline-flex w-fit rounded-lg bg-[#f2f8ff] px-7 py-[15px]"
            style={{
              boxShadow:
                '0px 4px 6.2px 0px rgba(105,163,145,0.39), 4px 0px 66.8px 0px rgba(255,255,255,0.25)',
            }}
          >
            <span className="font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-none text-[#28231F]">
              FAQ
            </span>
          </div>

          <div className="relative h-[113px] w-[113px] shrink-0 overflow-hidden rounded-full border border-[#A8D5C8] bg-[#6BA491]">
            <img
              src={`${IMG}/faq-tooth-22acc5.png`}
              alt=""
              className="absolute left-1/2 top-[6px] h-[106px] w-[90px] max-w-none -translate-x-1/2 object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex w-[745px] shrink-0 flex-col" style={{ gap: 60 }}>
          <h2 className="whitespace-nowrap font-[family-name:var(--font-fraunces)] text-[48px] font-normal leading-none text-[#28231F]">
            Get clear answer to your questions
          </h2>

          <div className="flex w-[730px] flex-col" style={{ gap: 40 }}>
            {faqs.map((q, i) => (
              <button
                key={q}
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex h-9 w-full shrink-0 items-center justify-between text-left"
              >
                <span className="min-w-0 flex-1 pr-4 text-2xl tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
                  {q}
                </span>
                <img
                  src={`${IMG}/arrow-down.svg`}
                  alt=""
                  width={24}
                  height={24}
                  className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
