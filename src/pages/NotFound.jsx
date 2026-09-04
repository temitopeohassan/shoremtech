import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container notfound">
      <h1>Page not found</h1>
      <p className="lead" style={{ margin: '0 auto var(--space-lg)' }}>
        That page does not exist. Head back to the homepage or go straight to our services.
      </p>
      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <Link to="/" className="btn btn--secondary">
          Back to home
        </Link>
        <Link to="/services" className="btn btn--outline">
          View services
        </Link>
      </div>
    </div>
  )
}
