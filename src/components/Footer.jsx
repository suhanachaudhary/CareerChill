import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE, waLink } from '../config'

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-midnight bg-midnight pb-28 text-white/80 md:mt-28 md:pb-0">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {SITE.tagline} Resume writing, interview prep kits and career guidance — personally delivered.
          </p>
          <a href={waLink('Hi CareerChill!')} target="_blank" rel="noreferrer" className="btn-mint mt-6 !shadow-none">Chat on WhatsApp</a>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-mint">Explore</h4>
          <ul className="space-y-2.5 text-sm font-semibold">
            <li><Link className="hover:text-mint" to="/services">Services & Pricing</Link></li>
            <li><Link className="hover:text-mint" to="/order">Order request</Link></li>
            <li><Link className="hover:text-mint" to="/faq">FAQs</Link></li>
            <li><Link className="hover:text-mint" to="/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-mint">Say hi</h4>
          <ul className="space-y-2.5 text-sm font-semibold">
            <li><a className="hover:text-mint" href={waLink('Hi CareerChill!')} target="_blank" rel="noreferrer">WhatsApp: {SITE.whatsappDisplay}</a></li>
            <li><a className="break-all hover:text-mint" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="hover:text-mint" href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">@{SITE.instagram}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE.name}. ATS-friendly means readable and well-structured — it does not guarantee a shortlist.
      </div>
    </footer>
  )
}
