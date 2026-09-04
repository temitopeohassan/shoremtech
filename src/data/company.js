// Single source of truth for site content.
// Edit values here and every page updates.

export const company = {
  name: 'Shorem Tech Limited',
  shortName: 'Shorem Tech',
  tagline: 'Powering Today • Sustaining Tomorrow',
  secondaryTagline: 'Powering your world with expertise you can trust.',
  positioning:
    'A trusted electrical power solutions company delivering safe, reliable and efficient services across power systems.',
  about:
    'Shorem Tech Limited is an electrical power solutions company committed to delivering safe, reliable and efficient services across power systems.',
  trustMessage: 'Safety. Quality. Reliability.',
  contact: {
    email: 'shorem.sr@gmail.com',
    phone: '+234 803 221 1858',
    phoneHref: '+2348032211858',
    location: 'Lagos, Nigeria'
  },
  cta: {
    primary: 'Get a quote',
    secondary: 'Our services',
    contact: 'Talk to our engineering team'
  }
}

export const services = [
  {
    id: 'transformer-installation-maintenance',
    name: 'Transformer Installation & Maintenance',
    short: 'Transformers',
    description: 'Installation, servicing, testing and repair of power transformers.',
    detail:
      'We handle transformers from delivery to energisation: offloading and positioning, oil filling and filtration, winding resistance and ratio checks, oil sampling, bushing and tap changer servicing, and preventive maintenance that keeps units running through their full design life.',
    scope: [
      'Offloading, positioning and installation',
      'Oil filling, filtration and dielectric testing',
      'Winding resistance, ratio and insulation tests',
      'Tap changer and bushing servicing',
      'Fault diagnosis and repair',
      'Planned preventive maintenance schedules'
    ]
  },
  {
    id: 'circuit-breaker-installation-maintenance',
    name: 'Circuit Breaker Installation & Maintenance',
    short: 'Circuit breakers',
    description:
      'Installation, testing, servicing and overhaul of LV, MV and HV circuit breakers.',
    detail:
      'Breakers are the last line of defence on a network, so we treat them that way. Our team installs, services and fully overhauls low, medium and high voltage breakers, verifying timing, contact resistance and insulation before a panel goes back into service.',
    scope: [
      'LV, MV and HV breaker installation',
      'Contact resistance and timing tests',
      'Insulation and dielectric testing',
      'Mechanism servicing and lubrication',
      'Full overhaul and spare part replacement',
      'Panel and switchgear maintenance'
    ]
  },
  {
    id: 'electrical-power-installation',
    name: 'Electrical Power Installation',
    short: 'Power installation',
    description:
      'Design and installation of electrical power systems for industrial, commercial and residential projects.',
    detail:
      'From load schedules and cable sizing to final terminations, we design and install power systems that are correctly rated, properly protected and documented. Every installation is built to be maintained, not just to pass inspection.',
    scope: [
      'Load assessment and system design',
      'Distribution board and panel installation',
      'Cable sizing, laying, glanding and termination',
      'Earthing and lightning protection',
      'Generator and changeover integration',
      'As-built drawings and handover documentation'
    ]
  },
  {
    id: 'substation-construction-maintenance',
    name: 'Substation Construction & Maintenance',
    short: 'Substations',
    description: 'Construction, upgrade and maintenance of 33kV / 11kV injection substations.',
    detail:
      'We build and maintain injection substations end to end — civil works, structures, switchgear, protection and earthing — and upgrade ageing substations to carry the load they are actually being asked to carry today.',
    scope: [
      '33kV and 11kV injection substations',
      'Civil works, structures and enclosures',
      'Switchgear and busbar installation',
      'Protection and control wiring',
      'Earth mat design and installation',
      'Routine and corrective maintenance'
    ]
  },
  {
    id: 'testing-commissioning',
    name: 'Testing & Commissioning',
    short: 'Testing & commissioning',
    description: 'Electrical testing, diagnostics, protection testing and system commissioning.',
    detail:
      'Nothing is energised on assumption. We carry out pre-commissioning checks, primary and secondary injection, relay coordination verification and full functional testing, then hand over a signed test record you can file and audit against.',
    scope: [
      'Pre-commissioning inspection and checks',
      'Primary and secondary injection testing',
      'Relay setting and coordination verification',
      'Insulation, continuity and earth resistance testing',
      'Functional and interlock testing',
      'Test records and commissioning reports'
    ]
  }
]

export const valueProps = [
  { title: 'Experienced professionals', description: 'Skilled and certified engineers on every job.' },
  { title: 'Quality workmanship', description: 'We deliver to the highest standards.' },
  { title: 'Reliable and timely service', description: 'On time, every time.' },
  { title: 'Safety first', description: 'Zero compromise on safety.' },
  { title: 'Client satisfaction', description: 'Your satisfaction is our priority.' }
]

export const industries = [
  { name: 'Industrial companies', note: 'Plant power systems kept running through production hours.' },
  { name: 'Manufacturing', note: 'Transformer and breaker maintenance planned around shutdowns.' },
  { name: 'Commercial property', note: 'Reliable distribution for offices, malls and mixed-use buildings.' },
  { name: 'Construction', note: 'Power installation delivered to programme on active sites.' },
  { name: 'Real estate development', note: 'Substations and distribution for new estates and developments.' },
  { name: 'Government and public sector', note: 'Substation construction, upgrades and scheduled maintenance.' },
  { name: 'Facility management', note: 'Preventive maintenance contracts and emergency response.' },
  { name: 'Electrical contractors', note: 'Specialist testing and commissioning support for your projects.' },
  { name: 'Residential projects', note: 'Safe, correctly rated installations for homes and estates.' }
]

// Replace with real project records as they are documented.
export const projects = [
  {
    title: '11kV injection substation construction',
    client: 'Industrial client',
    location: 'Lagos, Nigeria',
    scope: 'Civil works, switchgear installation, earthing, protection wiring and commissioning.',
    services: ['Substations', 'Testing & commissioning']
  },
  {
    title: 'Distribution transformer installation and energisation',
    client: 'Manufacturing facility',
    location: 'Lagos, Nigeria',
    scope: 'Offloading, positioning, oil filtration, pre-energisation testing and handover.',
    services: ['Transformers', 'Testing & commissioning']
  },
  {
    title: 'MV switchgear overhaul',
    client: 'Commercial property',
    location: 'Lagos, Nigeria',
    scope: 'Breaker servicing, contact resistance and timing tests, panel maintenance.',
    services: ['Circuit breakers']
  },
  {
    title: 'Electrical power installation for a new development',
    client: 'Real estate developer',
    location: 'Lagos, Nigeria',
    scope: 'Load assessment, distribution design, cabling, earthing and as-built documentation.',
    services: ['Power installation']
  }
]

export const safetyCommitments = [
  {
    title: 'Isolate, test, earth',
    body: 'No work starts on a circuit until it is isolated, proven dead and earthed. Permits and lock-out tags are used in every live environment.'
  },
  {
    title: 'Right people, right certification',
    body: 'Work is assigned to engineers and technicians qualified for that voltage level and that equipment type. Nothing is improvised.'
  },
  {
    title: 'PPE without exception',
    body: 'Arc-rated clothing, insulated tools and tested gloves are standard issue, not a reaction to an incident.'
  },
  {
    title: 'Documented test results',
    body: 'Every commissioning and maintenance visit produces a written record you can audit, compare against and plan from.'
  }
]

export const process = [
  {
    step: 'Site assessment',
    body: 'We visit, review your existing installation, load profile and drawings, and confirm what is actually needed.'
  },
  {
    step: 'Proposal and scope',
    body: 'You receive a written scope, method statement and quotation with clear pricing and timelines.'
  },
  {
    step: 'Execution',
    body: 'Certified engineers carry out the work under permit, with safety controls and progress reporting throughout.'
  },
  {
    step: 'Testing and handover',
    body: 'Results are recorded, systems are commissioned and you receive test records and as-built documentation.'
  },
  {
    step: 'Ongoing maintenance',
    body: 'We agree a preventive maintenance schedule so faults are found before they take your plant down.'
  }
]
