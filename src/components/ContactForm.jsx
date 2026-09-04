import { useState } from 'react'
import { company, services } from '../data/company'
import { ArrowIcon } from './Icons'
import './ContactForm.css'

const emptyForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  location: '',
  message: ''
}

/*
 * No backend is bundled with this project, so the form composes a
 * pre-filled email and opens the visitor's mail client.
 * To use a form service instead, see "Wiring up the contact form" in README.md.
 */
export default function ContactForm() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name so we know who to reply to.'
    if (!form.email.trim()) {
      next.email = 'Enter an email address we can send the quote to.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'That email address is missing an @ or a domain.'
    }
    if (!form.message.trim()) next.message = 'Tell us what you need done.'
    return next
  }

  const handleSubmit = () => {
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = `Enquiry: ${form.service || 'Electrical power services'} — ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || '—'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      `Service: ${form.service || '—'}`,
      `Site location: ${form.location || '—'}`,
      '',
      'Details:',
      form.message
    ].join('\n')

    window.location.href = `mailto:${company.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <div className="contact-form">
      <h3>Request a quote</h3>
      <p className="contact-form__note">
        Give us the equipment, voltage level and site location. We reply with a scope and price.
      </p>

      <div className="contact-form__row">
        <Field
          id="name"
          label="Full name"
          value={form.name}
          onChange={update('name')}
          error={errors.name}
          required
        />
        <Field
          id="company"
          label="Company"
          value={form.company}
          onChange={update('company')}
        />
      </div>

      <div className="contact-form__row">
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={update('email')}
          error={errors.email}
          required
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={update('phone')}
        />
      </div>

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="service">Service needed</label>
          <select id="service" value={form.service} onChange={update('service')}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>
        <Field
          id="location"
          label="Site location"
          value={form.location}
          onChange={update('location')}
        />
      </div>

      <div className="field">
        <label htmlFor="message">
          What do you need done? <span className="field__required">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="field__error">{errors.message}</span>}
      </div>

      <button type="button" className="btn btn--primary contact-form__submit" onClick={handleSubmit}>
        Send enquiry <ArrowIcon />
      </button>

      {sent && (
        <p className="contact-form__sent" role="status">
          Your email app should now be open with the enquiry filled in. If nothing happened, send
          it directly to {company.contact.email}.
        </p>
      )}
    </div>
  )
}

function Field({ id, label, value, onChange, error, type = 'text', required = false }) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required && <span className="field__required">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  )
}
