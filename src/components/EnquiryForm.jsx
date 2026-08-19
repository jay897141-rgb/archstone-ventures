import { useState } from 'react'
import './enquiry-form.css'

const API_BASE = import.meta.env.VITE_API_URL || ''

const REQUIREMENT_TYPES = ['Property', 'Construction', 'Architecture', 'Interiors', 'Investment', 'Other']
const CONTACT_METHODS = ['Phone', 'Email', 'WhatsApp']

const initialState = {
  name: '',
  phone: '',
  email: '',
  requirement_type: 'Construction',
  location: '',
  budget_range: '',
  message: '',
  preferred_contact: 'Phone',
  schedule_site_visit: false,
  consent: false,
}

export default function EnquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [field]: val }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!values.consent) {
      setErrorMsg('Please confirm consent to be contacted before submitting.')
      return
    }
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(`${API_BASE}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source: 'website' }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setStatus('success')
      setValues(initialState)
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        'We could not reach the enquiry service. Please call or email us directly — details are in the footer.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="enquiry-form enquiry-form--success">
        <p className="eyebrow">Enquiry Received</p>
        <h3>Thank you — we&apos;ll be in touch shortly.</h3>
        <p>A member of the Archstone team will reach out using your preferred contact method.</p>
      </div>
    )
  }

  return (
    <form className={`enquiry-form ${compact ? 'enquiry-form--compact' : ''}`} onSubmit={handleSubmit} noValidate>
      <div className="enquiry-form__row">
        <label>
          <span>Name</span>
          <input type="text" required value={values.name} onChange={update('name')} autoComplete="name" />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" required value={values.phone} onChange={update('phone')} autoComplete="tel" />
        </label>
      </div>

      <div className="enquiry-form__row">
        <label>
          <span>Email</span>
          <input type="email" required value={values.email} onChange={update('email')} autoComplete="email" />
        </label>
        <label>
          <span>Requirement</span>
          <select value={values.requirement_type} onChange={update('requirement_type')}>
            {REQUIREMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>

      <div className="enquiry-form__row">
        <label>
          <span>Location</span>
          <input type="text" value={values.location} onChange={update('location')} placeholder="e.g. Whitefield, Bengaluru" />
        </label>
        <label>
          <span>Budget range</span>
          <input type="text" value={values.budget_range} onChange={update('budget_range')} placeholder="e.g. ₹80L – ₹1.2Cr" />
        </label>
      </div>

      <label className="enquiry-form__full">
        <span>Message</span>
        <textarea rows={4} value={values.message} onChange={update('message')} placeholder="Tell us briefly about your project" />
      </label>

      <div className="enquiry-form__row">
        <label>
          <span>Preferred contact method</span>
          <select value={values.preferred_contact} onChange={update('preferred_contact')}>
            {CONTACT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </label>
        <label className="enquiry-form__checkbox-inline">
          <input type="checkbox" checked={values.schedule_site_visit} onChange={update('schedule_site_visit')} />
          <span>Schedule a site visit</span>
        </label>
      </div>

      <label className="enquiry-form__checkbox">
        <input type="checkbox" checked={values.consent} onChange={update('consent')} required />
        <span>I consent to Archstone Ventures contacting me about this enquiry.</span>
      </label>

      {errorMsg && <p className="enquiry-form__error" role="alert">{errorMsg}</p>}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Book a Consultation'}
        <span className="btn-arrow" aria-hidden="true">→</span>
      </button>
    </form>
  )
}
