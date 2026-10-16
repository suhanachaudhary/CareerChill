import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { waLink } from '../config'

const LINKS = [
  ['/', 'Home'],
  ['/services', 'Services & Pricing'],
  ['/faq', 'FAQs'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-semibold transition ${
      isActive ? 'text-midnight' : 'text-midnight/60 hover:text-midnight'
    } after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-mint-deep after:transition ${
      isActive ? 'after:opacity-100' : 'after:opacity-0'
    }`

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-cloud/90 backdrop-blur transition ${
        scrolled ? 'border-midnight/10 shadow-soft' : 'border-transparent'
      }`}
    >
      {/* phone: compact app bar */}
      <div className="flex h-14 items-center justify-between px-4 md:hidden">
        <Link to="/" aria-label="CareerChill home">
          <Logo />
        </Link>
        <a
          href={waLink('Hi CareerChill! I have a question.')}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white active:scale-95"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-3-1.2-4.9-4.2-5.1-4.4-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.8-.1 1.4Z" />
          </svg>
        </a>
      </div>

      {/* desktop: full website nav */}
      <div className="container-x hidden h-[72px] items-center justify-between md:flex">
        <Link to="/" aria-label="CareerChill home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-2">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end className={linkCls}>
              {label}
            </NavLink>
          ))}
          <a href={waLink('Hi CareerChill!')} target="_blank" rel="noreferrer" className="btn-ghost ml-3 !py-2.5">
            WhatsApp
          </a>
          <Link to="/order" className="btn-primary !py-2.5">
            Order now
          </Link>
        </nav>
      </div>
    </header>
  )
}
