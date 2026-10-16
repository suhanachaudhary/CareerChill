import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import FaqList from '../components/FaqList'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
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

const TRUST = ['ATS-friendly', 'PDF + DOCX', '1 revision included', 'Private & secure']

const SectionHead = ({ eyebrow, title, center }) => (
  <div className={center ? 'text-center' : ''}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-2 text-[1.65rem] font-extrabold leading-tight sm:text-3xl lg:text-4xl">{title}</h2>
  </div>
)

function ResumeMock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[3rem] bg-mint/20 blur-3xl" />
      <div className="relative rotate-2 rounded-3xl bg-white p-8 text-midnight shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3.5 w-36 rounded bg-midnight" />
            <div className="mt-2 h-2.5 w-24 rounded bg-midnight/30" />
          </div>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold">ATS ✓</span>
        </div>
        {[70, 92, 58, 82, 64].map((w, i) => (
          <div key={i} className="mt-5">
            <div className="h-2 w-16 rounded bg-mint-dark/60" />
            <div className="mt-2 h-2 rounded bg-midnight/10" style={{ width: `${w}%` }} />
            <div className="mt-1.5 h-2 rounded bg-midnight/10" style={{ width: `${w - 15}%` }} />
          </div>
        ))}
      </div>
      <div className="absolute -bottom-5 -left-8 rounded-2xl bg-mint px-5 py-3 text-sm font-extrabold text-midnight shadow-soft">📈 Stronger bullets</div>
      <div className="absolute -right-6 -top-5 rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-midnight shadow-soft">✅ 1-page · clean</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ───────── PHONE: app home ───────── */}
      <div className="md:hidden">
        <section className="rounded-b-[2rem] bg-midnight px-5 pb-8 pt-6 text-white">
          <p className="text-sm font-semibold text-mint">Namaste 👋</p>
          <h1 className="mt-1 text-[1.9rem] font-extrabold leading-[1.15]">
            Resume ya interview —<br />
            <span className="text-mint">sab chill.</span>
          </h1>
          <p className="mt-3 text-sm text-white/70">ATS-friendly resumes & interview kits, personally made and sent on WhatsApp.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {TRUST.map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">✓ {t}</span>
            ))}
          </div>
        </section>

        {/* quick actions */}
        <section className="px-4 pt-6">
          <h2 className="text-lg font-extrabold">What do you need?</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                to={`/order?service=${s.id}`}
                className={`rounded-3xl p-4 active:scale-[.97] ${s.popular ? 'bg-mint' : 'bg-white shadow-soft'}`}
              >
                <div className="text-3xl">{s.emoji}</div>
                <div className="mt-3 text-sm font-extrabold leading-tight">{s.name}</div>
                <div className="mt-1 text-xs font-semibold text-midnight/60">{s.price}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* swipe row */}
        <section className="pt-8">
          <div className="flex items-end justify-between px-4">
            <h2 className="text-lg font-extrabold">Offers in detail</h2>
            <span className="text-xs font-semibold text-midnight/40">swipe →</span>
          </div>
          <div className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3">
            {SERVICES.map((s) => (
              <div key={s.id} className="flex w-[78%] flex-none snap-center"><div className="flex w-full"><ServiceCard s={s} detailed /></div></div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8">
          <h2 className="text-lg font-extrabold">Resume rewrite example</h2>
          <p className="mb-4 mt-1 text-sm text-midnight/60">Dekho hum weak bullets ko kaise strong banate hain (sample).</p>
          <BeforeAfter />
        </section>

        <section className="px-4 pt-8">
          <h2 className="mb-4 text-lg font-extrabold">How it works</h2>
          <ol className="relative space-y-5 border-l-2 border-mint pl-6">
            {STEPS.map(([n, t, d]) => (
              <li key={n} className="relative">
                <span className="absolute -left-[2.15rem] flex h-7 w-7 items-center justify-center rounded-full bg-midnight text-xs font-extrabold text-mint">{n}</span>
                <h3 className="font-extrabold">{t}</h3>
                <p className="text-sm text-midnight/65">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="px-4 pt-8">
          <h2 className="mb-3 text-lg font-extrabold">Why CareerChill</h2>
          <div className="grid grid-cols-2 gap-3">
            {WHY.map(([e, t, d]) => (
              <div key={t} className="rounded-3xl bg-mint/30 p-4">
                <div className="text-2xl">{e}</div>
                <h3 className="mt-2 text-sm font-extrabold leading-tight">{t}</h3>
                <p className="mt-1 text-xs leading-snug text-midnight/65">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8">
          <h2 className="mb-3 text-lg font-extrabold">Quick answers</h2>
          <FaqList items={FAQS.slice(0, 4)} />
          <Link to="/faq" className="mt-4 inline-block text-sm font-bold text-mint-dark">All FAQs →</Link>
        </section>

        <section className="px-4 pt-8">
          <div className="rounded-3xl bg-midnight p-6 text-center text-white">
            <h2 className="text-xl font-extrabold">Ready to chill about your career?</h2>
            <p className="mt-2 text-sm text-white/70">Request bhejo, main WhatsApp par scope aur price bataungi.</p>
            <Link to="/order" className="btn-mint mt-5 w-full !py-3.5">Send request</Link>
          </div>
        </section>
      </div>

      {/* ───────── DESKTOP: website ───────── */}
      <div className="hidden md:block">
        <section className="relative overflow-hidden bg-midnight text-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-mint/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-mint-deep/10 blur-3xl" />
          <div className="container-x relative grid items-center gap-16 py-24 lg:grid-cols-[1.1fr_1fr] lg:py-28">
            <div>
              <span className="inline-block rounded-full bg-mint/15 px-4 py-1.5 text-sm font-bold text-mint">
                Resume • Interview Prep • Career Guidance
              </span>
              <h1 className="mt-6 text-6xl font-extrabold leading-[1.05] lg:text-7xl">
                Less confusion.
                <br />
                <span className="text-mint">Better preparation.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                ATS-friendly resumes for freshers and professionals, plus interview prep kits built for your role and
                target company — personally made, delivered on WhatsApp.
              </p>
              <div className="mt-9 flex gap-4">
                <Link to="/order" className="btn-mint !px-8 !py-4 text-base">Get my resume done</Link>
                <Link to="/services" className="btn border border-white/25 !px-8 !py-4 text-base text-white hover:bg-white/10">See pricing</Link>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/60">
                {TRUST.map((t) => <li key={t}>✓ {t}</li>)}
              </ul>
            </div>
            <ResumeMock />
          </div>
        </section>

        <section className="container-x relative z-10 -mt-10">
          <div className="grid grid-cols-4 divide-x divide-midnight/10 overflow-hidden rounded-3xl bg-white text-center shadow-soft">
            {[['₹99+', 'Interview kits'], ['₹199+', 'Fresher resume'], ['₹299+', 'Experienced update'], ['₹399+', 'Resume + kit combo']].map(([p, l]) => (
              <div key={l} className="px-4 py-6">
                <div className="text-3xl font-extrabold text-mint-dark">{p}</div>
                <div className="mt-1 text-sm font-semibold text-midnight/60">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-x pt-28">
          <Reveal><SectionHead eyebrow="Services" title="Four simple offers. No confusion." /></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 80} className="flex"><div className="flex w-full"><ServiceCard s={s} detailed /></div></Reveal>
            ))}
          </div>
          <p className="mt-5 text-sm text-midnight/50">Launch prices — final price depends on scope and is confirmed before you pay.</p>
        </section>

        <section className="container-x pt-28">
          <Reveal>
            <SectionHead eyebrow="Resume rewrite example" title={'From "did tasks" to "delivered results"'} />
            <p className="mb-10 mt-3 max-w-2xl text-midnight/65">
              A sample of how weak, generic bullets become specific and measurable. Your resume is written from your real work — never invented.
            </p>
            <BeforeAfter />
          </Reveal>
        </section>

        <section className="mt-28 bg-white py-24">
          <div className="container-x">
            <Reveal><SectionHead eyebrow="How it works" title="Request → Pay → Receive" center /></Reveal>
            <div className="mt-14 grid grid-cols-3 gap-8">
              {STEPS.map(([n, t, d], i) => (
                <Reveal key={n} delay={i * 100}>
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-midnight text-xl font-extrabold text-mint">{n}</div>
                    <h3 className="mt-5 text-xl font-extrabold">{t}</h3>
                    <p className="mx-auto mt-2 max-w-xs text-midnight/65">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x pt-28">
          <Reveal><SectionHead eyebrow="Why CareerChill" title="Personal service, not a template dump" /></Reveal>
          <div className="mt-12 grid grid-cols-4 gap-6">
            {WHY.map(([e, t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="h-full rounded-3xl bg-mint/30 p-7">
                  <div className="text-4xl">{e}</div>
                  <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
                  <p className="mt-2 text-sm text-midnight/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-x max-w-3xl pt-28">
          <Reveal>
            <SectionHead eyebrow="FAQs" title="Quick answers" center />
            <div className="mt-10"><FaqList items={FAQS.slice(0, 4)} /></div>
            <div className="mt-6 text-center"><Link to="/faq" className="text-sm font-bold text-mint-dark hover:underline">All FAQs →</Link></div>
          </Reveal>
        </section>

        <section className="container-x pt-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-midnight px-10 py-20 text-center text-white">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
              <h2 className="relative text-4xl font-extrabold">Ready to chill about your career?</h2>
              <p className="relative mx-auto mt-4 max-w-lg text-lg text-white/70">Send your request in two minutes. I will reply on WhatsApp with scope and price.</p>
              <div className="relative mt-9 flex justify-center gap-4">
                <Link to="/order" className="btn-mint !px-8 !py-4 text-base">Send request</Link>
                <a href={waLink('Hi CareerChill! I want to know more.')} target="_blank" rel="noreferrer" className="btn border border-white/25 !px-8 !py-4 text-base text-white hover:bg-white/10">Ask on WhatsApp</a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  )
}
