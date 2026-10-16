// Small stroke-icon set (24x24). Usage: <Icon name="check" className="h-5 w-5" />
const P = {
  file: <><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5M10 13h6M10 17h6" /></>,
  briefcase: <><rect x="3.5" y="7.5" width="17" height="12" rx="2" /><path d="M9 7.5v-2h6v2M3.5 13h17" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  layers: <><path d="M12 3 3 8l9 5 9-5-9-5z" /><path d="M3 12.5l9 5 9-5M3 17l9 5 9-5" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M7.5 11V8a4.5 4.5 0 0 1 9 0v3" /></>,
  chat: <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5.4A8.5 8.5 0 1 1 21 12Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  insta: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7h.01" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  card: <><rect x="2.5" y="5.5" width="19" height="13" rx="2" /><path d="M2.5 10h19" /></>,
  refresh: <path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" />,
  pencil: <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></>,
  inbox: <><path d="M4 13l2-8h12l2 8v6H4z" /><path d="M4 13h5l1 2h4l1-2h5" /></>,
  target2: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><circle cx="12" cy="12" r="5" /></>,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  list: <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />,
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.8 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name]}
    </svg>
  )
}
