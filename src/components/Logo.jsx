export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={`${className} flex-none`} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#111827" />
      <path d="M42 24a13 13 0 1 0 0 16" fill="none" stroke="#A7F3D0" strokeWidth="6" strokeLinecap="round" />
      <circle cx="46" cy="21" r="4" fill="#A7F3D0" />
    </svg>
  )
}

export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`text-lg font-bold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        Career<span className={light ? 'text-mint' : 'text-emerald-600'}>Chill</span>
      </span>
    </span>
  )
}
