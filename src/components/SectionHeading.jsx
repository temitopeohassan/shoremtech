export default function SectionHeading({ label, title, lead, center = false, id }) {
  return (
    <div className={center ? 'section-heading section-heading--center' : 'section-heading'}>
      {label && (
        <div className={center ? 'busbar busbar--center' : 'busbar'}>
          <span className="busbar__node" />
          <span className="busbar__line" />
          <span className="busbar__label">{label}</span>
        </div>
      )}
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}
