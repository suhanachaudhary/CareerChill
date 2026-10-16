import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'

const POLICY = [
  ['💳 Payment', 'Small orders: pay upfront. Larger custom orders: 50% advance, balance before final delivery. Work starts after payment is confirmed.'],
  ['✍️ Revisions', 'One revision round is included with resume services. Extra rounds are quoted before they start.'],
  ['↩️ Refunds', 'Full refund if work has not started. Partial refund possible once work has begun — shared in writing before you pay.'],
  ['⏱️ Delivery', 'Delivery time depends on the service and your deadline, and is confirmed with the price.'],
]

export default function Services() {
  return (
    <div className="container-x py-14">
      <p className="eyebrow">Services & Pricing</p>
      <h1 className="mt-2 text-4xl font-extrabold">Pick what you need</h1>
      <p className="mt-3 max-w-2xl text-midnight/70">
        These are launch prices. The exact price depends on how much work your profile needs — I confirm it before you pay.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => <ServiceCard key={s.id} s={s} detailed />)}
      </div>

      <h2 className="mt-16 text-2xl font-extrabold">Policies, in plain words</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {POLICY.map(([t, d]) => (
          <div key={t} className="card !p-5">
            <h3 className="font-extrabold">{t}</h3>
            <p className="mt-1 text-sm text-midnight/70">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-mint/30 p-5 text-sm text-midnight/80">
        <strong>Good to know:</strong> "ATS-friendly" means a readable, well-structured resume — not a guarantee of interviews.
        Interview kits are curated preparation material from public information and common patterns, not guaranteed real
        questions.
      </div>
    </div>
  )
}
