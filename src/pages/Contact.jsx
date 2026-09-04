import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { MailIcon, PhoneIcon, PinIcon } from '../components/Icons'
import { company } from '../data/company'

export default function Contact() {
  return (
    <>
      <PageHero
        label="Contact"
        title={company.cta.contact}
        lead="Call, email or send the form. We respond with a scope and a price, not a brochure."
      />

      <section className="section">
        <div className="container contact-layout">
          <div>
            <SectionHeading label="Reach us" title="Contact details" />

            <div className="contact-detail">
              <PhoneIcon />
              <div>
                <span className="contact-detail__label">Phone</span>
                <a className="contact-detail__value" href={`tel:${company.contact.phoneHref}`}>
                  {company.contact.phone}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <MailIcon />
              <div>
                <span className="contact-detail__label">Email</span>
                <a className="contact-detail__value" href={`mailto:${company.contact.email}`}>
                  {company.contact.email}
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <PinIcon />
              <div>
                <span className="contact-detail__label">Location</span>
                <span className="contact-detail__value">{company.contact.location}</span>
              </div>
            </div>

            <p className="lead" style={{ marginTop: 'var(--space-lg)' }}>
              For faults and emergency call-outs, phone us directly — it is faster than email.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
