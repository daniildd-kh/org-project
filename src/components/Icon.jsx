const icons = {
  activity: (
    <polyline points="3 12 7 12 10 5 14 19 17 12 21 12" />
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-4" />
      <path d="M12 15V8" />
      <path d="M16 15v-6" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  fileText: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h4" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-9-9a4.5 4.5 0 0 1 8-4 4.5 4.5 0 0 1 8 4c-2 4.6-9 9-9 9Z" />
  ),
  hospital: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </>
  ),
  microscope: (
    <>
      <path d="m10 6 4 4" />
      <path d="m8 8 6-6 4 4-6 6" />
      <path d="M12 12a4 4 0 0 1-4 4" />
      <path d="M5 21h14" />
      <path d="M12 16v5" />
    </>
  ),
  pulse: (
    <polyline points="3 13 7 13 9 8 13 18 15 13 21 13" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  source: (
    <>
      <path d="M5 5h14v14H5z" />
      <path d="M8 9h8" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 4v5a4 4 0 0 0 8 0V4" />
      <path d="M14 9v5a4 4 0 0 0 8 0v-1" />
      <circle cx="22" cy="12" r="1" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  users: (
    <>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="9" r="3" />
      <path d="M22 19a3 3 0 0 0-4-2.8" />
      <path d="M2 19a3 3 0 0 1 4-2.8" />
    </>
  ),
}

export function Icon({ name, className = '', size = 24 }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      {icons[name] ?? icons.checkCircle}
    </svg>
  )
}
