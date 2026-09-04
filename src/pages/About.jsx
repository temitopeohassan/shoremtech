import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABand from '../components/CTABand'
import { CheckIcon } from '../components/Icons'
import { company, valueProps, process } from '../data/company'

export default function About() {
  return (
    <>
      <PageHero
        label="About us"
        title="Built around safe, reliable power"
        lead={company.positioning}
      />

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading label="Our company" title="Who we are" />
            <p>{company.about}</p>
            <p>
              We install and maintain the equipment your operation depends on — transformers,
              circuit breakers, switchgear, injection substations and full distribution systems.
              Our engineers are certified for the voltage levels they work on, and every job ends
              with test records and documentation you can keep.
            </p>
            <p>
              We work with industrial plants, developers, facility managers, public-sector clients
              and other contractors across {company.contact.location} and beyond.
            </p>
          </div>

          <div className="fact-panel">
            <h3>What we stand for</h3>
            <ul className="checklist">
              {valueProps.map((item) => (
                <li key={item.title} style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <CheckIcon />
                  <span>
                    <strong>{item.title}.</strong> {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            label="How we work"
            title="From first site visit to signed handover"
            lead="Our process runs in order, because each step depends on the one before it."
          />
          <ol className="process-list">
            {process.map((item) => (
              <li key={item.step}>
                <div>
                  <h3>{item.step}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABand
        title="Want to talk through a project?"
        body="Send us the details and we will arrange a site assessment."
      />
    </>
  )
}
