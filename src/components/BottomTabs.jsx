import { NavLink } from 'react-router-dom'

const I = ({ children }) => (
  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const TABS = [
  { to: '/', label: 'Home', icon: <I><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10" /></I> },
  { to: '/services', label: 'Services', icon: <I><rect x="3.5" y="7" width="17" height="12.5" rx="2.5" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" /></I> },
  { to: '/order', label: 'Order', center: true, icon: <I><path d="M12 5v14M5 12h14" /></I> },
  { to: '/faq', label: 'FAQs', icon: <I><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" /><path d="M12 17h.01" /></I> },
  { to: '/contact', label: 'Chat', icon: <I><path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5.4A8.5 8.5 0 1 1 21 12Z" /></I> },
]

// Floating app-style tab pill — phones only.
export default function BottomTabs() {
  return (
    <nav aria-label="Main" className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <ul className="pointer-events-auto mx-auto flex max-w-md items-center justify-between rounded-[2rem] border-2 border-midnight bg-white px-2 py-1.5 shadow-pop">
        {TABS.map((t) =>
          t.center ? (
            <li key={t.to}>
              <NavLink
                to={t.to}
                aria-label="Order now"
                className="-mt-8 flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-midnight bg-mint text-midnight shadow-pop-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                {t.icon}
                <span className="text-[10px] font-extrabold leading-none">Order</span>
              </NavLink>
            </li>
          ) : (
            <li key={t.to} className="flex-1">
              <NavLink
                to={t.to}
                end
                className={({ isActive }) =>
                  `mx-0.5 flex flex-col items-center gap-0.5 rounded-2xl py-2 text-[10px] font-extrabold transition ${
                    isActive ? 'bg-midnight text-mint' : 'text-midnight/55'
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
