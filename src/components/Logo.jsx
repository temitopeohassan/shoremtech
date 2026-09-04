// ST monogram. Replace with the supplied logo file when available:
// import logo from '../assets/logo.png'  ->  <img src={logo} alt="Shorem Tech Limited" />

export default function Logo({ variant = 'light' }) {
  const wordColor = variant === 'light' ? '#ffffff' : '#063b82'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.66)' : '#6b7280'

  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#063b82" />
        <path d="M26 8 13 27h8l-3 15 16-22h-8l4-12z" fill="#f58213" />
        <path d="M6 40h36" stroke="#f58213" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="logo__text">
        <span className="logo__word" style={{ color: wordColor }}>
          SHOREM TECH
        </span>
        <span className="logo__sub" style={{ color: subColor }}>
          Limited
        </span>
      </span>
    </span>
  )
}
