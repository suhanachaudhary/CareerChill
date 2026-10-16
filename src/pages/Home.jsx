import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import FaqList from '../components/FaqList'
import { SERVICES } from '../data/services'
import { FAQS } from '../data/faqs'
import { waLink } from '../config'

const STEPS = [
  ['1', 'Send a request', 'Pick a service and fill a 2-minute form. It opens WhatsApp with everything ready.'],
  ['2', 'Confirm & pay', 'I confirm scope, price and delivery time. Work starts once payment is confirmed.'],
  ['3', 'Get your files', 'Receive your PDF + DOCX resume or interview kit on WhatsApp or email.'],
]

const WHY = [
  ['🧠', 'Tech-background writer', 'Written by someone who understands React, Node, SQL and what tech recruiters look for.'],
  ['🧾', 'ATS-friendly by default', 'Clean structure and standard headings that parsing software can read.'],
  ['🤝', 'Personal, not templated', 'Every resume and kit is made for your role, skills and target companies.'],
  ['🔒', 'Private by design', 'Your files are never public. Delete on request.'],
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />
        <div className="container-x relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-mint">
              Resume • Interview Prep • Career Guidance
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Less confusion.
              <br />
              <span className="text-mint">Better preparation.</span>
            </h1>
            <p className="mt-5 max-w-lg text-white/75">
              ATS-friendly resumes for freshers and professionals, plus interview prep kits built for your role and
              target company — personally made, delivered on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/order" className="btn-mint">Get my resume done</Link>
              <Link to="/services" className="btn border border-white/25 text-white hover:bg-white/10">See pricing</Link>
            </div>
            <p className="mt-5 text-xs text-white/50">Starting at ₹99 · No sign-up · Pay only after scope is confirmed</p>
          </div>
          <div className="hidden md:block">
            <div className="rotate-2 rounded-3xl bg-white p-6 text-midnight shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-3 w-32 rounded bg-midnight" />
                  <div className="mt-2 h-2 w-24 rounded bg-midnight/30" />
                </div>
                <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold">ATS ✓</span>
              </div>
              {[70, 90, 55, 80, 65].map((w, i) => (
                <div key={i} className="mt-4">
                  <div className="h-2 w-16 rounded bg-mint-dark/60" />
                  <div className="mt-2 h-2 rounded bg-midnight/10" style={{ width: `${w}%` }} />
                  <div className="mt-1.5 h-2 rounded bg-midnight/10" style={{ width: `${w - 15}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x pt-20">
        <p className="eyebrow">Services</p>
        <h2 className="mt-2 text-3xl font-extrabold">Four simple offers. No confusion.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}
        </div>
        <p className="mt-5 text-xs text-midnight/50">Launch prices — final price depends on scope and is confirmed before you pay.</p>
      </section>

      {/* How it works */}
      <section className="container-x pt-20">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-2 text-3xl font-extrabold">Request → Pay → Receive</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map(([n, t, d]) => (
            <div key={n} className="card">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-lg font-extrabold">{n}</div>
              <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
              <p className="mt-1 text-sm text-midnight/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="container-x pt-20">
        <p className="eyebrow">Why CareerChill</p>
        <h2 className="mt-2 text-3xl font-extrabold">Personal service, not a template dump</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([e, t, d]) => (
            <div key={t} className="rounded-3xl bg-mint/30 p-6">
              <div className="text-3xl">{e}</div>
              <h3 className="mt-3 font-extrabold">{t}</h3>
              <p className="mt-1 text-sm text-midnight/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="container-x max-w-3xl pt-20">
        <p className="eyebrow">FAQs</p>
        <h2 className="mb-8 mt-2 text-3xl font-extrabold">Quick answers</h2>
        <FaqList items={FAQS.slice(0, 4)} />
        <Link to="/faq" className="mt-5 inline-block text-sm font-bold text-mint-dark hover:underline">All FAQs →</Link>
      </section>

      {/* CTA */}
      <section className="container-x pt-20">
        <div className="rounded-3xl bg-midnight px-6 py-12 text-center text-white">
          <h2 className="text-3xl font-extrabold">Ready to chill about your career?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">Send your request in two minutes. I will reply on WhatsApp with scope and price.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/order" className="btn-mint">Send request</Link>
            <a href={waLink('Hi CareerChill! I want to know more.')} target="_blank" rel="noreferrer" className="btn border border-white/25 text-white hover:bg-white/10">Ask on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
