import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CTABand from '../components/CTABand'
import { projects } from '../data/company'

export default function Projects() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Work we have delivered"
        lead="A sample of the power systems we have installed, upgraded and commissioned."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            label="Selected work"
            title="Recent projects"
            lead="Client names are withheld where a confidentiality agreement applies."
          />
          <div className="grid grid--2">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card__top">
                  <span>{project.client}</span>
                  <span>{project.location}</span>
                </div>
                <div className="project-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.scope}</p>
                  <div className="project-card__tags">
                    {project.services.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Have a similar project?"
        body="Send us the drawings or the equipment details and we will scope it out."
      />
    </>
  )
}
