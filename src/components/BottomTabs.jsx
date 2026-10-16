import { NavLink } from 'react-router-dom'
import Icon from './Icon'

const TABS = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/services', label: 'Services', icon: 'briefcase' },
  { to: '/order', label: 'Order', icon: 'plus', center: true },
  { to: '/faq', label: 'FAQs', icon: 'help' },
  { to: '/contact', label: 'Contact', icon: 'chat' },
]

// App-style bottom navigation — phones only.
export default function BottomTabs() {
  return (
    <nav aria-label="Main" className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-md items-end justify-around px-2">
        {TABS.map((t) =>
          t.center ? (
            <li key={t.to} className="pb-1.5">
              <NavLink
                to={t.to}
                aria-label="Place an order"
                className="-mt-5 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-emerald-600 text-white shadow-lift ring-4 ring-white active:scale-95"
              >
                <Icon name={t.icon} className="h-6 w-6" strokeWidth={2.2} />
              </NavLink>
            </li>
          ) : (
            <li key={t.to} className="flex-1">
              <NavLink
                to={t.to}
                end
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition ${isActive ? 'text-emerald-700' : 'text-slate-400'}`
                }
              >
                <Icon name={t.icon} className="h-[22px] w-[22px]" />
                {t.label}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
