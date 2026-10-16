import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

const LINKS = [
  ['/', 'Home'],
  ['/services', 'Services & Pricing'],
  ['/faq', 'FAQs'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  // lock page scroll while the phone menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkCls = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-mint/60 text-midnight' : 'text-midnight/70 hover:text-midnight'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cloud/90 backdrop-blur transition ${
        scrolled || open ? 'border-midnight/10 shadow-soft' : 'border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" aria-label="CareerChill home">
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
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" viewBox="0 0 24 24">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* phone menu: full-height panel under the header */}
      {open && (
        <nav className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-cloud px-4 pb-8 pt-4 md:hidden">
          <ul className="space-y-1">
            {LINKS.map(([to, label]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-4 text-lg font-bold ${isActive ? 'bg-mint/50' : 'active:bg-midnight/5'}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/order" className="btn-primary mt-6 w-full !py-4 text-base">
            Order now
          </Link>
        </nav>
      )}
    </header>
  )
}
