import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE, waLink } from '../config'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white pb-24 md:mt-28 md:pb-0">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr] md:py-14">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            {SITE.tagline} Resume writing, interview prep kits and career guidance — personally delivered.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-900">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link className="hover:text-slate-900" to="/services">Services & Pricing</Link></li>
            <li><Link className="hover:text-slate-900" to="/order">Place an order</Link></li>
            <li><Link className="hover:text-slate-900" to="/faq">FAQs</Link></li>
            <li><Link className="hover:text-slate-900" to="/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-900">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href={waLink('Hi CareerChill!')} target="_blank" rel="noreferrer">WhatsApp: {SITE.whatsappDisplay}</a></li>
            <li><a className="break-all hover:text-slate-900" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="hover:text-slate-900" href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">Instagram @{SITE.instagram}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. ATS-friendly means readable and well-structured — it does not guarantee a shortlist.
      </div>
    </footer>
  )
}
