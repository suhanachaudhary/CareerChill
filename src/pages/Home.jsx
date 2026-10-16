import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import FaqList from '../components/FaqList'
import Reveal from '../components/Reveal'
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

const TRUST = ['✓ ATS-friendly', '✓ PDF + DOCX', '✓ 1 revision included', '✓ Private & secure']

function ResumeMock() {
  return (
    <div className="relative mx-auto w-full max-w-[19rem] md:max-w-sm">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-mint/20 blur-2xl" />
      <div className="relative rotate-2 rounded-3xl bg-white p-5 text-midnight shadow-soft sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-28 rounded bg-midnight" />
            <div className="mt-2 h-2 w-20 rounded bg-midnight/30" />
          </div>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold">ATS ✓</span>
        </div>
        {[70, 90, 55, 80].map((w, i) => (
          <div key={i} className="mt-4">
            <div className="h-2 w-14 rounded bg-mint-dark/60" />
            <div className="mt-2 h-2 rounded bg-midnight/10" style={{ width: `${w}%` }} />
            <div className="mt-1.5 h-2 rounded bg-midnight/10" style={{ width: `${w - 15}%` }} />
          </div>
        ))}
      </div>
      <div className="absolute -bottom-4 -left-2 rounded-2xl bg-mint px-4 py-2 text-xs font-extrabold text-midnight shadow-soft sm:-left-6 sm:text-sm">
        📈 Stronger bullets
      </div>
      <div className="absolute -right-1 -top-4 rounded-2xl bg-white px-4 py-2 text-xs font-extrabold text-midnight shadow-soft sm:-right-4 sm:text-sm">
        ✅ 1-page · clean
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-mint-deep/10 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 py-12 sm:py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-mint/15 px-3 py-1 text-xs font-bold text-mint">
              Resume • Interview Prep • Career Guidance
            </span>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Less confusion.
              <br />
              <span className="text-mint">Better preparation.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/75 sm:text-lg">
              ATS-friendly resumes for freshers and professionals, plus interview prep kits built for your role and
              target company — personally made, delivered on WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/order" className="btn-mint !py-3.5">Get my resume done</Link>
              <Link to="/services" className="btn border border-white/25 !py-3.5 text-white hover:bg-white/10">See pricing</Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/60 sm:text-sm">
              {TRUST.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="pb-4 pt-2 md:pb-0 md:pt-0"><ResumeMock /></div>
        </div>
      </section>

      {/* Price strip */}
      <section className="container-x -mt-px">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-b-3xl bg-midnight/10 text-center shadow-soft sm:grid-cols-4">
          {[['₹99+', 'Interview kits'], ['₹199+', 'Fresher resume'], ['₹299+', 'Experienced update'], ['₹399+', 'Resume + kit combo']].map(([p, l]) => (
            <div key={l} className="bg-white px-3 py-4">
              <div className="text-xl font-extrabold text-mint-dark sm:text-2xl">{p}</div>
              <div className="text-xs font-semibold text-midnight/60 sm:text-sm">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-x pt-16 sm:pt-20">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Four simple offers. No confusion.</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 80} className="flex"><div className="flex w-full"><ServiceCard s={s} /></div></Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs text-midnight/50">Launch prices — final price depends on scope and is confirmed before you pay.</p>
      </section>

      {/* Before / after */}
      <section className="container-x pt-16 sm:pt-20">
        <Reveal>
          <p className="eyebrow">What changes</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">From "did tasks" to "delivered results"</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card !border-red-100">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">Before</span>
              <p className="mt-4 text-midnight/70">• Worked on website project<br />• Responsible for testing<br />• Knows React, Node</p>
            </div>
            <div className="card !border-mint-deep/40 bg-mint/20">
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold">After</span>
              <p className="mt-4 font-semibold">
                • Built a responsive React site used by 500+ students, cutting load time 40%<br />
                • Wrote 60+ test cases and caught 12 bugs before release<br />
                • React · Node.js · SQL — with project proof
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-midnight/50">Illustrative sample — your bullets are written from your real work.</p>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="container-x pt-16 sm:pt-20">
        <Reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Request → Pay → Receive</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STEPS.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="card h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-lg font-extrabold">{n}</div>
                <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
                <p className="mt-1 text-sm text-midnight/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="container-x pt-16 sm:pt-20">
        <Reveal>
          <p className="eyebrow">Why CareerChill</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Personal service, not a template dump</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([e, t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="h-full rounded-3xl bg-mint/30 p-6">
                <div className="text-3xl">{e}</div>
                <h3 className="mt-3 font-extrabold">{t}</h3>
                <p className="mt-1 text-sm text-midnight/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="container-x max-w-3xl pt-16 sm:pt-20">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="mb-8 mt-2 text-2xl font-extrabold sm:text-3xl">Quick answers</h2>
          <FaqList items={FAQS.slice(0, 4)} />
          <Link to="/faq" className="mt-5 inline-block text-sm font-bold text-mint-dark hover:underline">All FAQs →</Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-x pt-16 sm:pt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-midnight px-5 py-12 text-center text-white sm:px-6">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mint/20 blur-3xl" />
            <h2 className="relative text-2xl font-extrabold sm:text-3xl">Ready to chill about your career?</h2>
            <p className="relative mx-auto mt-3 max-w-md text-white/70">Send your request in two minutes. I will reply on WhatsApp with scope and price.</p>
            <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/order" className="btn-mint">Send request</Link>
              <a href={waLink('Hi CareerChill! I want to know more.')} target="_blank" rel="noreferrer" className="btn border border-white/25 text-white hover:bg-white/10">Ask on WhatsApp</a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
