import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTABand from '../components/CTABand'
import { serviceIcons, CheckIcon } from '../components/Icons'
import { services } from '../data/company'

export default function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="Electrical power services"
        lead="Installation, maintenance, testing and commissioning across LV, MV and HV systems."
      />

      <section className="section section--light">
        <div className="container">
          <div className="grid grid--3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="In detail"
            title="What each service covers"
            lead="Scope varies by site. These are the tasks typically included."
          />

          {services.map((service, index) => {
            const Icon = serviceIcons[service.id]
            return (
              <article className="service-detail" id={service.id} key={service.id}>
                <div className="service-detail__head">
                  <span className="service-detail__icon">{Icon && <Icon width={38} height={38} />}</span>
                  <span className="service-detail__index">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <div>
                  <p>{service.detail}</p>
                  <ul className="checklist">
                    {service.scope.map((task) => (
                      <li key={task}>
                        <CheckIcon />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CTABand
        title="Not sure which service you need?"
        body="Describe the fault or the project and we will tell you what is involved."
      />
    </>
  )
}
