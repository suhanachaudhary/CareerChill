import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import FaqList from '../components/FaqList'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
import { SERVICES } from '../data/services'
import { FAQS } from '../data/faqs'
import { SITE, waLink } from '../config'

const STEPS = [
  ['1', 'Send a request', 'Pick a service and fill a 2-minute form. It opens WhatsApp with everything ready.', 'bg-mint'],
  ['2', 'Confirm & pay', 'I confirm scope, price and delivery time. Work starts once payment is confirmed.', 'bg-butter'],
  ['3', 'Get your files', 'Receive your PDF + DOCX resume or interview kit on WhatsApp or email.', 'bg-lilac'],
]

const WHY = [
  ['🧠', 'Tech-background writer', 'Written by someone who understands React, Node, SQL and what tech recruiters look for.', 'bg-sky'],
  ['🧾', 'ATS-friendly by default', 'Clean structure and standard headings that parsing software can read.', 'bg-mint'],
  ['🤝', 'Personal, not templated', 'Every resume and kit is made for your role, skills and target companies.', 'bg-butter'],
  ['🔒', 'Private by design', 'Your files are never public. Delete on request.', 'bg-lilac'],
]

const TICKER = ['ATS-friendly resumes', 'Interview prep kits', 'PDF + DOCX', 'Fresher & experienced', 'Delivered on WhatsApp', '1 revision included', 'Less confusion. Better preparation.']

const Head = ({ eyebrow, title, sub }) => (
  <div>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="mt-4 max-w-3xl text-[1.75rem] font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
    {sub && <p className="mt-3 max-w-2xl font-medium text-midnight/65">{sub}</p>}
  </div>
)

function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden border-y-2 border-midnight bg-butter py-3">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap text-sm font-extrabold uppercase tracking-wider">
        {items.map((t, i) => <span key={i}>✦ {t}</span>)}
      </div>
    </div>
  )
}

function HeroCollage() {
  return (
    <div className="relative mx-auto h-[34rem] w-full max-w-[40rem]">
      <div className="absolute inset-x-6 top-6 h-[28rem] rotate-[-3deg] rounded-[2rem] border-2 border-midnight bg-lilac shadow-pop-lg" />
      <div className="absolute left-10 right-10 top-14 rotate-2 rounded-3xl border-2 border-midnight bg-white p-7 shadow-pop-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-4 w-40 rounded bg-midnight" />
            <div className="mt-2 h-2.5 w-28 rounded bg-midnight/30" />
          </div>
          <span className="chip bg-mint">ATS ✓</span>
        </div>
        {[72, 94, 58, 84, 66].map((w, i) => (
          <div key={i} className="mt-5">
            <div className="h-2.5 w-20 rounded bg-mint-deep" />
            <div className="mt-2 h-2 rounded bg-midnight/10" style={{ width: `${w}%` }} />
            <div className="mt-1.5 h-2 rounded bg-midnight/10" style={{ width: `${w - 18}%` }} />
          </div>
        ))}
      </div>
      <div style={{ '--r': '-6deg' }} className="absolute -left-2 top-4 animate-floaty rounded-2xl border-2 border-midnight bg-butter px-5 py-3 text-sm font-extrabold shadow-pop">📈 Stronger bullets</div>
      <div style={{ '--r': '5deg' }} className="absolute -right-2 top-24 animate-floaty rounded-2xl border-2 border-midnight bg-white px-5 py-3 text-sm font-extrabold shadow-pop [animation-delay:-2s]">✅ 1-page · clean</div>
      <div style={{ '--r': '-3deg' }} className="absolute bottom-6 left-0 animate-floaty rounded-2xl border-2 border-midnight bg-mint px-5 py-3 text-sm font-extrabold shadow-pop [animation-delay:-3s]">💬 Delivered on WhatsApp</div>
      <div style={{ '--r': '8deg' }} className="absolute bottom-2 right-4 flex h-28 w-28 animate-floaty flex-col items-center justify-center rounded-full border-2 border-midnight bg-peach text-center shadow-pop [animation-delay:-1s]">
        <span className="text-xs font-extrabold leading-none">starting at</span>
        <span className="text-3xl font-extrabold leading-tight">₹99</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ═════════ PHONE: app home ═════════ */}
      <div className="md:hidden">
        <section className="px-4 pt-5">
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-midnight bg-mint p-5 shadow-pop">
            <span className="chip">👋 Namaste!</span>
            <h1 className="mt-4 text-[2.15rem] font-extrabold leading-[1.05]">
              Resume ya interview —<br /><span className="rounded-lg bg-white px-2">sab chill.</span>
            </h1>
            <p className="mt-4 max-w-[17rem] text-sm font-semibold text-midnight/75">ATS-friendly resumes & interview kits, personally made and sent on WhatsApp.</p>
            <div className="mt-5 flex gap-2">
              <Link to="/order" className="btn-primary flex-1 !px-3">Order now</Link>
              <Link to="/services" className="btn-ghost flex-1 !px-3">Pricing</Link>
            </div>
            <span className="absolute -right-3 top-4 rotate-12 text-7xl" aria-hidden="true">📄</span>
          </div>
        </section>

        <section className="px-4 pt-7">
          <h2 className="text-xl font-extrabold">What do you need?</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <Link key={s.id} to={`/order?service=${s.id}`} className={`tile active:translate-x-[3px] active:translate-y-[3px] active:shadow-none ${s.tone}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-midnight bg-white text-2xl">{s.emoji}</div>
                <div className="mt-3 text-sm font-extrabold leading-tight">{s.short}</div>
                <div className="mt-1 text-xs font-bold text-midnight/65">from {s.from}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="pt-8">
          <div className="flex items-end justify-between px-4">
            <h2 className="text-xl font-extrabold">Offers in detail</h2>
            <span className="text-xs font-extrabold text-midnight/45">swipe →</span>
          </div>
          <div className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-2">
            {SERVICES.map((s) => (
              <div key={s.id} className="flex w-[80%] flex-none snap-center"><ServiceCard s={s} detailed /></div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-6">
          <h2 className="text-xl font-extrabold">Resume rewrite example</h2>
          <p className="mb-4 mt-1 text-sm font-medium text-midnight/60">Dekho weak bullets kaise strong bante hain (sample).</p>
          <BeforeAfter />
        </section>

        <section className="px-4 pt-9">
          <h2 className="mb-4 text-xl font-extrabold">How it works</h2>
          <div className="space-y-3">
            {STEPS.map(([n, t, d, c]) => (
              <div key={n} className={`tile flex gap-4 ${c}`}>
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-midnight bg-white text-lg font-extrabold">{n}</span>
                <div><h3 className="font-extrabold">{t}</h3><p className="mt-0.5 text-sm font-medium text-midnight/70">{d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-9">
          <h2 className="mb-3 text-xl font-extrabold">Why CareerChill</h2>
          <div className="grid grid-cols-2 gap-3">
            {WHY.map(([e, t, d, c]) => (
              <div key={t} className={`tile ${c}`}>
                <div className="text-2xl">{e}</div>
                <h3 className="mt-2 text-sm font-extrabold leading-tight">{t}</h3>
                <p className="mt-1 text-xs font-medium leading-snug text-midnight/70">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-9">
          <h2 className="mb-3 text-xl font-extrabold">Quick answers</h2>
          <FaqList items={FAQS.slice(0, 4)} />
          <Link to="/faq" className="mt-4 inline-block text-sm font-extrabold underline decoration-2 underline-offset-4">All FAQs →</Link>
        </section>

        <section className="px-4 pt-9">
          <div className="rounded-[2rem] border-2 border-midnight bg-midnight p-6 text-center text-white shadow-pop">
            <h2 className="text-2xl font-extrabold">Ready to <span className="text-mint">chill</span> about your career?</h2>
            <p className="mt-2 text-sm text-white/70">Request bhejo — main WhatsApp par scope aur price bataungi.</p>
            <Link to="/order" className="btn-mint mt-5 w-full !py-3.5">Send request →</Link>
          </div>
        </section>
      </div>

      {/* ═════════ DESKTOP: full-width website ═════════ */}
      <div className="hidden md:block">
        <section className="container-x grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <span className="chip !bg-mint">Resume • Interview Prep • Career Guidance</span>
            <h1 className="mt-7 text-6xl font-extrabold leading-[1.02] xl:text-[5.5rem]">
              Less <span className="hl">confusion.</span>
              <br />
              Better <span className="hl !bg-butter">preparation.</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl font-medium text-midnight/70">
              ATS-friendly resumes for freshers and professionals, plus interview prep kits built for your role and
              target company — personally made, delivered on WhatsApp.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/order" className="btn-mint btn-lg">Get my resume done →</Link>
              <Link to="/services" className="btn-ghost btn-lg">See pricing</Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {['ATS-friendly', 'PDF + DOCX', '1 revision included', 'Private & secure'].map((t) => <li key={t} className="chip">✓ {t}</li>)}
            </ul>
          </div>
          <HeroCollage />
        </section>

        <Ticker />

        <section className="container-x pt-28">
          <Reveal><Head eyebrow="Services" title="Four simple offers. Zero confusion." sub="Launch prices — final price depends on scope and is confirmed before you pay." /></Reveal>
          <div className="mt-14 grid gap-7 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 80} className="flex"><ServiceCard s={s} detailed /></Reveal>
            ))}
          </div>
        </section>

        <section className="container-x pt-28">
          <Reveal>
            <Head eyebrow="Resume rewrite example" title={'From "did tasks" to "delivered results"'} sub="A sample of how weak, generic bullets become specific and measurable. Your resume is written from your real work — never invented." />
            <div className="mt-12"><BeforeAfter /></div>
          </Reveal>
        </section>

        <section className="container-x pt-28">
          <Reveal><Head eyebrow="How it works" title="Request → Pay → Receive" /></Reveal>
          <div className="mt-14 grid grid-cols-3 gap-7">
            {STEPS.map(([n, t, d, c], i) => (
              <Reveal key={n} delay={i * 100}>
                <div className={`h-full rounded-3xl border-2 border-midnight p-8 shadow-pop ${c}`}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-midnight bg-white text-2xl font-extrabold">{n}</span>
                  <h3 className="mt-6 text-2xl font-extrabold">{t}</h3>
                  <p className="mt-2 font-medium text-midnight/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-x pt-28">
          <Reveal><Head eyebrow="Why CareerChill" title="Personal service, not a template dump." /></Reveal>
          <div className="mt-14 grid grid-cols-4 gap-7">
            {WHY.map(([e, t, d, c], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className={`h-full rounded-3xl border-2 border-midnight p-7 shadow-pop ${c}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-midnight bg-white text-3xl">{e}</div>
                  <h3 className="mt-5 text-lg font-extrabold">{t}</h3>
                  <p className="mt-2 text-sm font-medium text-midnight/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-x grid grid-cols-[1fr_1.6fr] items-start gap-14 pt-28">
          <Reveal>
            <Head eyebrow="FAQs" title="Quick answers" sub="Everything people ask before ordering." />
            <Link to="/faq" className="btn-ghost mt-8">All FAQs →</Link>
          </Reveal>
          <Reveal delay={100}><FaqList items={FAQS.slice(0, 5)} /></Reveal>
        </section>

        <section className="container-x pt-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-midnight bg-mint px-12 py-20 text-center shadow-pop-lg">
              <span className="absolute -left-4 top-6 -rotate-12 text-8xl" aria-hidden="true">📄</span>
              <span className="absolute -right-2 bottom-4 rotate-12 text-8xl" aria-hidden="true">🚀</span>
              <h2 className="relative mx-auto max-w-3xl text-5xl font-extrabold leading-tight">Ready to chill about your career?</h2>
              <p className="relative mx-auto mt-5 max-w-xl text-lg font-semibold text-midnight/70">Send your request in two minutes. I reply on WhatsApp with scope and price.</p>
              <div className="relative mt-10 flex justify-center gap-4">
                <Link to="/order" className="btn-primary btn-lg">Send request →</Link>
                <a href={waLink('Hi CareerChill! I want to know more.')} target="_blank" rel="noreferrer" className="btn-ghost btn-lg">Ask on WhatsApp</a>
              </div>
              <p className="relative mt-6 text-sm font-bold text-midnight/60">{SITE.whatsappDisplay} · {SITE.email}</p>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  )
}
