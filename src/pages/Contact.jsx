import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'
import Icon from '../components/Icon'
import { SITE, waLink } from '../config'

export default function Contact() {
  const items = [
    ['chat', 'WhatsApp', SITE.whatsappDisplay, waLink('Hi CareerChill!'), 'Fastest way — usually within a few hours.', 'Open chat'],
    ['mail', 'Email', SITE.email, `mailto:${SITE.email}`, 'For longer requests or sharing your resume file.', 'Send email'],
    ['insta', 'Instagram', `@${SITE.instagram}`, `https://instagram.com/${SITE.instagram}`, 'Career tips, resume fixes and reels.', 'Follow'],
  ]
  return (
    <div className="container-x pt-8 md:pt-14">
      <PageHead eyebrow="Contact" title="Get in touch" sub="Questions before ordering? Not sure which service fits? Message me — no pressure." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map(([i, t, v, href, d, cta]) => (
          <a key={t} href={href} target="_blank" rel="noreferrer" className="card group flex flex-col transition hover:shadow-lift">
            <div className="icon-tile"><Icon name={i} /></div>
            <h3 className="mt-4 text-lg font-semibold">{t}</h3>
            <p className="mt-1 break-all font-semibold text-emerald-700">{v}</p>
            <p className="mt-2 flex-1 text-sm text-slate-600">{d}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">{cta} <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
          </a>
        ))}
      </div>
      <div className="card mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-semibold">Ready to place an order?</h2>
          <p className="text-sm text-slate-600">The request form takes 2 minutes and opens WhatsApp with everything filled in.</p>
        </div>
        <Link to="/order" className="btn-primary">Place an order</Link>
      </div>
    </div>
  )
}
