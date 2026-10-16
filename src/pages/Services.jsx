import ServiceCard from '../components/ServiceCard'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { SERVICES } from '../data/services'

const POLICY = [
  ['card', 'Payment', 'Small orders: pay upfront. Larger custom orders: 50% advance, balance before final delivery. Work starts after payment is confirmed.'],
  ['pencil', 'Revisions', 'One revision round is included with resume services. Extra rounds are quoted before they start.'],
  ['refresh', 'Refunds', 'Full refund if work has not started. Partial refund possible once work has begun — shared in writing before you pay.'],
  ['clock', 'Delivery', 'Delivery time depends on the service and your deadline, and is confirmed with the price.'],
]

export default function Services() {
  return (
    <div className="container-x pt-8 md:pt-14">
      <PageHead
        eyebrow="Services & Pricing"
        title="Simple, transparent pricing"
        sub="Launch prices. The exact price depends on how much work your profile needs — confirmed with you before you pay."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 60} className="flex"><ServiceCard s={s} detailed /></Reveal>
        ))}
      </div>

      <h2 className="h-section mt-20">Policies, in plain words</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {POLICY.map(([i, t, d]) => (
          <div key={t} className="card">
            <div className="icon-tile"><Icon name={i} /></div>
            <h3 className="mt-4 font-semibold">{t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600">
        <strong className="text-slate-900">Good to know:</strong> "ATS-friendly" means a readable, well-structured resume — not a guarantee of interviews.
        Interview kits are curated preparation material from public information and common patterns, not guaranteed real questions.
      </div>
    </div>
  )
}
