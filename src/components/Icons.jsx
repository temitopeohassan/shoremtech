// Line-drawn engineering icons. Stroke inherits currentColor.

const base = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export function TransformerIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="9" width="20" height="14" rx="2" />
      <path d="M11 9V5M21 9V5M11 23v4M21 23v4M6 13h-3M6 19h-3M26 13h3M26 19h3" />
    </svg>
  )
}

export function BreakerIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 3v7M16 22v7" />
      <path d="M16 10 24 19" />
      <circle cx="16" cy="10" r="2" />
      <circle cx="16" cy="22" r="2" />
    </svg>
  )
}

export function InstallationIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 3 8 18h7l-2 11 11-15h-7l1-11z" />
    </svg>
  )
}

export function SubstationIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 29V7l10-4 10 4v22" />
      <path d="M6 13h20M6 21h20M11 29V13M21 29V13" />
    </svg>
  )
}

export function TestingIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="7" width="24" height="18" rx="2" />
      <path d="M8 19l4-6 4 8 4-11 4 9" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 3 5 7v8c0 7 4.6 12 11 14 6.4-2 11-7 11-14V7L16 3z" />
      <path d="m11 16 3.5 3.5L21 13" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="m5 17 7 7 15-15" />
    </svg>
  )
}

export function ArrowIcon(props) {
  return (
    <svg {...base} width="18" height="18" {...props}>
      <path d="M5 16h22M19 8l8 8-8 8" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M28 23v4a2 2 0 0 1-2.2 2 27 27 0 0 1-11.8-4.2A26.6 26.6 0 0 1 5.8 16.7 27 27 0 0 1 1.6 4.8 2 2 0 0 1 3.6 2.6h4a2 2 0 0 1 2 1.7c.13 1 .36 2 .7 2.9a2 2 0 0 1-.45 2.1L8.5 10.7a21.3 21.3 0 0 0 8 8l1.4-1.4a2 2 0 0 1 2.1-.45c.94.34 1.9.57 2.9.7A2 2 0 0 1 28 23z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <rect x="3" y="6" width="26" height="20" rx="2" />
      <path d="m3 9 13 9L29 9" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} width="20" height="20" {...props}>
      <path d="M16 29s10-8.4 10-16A10 10 0 0 0 6 13c0 7.6 10 16 10 16z" />
      <circle cx="16" cy="13" r="3.5" />
    </svg>
  )
}

export const serviceIcons = {
  'transformer-installation-maintenance': TransformerIcon,
  'circuit-breaker-installation-maintenance': BreakerIcon,
  'electrical-power-installation': InstallationIcon,
  'substation-construction-maintenance': SubstationIcon,
  'testing-commissioning': TestingIcon
}
