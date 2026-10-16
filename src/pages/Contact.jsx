import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'
import { SITE, waLink } from '../config'

export default function Contact() {
  const items = [
    ['💬', 'WhatsApp', SITE.whatsappDisplay, waLink('Hi CareerChill!'), 'Fastest way — usually within a few hours.', 'bg-mint', 'Open chat →'],
    ['✉️', 'Email', SITE.email, `mailto:${SITE.email}`, 'For longer requests or sharing your resume file.', 'bg-butter', 'Send email →'],
    ['📸', 'Instagram', `@${SITE.instagram}`, `https://instagram.com/${SITE.instagram}`, 'Career tips, resume fixes and reels.', 'bg-lilac', 'Follow →'],
  ]
  return (
    <div className="container-x pt-6 md:pt-10">
      <PageHead
        eyebrow="Contact"
        title="Let's talk. No pressure."
        sub="Questions before ordering? Not sure which service fits? Message me."
        emoji="👋"
        tone="bg-sky"
      />
      <div className="mt-10 grid gap-7 md:grid-cols-3">
        {items.map(([e, t, v, href, d, c, cta]) => (
          <a key={t} href={href} target="_blank" rel="noreferrer" className={`flex flex-col rounded-3xl border-2 border-midnight p-7 shadow-pop transition hover:-translate-y-1 hover:shadow-pop-lg ${c}`}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-midnight bg-white text-3xl">{e}</div>
            <h3 className="mt-5 text-2xl font-extrabold">{t}</h3>
            <p className="mt-1 break-all text-lg font-extrabold">{v}</p>
            <p className="mt-2 flex-1 text-sm font-medium text-midnight/70">{d}</p>
            <span className="mt-5 inline-block text-sm font-extrabold underline decoration-2 underline-offset-4">{cta}</span>
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border-2 border-midnight bg-white p-7 shadow-pop sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-extrabold">Ready to place an order?</h2>
          <p className="text-sm font-medium text-midnight/65">The request form takes 2 minutes and opens WhatsApp with everything filled.</p>
        </div>
        <Link to="/order" className="btn-primary btn-lg">Order request →</Link>
      </div>
    </div>
  )
}
