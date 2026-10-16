import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { waLink } from '../config'

const LINKS = [
  ['/', 'Home'],
  ['/services', 'Services & Pricing'],
  ['/faq', 'FAQs'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      {/* phone: app bar */}
      <div className="flex h-14 items-center justify-between px-4 md:hidden">
        <Link to="/" aria-label="CareerChill home"><Logo /></Link>
        <a
          href={waLink('Hi CareerChill! I have a question.')}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-emerald-700 active:bg-slate-50"
        >
          <Icon name="chat" />
        </a>
      </div>

      {/* desktop */}
      <div className="container-x hidden h-16 items-center justify-between md:flex">
        <div className="flex items-center gap-10">
          <Link to="/" aria-label="CareerChill home"><Logo /></Link>
          <nav className="flex items-center gap-1">
            {LINKS.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `rounded-lg px-3.5 py-2 text-sm font-medium transition ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href={waLink('Hi CareerChill!')} target="_blank" rel="noreferrer" className="btn-ghost">
            <Icon name="chat" className="h-4 w-4" /> WhatsApp
          </a>
          <Link to="/order" className="btn-primary">Place an order</Link>
        </div>
      </div>
    </header>
  )
}
