import { useState } from 'react'
import type { FormEvent } from 'react'

export type AppointmentFormData = {
  name: string
  phone: string
  email: string
  date: string
  treatment: string
  description: string
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY_FORM: AppointmentFormData = {
  name: '',
  phone: '',
  email: '',
  date: '',
  treatment: '',
  description: '',
}

export function useAppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const updateField = (field: keyof AppointmentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const setTreatment = (treatment: string) => updateField('treatment', treatment)

  const reset = () => {
    setFormData(EMPTY_FORM)
    setStatus('idle')
    setErrorMessage('')
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      let data: { error?: string } = {}
      try {
        data = await res.json()
      } catch {
        data = {}
      }

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setFormData(EMPTY_FORM)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      )
    }
  }

  return { formData, updateField, setTreatment, status, errorMessage, reset, submit }
}
