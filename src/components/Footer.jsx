import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE, waLink } from '../config'

export default function Footer() {
  return (
    <footer className="mt-20 bg-midnight text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {SITE.tagline} Resume writing, interview prep kits and career guidance — personally delivered.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-mint" to="/services">Services & Pricing</Link></li>
            <li><Link className="hover:text-mint" to="/order">Order request</Link></li>
            <li><Link className="hover:text-mint" to="/faq">FAQs</Link></li>
            <li><Link className="hover:text-mint" to="/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Say hi</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-mint" href={waLink('Hi CareerChill!')} target="_blank" rel="noreferrer">WhatsApp: {SITE.whatsappDisplay}</a></li>
            <li><a className="hover:text-mint" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
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
