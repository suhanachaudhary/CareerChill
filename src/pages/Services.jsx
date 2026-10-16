import ServiceCard from '../components/ServiceCard'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { SERVICES } from '../data/services'

const POLICY = [
  ['💳', 'Payment', 'Small orders: pay upfront. Larger custom orders: 50% advance, balance before final delivery. Work starts after payment is confirmed.', 'bg-mint'],
  ['✍️', 'Revisions', 'One revision round is included with resume services. Extra rounds are quoted before they start.', 'bg-butter'],
  ['↩️', 'Refunds', 'Full refund if work has not started. Partial refund possible once work has begun — shared in writing before you pay.', 'bg-lilac'],
  ['⏱️', 'Delivery', 'Delivery time depends on the service and your deadline, and is confirmed with the price.', 'bg-peach'],
]

export default function Services() {
  return (
    <div className="container-x pb-4 pt-6 md:pt-10">
      <PageHead
        eyebrow="Services & Pricing"
        title="Pick what you need. Pay what's fair."
        sub="Launch prices. The exact price depends on how much work your profile needs — confirmed with you before you pay."
        emoji="💸"
        tone="bg-butter"
      />

      <div className="mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 60} className="flex"><ServiceCard s={s} detailed /></Reveal>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-extrabold sm:text-4xl">Policies, in plain words</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {POLICY.map(([e, t, d, c]) => (
          <div key={t} className={`tile ${c}`}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-midnight bg-white text-2xl">{e}</div>
            <h3 className="mt-3 text-lg font-extrabold">{t}</h3>
            <p className="mt-1 text-sm font-medium text-midnight/70">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border-2 border-dashed border-midnight bg-white p-5 text-sm font-semibold text-midnight/75">
        💡 <strong>Good to know:</strong> "ATS-friendly" means a readable, well-structured resume — not a guarantee of interviews.
        Interview kits are curated preparation material from public information and common patterns, not guaranteed real questions.
      </div>
    </div>
  )
}
