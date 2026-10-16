import PageHead from '../components/PageHead'
import { SITE } from '../config'

const SECTIONS = [
  ['📥', 'What I collect', 'Only what you send for your order: name, contact details, resume content, target role and preferences.', 'bg-mint'],
  ['🎯', 'How it is used', 'Solely to create your resume / kit and communicate about your order. Never sold, shared or posted publicly.', 'bg-butter'],
  ['🗄️', 'Where files live', 'In private storage with no public links. Files are shared back to you only on WhatsApp or email.', 'bg-lilac'],
  ['🌐', 'This website', 'The order form does not upload or store anything on a server. It prepares a message that you send yourself via WhatsApp or email.', 'bg-sky'],
  ['🗑️', 'Deletion', `Completed orders are cleared after 30 days. You can ask for earlier deletion any time at ${SITE.email} or on WhatsApp.`, 'bg-peach'],
  ['⭐', 'Testimonials', 'Before/after samples or reviews are shown only with your permission and with personal details removed.', 'bg-mint'],
]

export default function Privacy() {
  return (
    <div className="container-x pt-6 md:pt-10">
      <PageHead eyebrow="Privacy" title="Your resume is personal. Treated that way." emoji="🔒" tone="bg-peach" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {SECTIONS.map(([e, t, d, c]) => (
          <div key={t} className={`tile !p-6 ${c}`}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-midnight bg-white text-2xl">{e}</div>
            <h2 className="mt-3 text-lg font-extrabold">{t}</h2>
            <p className="mt-1 text-sm font-medium text-midnight/70">{d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
