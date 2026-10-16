import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { waLink } from '../config'

const LINKS = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/faq', 'FAQs'],
  ['/contact', 'Contact'],
]

const WaIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-3-1.2-4.9-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.8-.1 1.4Z" />
  </svg>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-midnight bg-cloud/95 backdrop-blur">
      {/* phone: app bar */}
      <div className="flex h-14 items-center justify-between px-4 md:hidden">
        <Link to="/" aria-label="CareerChill home"><Logo /></Link>
        <a
          href={waLink('Hi CareerChill! I have a question.')}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-midnight bg-[#25D366] text-midnight shadow-pop-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          <WaIcon />
        </a>
      </div>

      {/* desktop: full-width website bar */}
      <div className="container-x hidden h-20 items-center justify-between md:flex">
        <Link to="/" aria-label="CareerChill home"><Logo /></Link>
        <nav className="flex items-center gap-2 rounded-full border-2 border-midnight bg-white p-1.5 shadow-pop-sm">
          {LINKS.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-extrabold transition ${isActive ? 'bg-midnight text-mint' : 'hover:bg-mint/50'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={waLink('Hi CareerChill!')} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5">
            <WaIcon /> WhatsApp
          </a>
          <Link to="/order" className="btn-mint !py-2.5">Order now →</Link>
        </div>
      </div>
    </header>
  )
}
