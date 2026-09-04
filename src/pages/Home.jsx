import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTABand from '../components/CTABand'
import { CheckIcon, ShieldIcon, ArrowIcon } from '../components/Icons'
import { company, services, valueProps, industries, safetyCommitments } from '../data/company'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Company introduction */}
      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              label="Who we are"
              title="Electrical power work, done to standard"
              lead={company.about}
            />
            <p>
              We work across transformers, circuit breakers, injection substations and full power
              installations — from design and construction through to testing, commissioning and
              scheduled maintenance. Every job is carried out by certified engineers, under permit,
              with results written down.
            </p>
            <div className="btn-row">
              <Link to="/about" className="btn btn--outline">
                More about us <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="fact-panel">
            <h3>At a glance</h3>
            <dl>
              <dt>Based in</dt>
              <dd>{company.contact.location}</dd>
              <dt>Voltage levels</dt>
              <dd>LV, MV and HV — including 33kV / 11kV injection substations</dd>
              <dt>Core disciplines</dt>
              <dd>Installation, maintenance, testing and commissioning</dd>
              <dt>Non-negotiable</dt>
              <dd>{company.trustMessage}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label="Core services"
            title="What we do"
            lead="Five service lines covering the equipment that carries your load."
          />
          <div className="grid grid--3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Shorem Tech */}
      <section className="section section--navy">
        <div className="container">
          <SectionHeading
            label="Why Shorem Tech"
            title="Reasons clients keep calling us back"
          />
          <div className="grid grid--3">
            {valueProps.map((item) => (
              <div className="value-item" key={item.title}>
                <span className="value-item__mark">
                  <CheckIcon width={20} height={20} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Industries served"
            title="Who we work for"
            lead="Different sites, same requirement: power that stays on and an installation that can be maintained."
          />
          <div className="grid grid--3">
            {industries.slice(0, 6).map((item) => (
              <div className="industry-card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 'var(--space-xl)' }}>
            <Link to="/industries" className="btn btn--outline">
              See all industries <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Safety and quality commitment */}
      <section className="section section--blue">
        <div className="container split">
          <div>
            <SectionHeading
              label="Safety & quality"
              title="Zero compromise on safety"
              lead="Live electrical work leaves no margin for shortcuts. These are the rules our teams work to, on every site."
            />
            <div className="btn-row">
              <Link to="/safety-quality" className="btn btn--secondary">
                Our safety approach <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="card">
            <ShieldIcon width={36} height={36} style={{ color: 'var(--orange)' }} />
            <ul className="checklist" style={{ marginTop: 'var(--space-md)' }}>
              {safetyCommitments.map((item) => (
                <li key={item.title}>
                  <CheckIcon />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
