import { Link } from 'react-router-dom'
import { serviceIcons, ArrowIcon } from './Icons'
import './ServiceCard.css'

export default function ServiceCard({ service }) {
  const Icon = serviceIcons[service.id]

  return (
    <article className="service-card">
      <span className="service-card__rail" aria-hidden="true" />
      <div className="service-card__icon">{Icon && <Icon />}</div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <Link to={`/services#${service.id}`} className="service-card__link">
        What this covers <ArrowIcon />
      </Link>
    </article>
  )
}
