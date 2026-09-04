import { Link } from 'react-router-dom'
import { company, services } from '../data/company'
import { MailIcon, PhoneIcon, PinIcon } from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo.jpg" alt={`${company.name} logo`} className="footer__logo-img" />
          <p>{company.about}</p>
          <p className="footer__motto">{company.trustMessage}</p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`}>{s.short}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/industries">Industries we serve</Link>
            </li>
            <li>
              <Link to="/safety-quality">Safety &amp; quality</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>
              <PhoneIcon />
              <a href={`tel:${company.contact.phoneHref}`}>{company.contact.phone}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
            </li>
            <li>
              <PinIcon />
              <span>{company.contact.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span className="footer__tagline">{company.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
