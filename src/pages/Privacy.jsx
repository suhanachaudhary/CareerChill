import PageHead from '../components/PageHead'
import Icon from '../components/Icon'
import { SITE } from '../config'

const SECTIONS = [
  ['inbox', 'What I collect', 'Only what you send for your order: name, contact details, resume content, target role and preferences.'],
  ['target2', 'How it is used', 'Solely to create your resume / kit and communicate about your order. Never sold, shared or posted publicly.'],
  ['lock', 'Where files live', 'In private storage with no public links. Files are shared back to you only on WhatsApp or email.'],
  ['globe', 'This website', 'The order form does not upload or store anything on a server. It prepares a message that you send yourself via WhatsApp or email.'],
  ['refresh', 'Deletion', `Completed orders are cleared after 30 days. You can ask for earlier deletion any time at ${SITE.email} or on WhatsApp.`],
  ['shield', 'Testimonials', 'Before/after samples or reviews are shown only with your permission and with personal details removed.'],
]

export default function Privacy() {
  return (
    <div className="container-x pt-8 md:pt-14">
      <PageHead eyebrow="Privacy" title="Your resume is personal. Treated that way." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {SECTIONS.map(([i, t, d]) => (
          <div key={t} className="card">
            <div className="icon-tile"><Icon name={i} /></div>
            <h2 className="mt-4 text-lg font-semibold">{t}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
