import { SITE } from '../config'

const SECTIONS = [
  ['What I collect', 'Only what you send for your order: name, contact details, resume content, target role and preferences.'],
  ['How it is used', 'Solely to create your resume / kit and communicate about your order. Never sold, shared or posted publicly.'],
  ['Where files live', 'In private storage with no public links. Files are shared back to you only on WhatsApp or email.'],
  ['This website', 'The order form does not upload or store anything on a server. It prepares a message that you send yourself via WhatsApp or email.'],
  ['Deletion', `Completed orders are cleared after 30 days. You can ask for earlier deletion any time at ${SITE.email} or on WhatsApp.`],
  ['Testimonials', 'Before/after samples or reviews are shown only with your permission and with personal details removed.'],
]

export default function Privacy() {
  return (
    <div className="container-x max-w-3xl py-10 sm:py-14">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Your resume is personal. Treated that way.</h1>
      <div className="mt-8 space-y-4">
        {SECTIONS.map(([t, d]) => (
          <div key={t} className="card !p-5">
            <h2 className="font-extrabold">{t}</h2>
            <p className="mt-1 text-sm text-midnight/70">{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
