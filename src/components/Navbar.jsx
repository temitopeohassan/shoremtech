import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company } from '../data/company'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/industries', label: 'Industries' },
  { to: '/safety-quality', label: 'Safety & quality' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="navbar">
      <div className="navbar__topline">
        <div className="container navbar__topline-inner">
          <span>{company.trustMessage}</span>
          <a href={`tel:${company.contact.phoneHref}`}>{company.contact.phone}</a>
        </div>
      </div>

      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label={`${company.name} home`}>
          <img src="/logo.jpg" alt={`${company.name} logo`} className="navbar__logo-img" />
        </Link>

        <nav className={open ? 'navbar__nav navbar__nav--open' : 'navbar__nav'} aria-label="Main">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary navbar__cta">
            {company.cta.primary}
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'navbar__bar navbar__bar--x1' : 'navbar__bar'} />
          <span className={open ? 'navbar__bar navbar__bar--hide' : 'navbar__bar'} />
          <span className={open ? 'navbar__bar navbar__bar--x2' : 'navbar__bar'} />
        </button>
      </div>
    </header>
  )
}
