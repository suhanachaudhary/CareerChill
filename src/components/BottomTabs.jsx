import { NavLink } from 'react-router-dom'

const I = ({ children }) => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const TABS = [
  { to: '/', label: 'Home', icon: <I><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10" /></I> },
  { to: '/services', label: 'Services', icon: <I><rect x="3.5" y="7" width="17" height="12.5" rx="2.5" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" /></I> },
  { to: '/order', label: 'Order', center: true, icon: <I><path d="M12 5v14M5 12h14" /></I> },
  { to: '/faq', label: 'FAQs', icon: <I><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" /><path d="M12 17h.01" /></I> },
  { to: '/contact', label: 'Contact', icon: <I><path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5.4A8.5 8.5 0 1 1 21 12Z" /></I> },
]

// App-style bottom navigation — phones only.
export default function BottomTabs() {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-midnight/10 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-md items-end justify-around px-2">
        {TABS.map((t) =>
          t.center ? (
            <li key={t.to} className="-mt-6">
              <NavLink
                to={t.to}
                aria-label="Order now"
                className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-cloud bg-midnight text-mint shadow-soft active:scale-95"
              >
                {t.icon}
                <span className="-mt-0.5 text-[10px] font-bold">Order</span>
              </NavLink>
            </li>
          ) : (
            <li key={t.to} className="flex-1">
              <NavLink
                to={t.to}
                end
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-bold transition ${
                    isActive ? 'text-mint-dark' : 'text-midnight/45'
                  }`
                }
              >
                {t.icon}
                {t.label}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
