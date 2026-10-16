export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 64 64" className={`${className} flex-none`} aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" rx="16" fill="#A7F3D0" stroke="#111827" strokeWidth="4" />
      <path d="M41 24a13 13 0 1 0 0 16" fill="none" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
      <circle cx="46" cy="21" r="4" fill="#111827" />
    </svg>
  )
}

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-midnight'}`}>
        Career<span className={light ? 'text-mint' : 'text-mint-dark'}>Chill</span>
      </span>
    </span>
  )
}
