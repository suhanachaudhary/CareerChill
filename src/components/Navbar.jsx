import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

const LINKS = [
  ['/', 'Home'],
  ['/services', 'Services & Pricing'],
  ['/faq', 'FAQs'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkCls = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-mint/60 text-midnight' : 'text-midnight/70 hover:text-midnight'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-midnight/5 bg-cloud/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" aria-label="CareerChill home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end className={linkCls}>
              {label}
            </NavLink>
          ))}
          <Link to="/order" className="btn-primary ml-3 !py-2.5">
            Order now
          </Link>
        </nav>
        <button
          className="rounded-xl p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-1 pb-4 md:hidden">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end className={linkCls} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link to="/order" className="btn-primary mt-2" onClick={() => setOpen(false)}>
            Order now
          </Link>
        </nav>
      )}
    </header>
  )
}
