import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { ArrowIcon } from './Icons'
import './Hero.css'

/*
 * The single-line diagram is the signature element: the same drawing an
 * engineer sketches to explain a power system — source, transformer,
 * breaker, load — with a current pulse running through it.
 */
function SingleLineDiagram() {
  return (
    <svg
      className="hero__diagram"
      viewBox="0 0 320 420"
      role="img"
      aria-label="Single-line diagram: incoming 33kV supply through transformer and circuit breaker to the load"
    >
      <line className="sld__wire" x1="160" y1="20" x2="160" y2="80" />
      <circle className="sld__node" cx="160" cy="20" r="6" />
      <text className="sld__tag" x="180" y="26">
        33kV incoming
      </text>

      <circle className="sld__coil" cx="160" cy="112" r="26" />
      <circle className="sld__coil" cx="160" cy="146" r="26" />
      <text className="sld__tag" x="200" y="134">
        Transformer
      </text>

      <line className="sld__wire" x1="160" y1="172" x2="160" y2="220" />

      <rect className="sld__breaker" x="144" y="220" width="32" height="42" />
      <line className="sld__wire" x1="150" y1="226" x2="170" y2="256" />
      <text className="sld__tag" x="192" y="246">
        Circuit breaker
      </text>

      <line className="sld__wire" x1="160" y1="262" x2="160" y2="320" />
      <line className="sld__wire" x1="60" y1="320" x2="260" y2="320" />
      <line className="sld__wire" x1="60" y1="320" x2="60" y2="360" />
      <line className="sld__wire" x1="160" y1="320" x2="160" y2="360" />
      <line className="sld__wire" x1="260" y1="320" x2="260" y2="360" />
      <rect className="sld__load" x="42" y="360" width="36" height="26" />
      <rect className="sld__load" x="142" y="360" width="36" height="26" />
      <rect className="sld__load" x="242" y="360" width="36" height="26" />
      <text className="sld__tag sld__tag--center" x="160" y="406">
        Load
      </text>

      <circle className="sld__pulse" r="5">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          path="M160,20 L160,300 L160,320 L60,320 L60,360"
        />
      </circle>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid-overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-node" />
            Electrical power solutions · {company.contact.location}
          </p>

          <h1 className="hero__title">
            Powering today<span className="hero__dot">•</span>
            <br />
            Sustaining tomorrow
          </h1>

          <p className="hero__lead">{company.positioning}</p>

          <div className="btn-row">
            <Link to="/contact" className="btn btn--primary">
              {company.cta.primary} <ArrowIcon />
            </Link>
            <Link to="/services" className="btn btn--ghost">
              {company.cta.secondary}
            </Link>
          </div>

          <ul className="hero__stats">
            <li>
              <span className="hero__stat-value">33kV / 11kV</span>
              <span className="hero__stat-label">Injection substations</span>
            </li>
            <li>
              <span className="hero__stat-value">LV · MV · HV</span>
              <span className="hero__stat-label">Breakers serviced</span>
            </li>
            <li>
              <span className="hero__stat-value">Certified</span>
              <span className="hero__stat-label">Engineering team</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <SingleLineDiagram />
        </div>
      </div>
    </section>
  )
}
