import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABand from '../components/CTABand'
import { industries } from '../data/company'

export default function Industries() {
  return (
    <>
      <PageHero
        label="Industries we serve"
        title="Sectors we work in"
        lead="From production plants to new developments, the requirement is the same: power that stays on."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            label="Client sectors"
            title="Who we work for"
            lead="We adapt scheduling, permits and reporting to how your site actually runs."
          />
          <div className="grid grid--3">
            {industries.map((item) => (
              <div className="industry-card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Your sector not listed?"
        body="If it runs on electrical power, we can probably help. Ask us."
      />
    </>
  )
}
