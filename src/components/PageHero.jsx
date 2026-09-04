import './PageHero.css'

export default function PageHero({ label, title, lead }) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="container page-hero__inner">
        {label && (
          <div className="busbar">
            <span className="busbar__node" />
            <span className="busbar__line" />
            <span className="busbar__label">{label}</span>
          </div>
        )}
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
      </div>
    </section>
  )
}
