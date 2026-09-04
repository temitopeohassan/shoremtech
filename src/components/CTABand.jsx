import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { ArrowIcon, PhoneIcon } from './Icons'
import './CTABand.css'

export default function CTABand({
  title = 'Need a quote for your site?',
  body = 'Tell us the equipment, the voltage level and your timeline. We will assess the site and come back with a written scope and price.'
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="btn-row cta-band__actions">
          <Link to="/contact" className="btn btn--primary">
            {company.cta.contact} <ArrowIcon />
          </Link>
          <a href={`tel:${company.contact.phoneHref}`} className="btn btn--ghost">
            <PhoneIcon /> {company.contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
