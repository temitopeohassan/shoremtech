import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABand from '../components/CTABand'
import { CheckIcon, ShieldIcon } from '../components/Icons'
import { safetyCommitments, company } from '../data/company'

const qualityChecks = [
  'Method statement agreed before work starts',
  'Equipment inspected and tested before energising',
  'Calibrated test instruments only',
  'Supervision by a qualified engineer on site',
  'Written test records issued at handover',
  'Defects logged and closed out, not left open'
]

export default function SafetyQuality() {
  return (
    <>
      <PageHero
        label="Safety & quality"
        title="Zero compromise on safety"
        lead={company.trustMessage}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            label="Safety commitments"
            title="How our teams work on site"
            lead="Live electrical work leaves no margin for shortcuts, so the rules do not change from job to job."
          />
          <div className="grid grid--2">
            {safetyCommitments.map((item) => (
              <div className="card" key={item.title}>
                <ShieldIcon width={30} height={30} style={{ color: 'var(--orange)' }} />
                <h3 style={{ color: 'var(--navy)', marginTop: 'var(--space-md)' }}>{item.title}</h3>
                <p style={{ color: 'var(--gray-medium)', marginBottom: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container split">
          <div>
            <SectionHeading
              label="Quality control"
              title="Workmanship you can inspect"
              lead="Quality is not a claim on a website. It is a set of checks that either happened or did not."
            />
          </div>
          <div>
            <ul className="checklist">
              {qualityChecks.map((item) => (
                <li key={item} style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        title="Need a maintenance schedule?"
        body="We will assess your installation and propose a preventive maintenance plan."
      />
    </>
  )
}
