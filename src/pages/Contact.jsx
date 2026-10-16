import { SITE, waLink } from '../config'

export default function Contact() {
  const items = [
    ['💬', 'WhatsApp', SITE.whatsappDisplay, waLink('Hi CareerChill!'), 'Fastest way — usually within a few hours.'],
    ['✉️', 'Email', SITE.email, `mailto:${SITE.email}`, 'For longer requests or sharing your resume file.'],
    ['📸', 'Instagram', `@${SITE.instagram}`, `https://instagram.com/${SITE.instagram}`, 'Career tips, resume fixes and reels.'],
  ]
  return (
    <div className="container-x py-10 sm:py-14">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Let's talk</h1>
      <p className="mt-3 max-w-xl text-midnight/70">
        Questions before ordering? Not sure which service fits? Message me — no pressure.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map(([e, t, v, href, d]) => (
          <a key={t} href={href} target="_blank" rel="noreferrer" className="card transition hover:-translate-y-1">
            <div className="text-3xl">{e}</div>
            <h3 className="mt-3 font-extrabold">{t}</h3>
            <p className="font-semibold text-mint-dark">{v}</p>
            <p className="mt-1 text-sm text-midnight/60">{d}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
