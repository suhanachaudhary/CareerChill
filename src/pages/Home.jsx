import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import FaqList from '../components/FaqList'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
import Icon from '../components/Icon'
import { SERVICES } from '../data/services'
import { FAQS } from '../data/faqs'
import { SITE, waLink } from '../config'

const STEPS = [
  ['1', 'Send a request', 'Pick a service and fill a 2-minute form. It opens WhatsApp with everything ready.'],
  ['2', 'Confirm & pay', 'I confirm scope, price and delivery time. Work starts once payment is confirmed.'],
  ['3', 'Get your files', 'Receive your PDF + DOCX resume or interview kit on WhatsApp or email.'],
]

const WHY = [
  ['code', 'Tech-background writer', 'Written by someone who understands React, Node, SQL and what tech recruiters look for.'],
  ['file', 'ATS-friendly by default', 'Clean structure and standard headings that parsing software can read.'],
  ['user', 'Personal, not templated', 'Every resume and kit is made for your role, skills and target companies.'],
  ['lock', 'Private by design', 'Your files are never public. Delete on request.'],
]

const TRUST = ['ATS-friendly format', 'PDF + editable DOCX', '1 revision included', 'Private & secure']

const Head = ({ eyebrow, title, sub, center }) => (
  <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="h-section">{title}</h2>
    {sub && <p className="mt-3 text-slate-600">{sub}</p>}
  </div>
)

// Product-style preview shown in the hero (illustrative layout, not a real resume).
function ResumePreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 text-xs font-medium text-slate-400">resume_final.pdf</span>
        </div>
        <div className="p-7">
          <div className="h-3.5 w-40 rounded bg-slate-900" />
          <div className="mt-2 h-2.5 w-56 rounded bg-slate-200" />
          {[['Experience', 86], ['Projects', 72], ['Skills', 58], ['Education', 66]].map(([t, w]) => (
            <div key={t} className="mt-6">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">{t}</div>
              <div className="mt-2 h-2 rounded bg-slate-100" style={{ width: `${w}%` }} />
              <div className="mt-1.5 h-2 rounded bg-slate-100" style={{ width: `${w - 22}%` }} />
              <div className="mt-1.5 h-2 rounded bg-slate-100" style={{ width: `${w - 8}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 hidden w-60 rounded-xl border border-slate-200 bg-white p-4 shadow-lift sm:block">
        <p className="text-xs font-semibold text-slate-900">Format check</p>
        <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
          {['Standard headings', 'Single-column layout', 'Readable by ATS parsers'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Icon name="check" className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.6} /> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ═════════ PHONE: app home ═════════ */}
      <div className="md:hidden">
        <section className="px-4 pb-2 pt-6">
          <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Resume · Interview prep · Guidance</span>
          <h1 className="mt-4 text-[2rem] font-bold leading-[1.12] tracking-tight">
            Less confusion.<br /><span className="text-emerald-600">Better preparation.</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            ATS-friendly resumes and interview prep kits, personally made and delivered on WhatsApp.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link to="/order" className="btn-accent !py-3">Place an order</Link>
            <Link to="/services" className="btn-ghost !py-3">View pricing</Link>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-600">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.6} />{t}</li>
            ))}
          </ul>
        </section>

        <section className="px-4 pt-8">
          <h2 className="text-lg font-semibold">Choose a service</h2>
          <div className="mt-3 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            {SERVICES.map((s) => (
              <Link key={s.id} to={`/order?service=${s.id}`} className="flex items-center gap-4 px-4 py-3.5 active:bg-slate-50">
                <div className="icon-tile"><Icon name={s.icon} /></div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[15px] font-semibold">{s.short}</div>
                  <div className="text-xs text-slate-500">{s.delivery} delivery</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">from</div>
                  <div className="text-[15px] font-bold">{s.from}</div>
                </div>
                <Icon name="arrow" className="h-4 w-4 text-slate-300" />
              </Link>
            ))}
          </div>
        </section>

        <section className="pt-8">
          <div className="flex items-end justify-between px-4">
            <h2 className="text-lg font-semibold">What's included</h2>
            <span className="text-xs text-slate-400">swipe →</span>
          </div>
          <div className="no-scrollbar mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 pt-3">
            {SERVICES.map((s) => (
              <div key={s.id} className="flex w-[82%] flex-none snap-center"><ServiceCard s={s} detailed /></div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-6">
          <h2 className="text-lg font-semibold">Resume rewrite example</h2>
          <p className="mb-4 mt-1 text-sm text-slate-500">How weak bullets become specific and measurable (sample).</p>
          <BeforeAfter />
        </section>

        <section className="px-4 pt-9">
          <h2 className="mb-4 text-lg font-semibold">How it works</h2>
          <ol className="space-y-3">
            {STEPS.map(([n, t, d]) => (
              <li key={n} className="card flex gap-4 !p-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{n}</span>
                <div><h3 className="text-[15px] font-semibold">{t}</h3><p className="mt-0.5 text-sm text-slate-600">{d}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="px-4 pt-9">
          <h2 className="mb-3 text-lg font-semibold">Why CareerChill</h2>
          <div className="grid grid-cols-2 gap-3">
            {WHY.map(([i, t, d]) => (
              <div key={t} className="card !p-4">
                <div className="icon-tile !h-9 !w-9"><Icon name={i} className="h-[18px] w-[18px]" /></div>
                <h3 className="mt-3 text-sm font-semibold leading-tight">{t}</h3>
                <p className="mt-1 text-xs leading-snug text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-9">
          <h2 className="mb-3 text-lg font-semibold">Quick answers</h2>
          <FaqList items={FAQS.slice(0, 4)} />
          <Link to="/faq" className="mt-4 inline-block text-sm font-semibold text-emerald-700">All FAQs →</Link>
        </section>

        <section className="px-4 pt-9">
          <div className="rounded-2xl bg-slate-900 p-6 text-center text-white">
            <h2 className="text-xl font-semibold">Ready to get started?</h2>
            <p className="mt-2 text-sm text-slate-300">Send a request — I'll reply on WhatsApp with scope and price.</p>
            <Link to="/order" className="btn-accent mt-5 w-full !py-3">Place an order</Link>
          </div>
        </section>
      </div>

      {/* ═════════ DESKTOP: website ═════════ */}
      <div className="hidden md:block">
        <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50/70 to-slate-50">
          <div className="container-x grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
            <div>
              <span className="chip"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Resume · Interview prep · Career guidance</span>
              <h1 className="mt-6 text-5xl font-bold leading-[1.08] tracking-tight xl:text-[3.6rem]">
                Less confusion.<br /><span className="text-emerald-600">Better preparation.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                ATS-friendly resumes for freshers and professionals, plus interview prep kits built for your role and
                target company — personally made and delivered on WhatsApp.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/order" className="btn-accent btn-lg">Place an order</Link>
                <Link to="/services" className="btn-ghost btn-lg">View pricing</Link>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-sm text-slate-600">
                {TRUST.map((t) => (
                  <li key={t} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-emerald-600" strokeWidth={2.6} />{t}</li>
                ))}
              </ul>
            </div>
            <ResumePreview />
          </div>
        </section>

        <section className="container-x">
          <div className="-mt-px grid grid-cols-4 divide-x divide-slate-200 border-x border-b border-slate-200 bg-white text-center">
            {SERVICES.map((s) => (
              <div key={s.id} className="px-4 py-6">
                <div className="text-2xl font-bold tracking-tight">{s.from}<span className="text-base font-medium text-slate-400">+</span></div>
                <div className="mt-1 text-sm text-slate-500">{s.short}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-x pt-28">
          <Reveal><Head eyebrow="Services" title="Four simple offers. Clear pricing." sub="Launch prices — the final price depends on scope and is confirmed before you pay." /></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 70} className="flex"><ServiceCard s={s} detailed /></Reveal>
            ))}
          </div>
        </section>

        <section className="container-x pt-28">
          <Reveal>
            <Head eyebrow="Resume rewrite example" title={'From "did tasks" to "delivered results"'} sub="A sample of how weak, generic bullets become specific and measurable. Your resume is written from your real work — never invented." />
            <div className="mt-10"><BeforeAfter /></div>
          </Reveal>
        </section>

        <section className="mt-28 border-y border-slate-200 bg-white py-24">
          <div className="container-x">
            <Reveal><Head center eyebrow="How it works" title="Request, pay, receive" sub="No sign-ups, no portals. Everything happens on WhatsApp." /></Reveal>
            <div className="relative mt-14 grid grid-cols-3 gap-10">
              <div className="absolute left-[16.6%] right-[16.6%] top-5 hidden border-t border-dashed border-slate-300 lg:block" />
              {STEPS.map(([n, t, d], i) => (
                <Reveal key={n} delay={i * 90}>
                  <div className="relative text-center">
                    <span className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white ring-8 ring-white">{n}</span>
                    <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                    <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x pt-28">
          <Reveal><Head eyebrow="Why CareerChill" title="Personal service, not a template dump" /></Reveal>
          <div className="mt-12 grid grid-cols-4 gap-6">
            {WHY.map(([i, t, d], k) => (
              <Reveal key={t} delay={k * 70}>
                <div className="card h-full">
                  <div className="icon-tile"><Icon name={i} /></div>
                  <h3 className="mt-4 text-base font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-x grid grid-cols-[1fr_1.7fr] items-start gap-14 pt-28">
          <Reveal>
            <Head eyebrow="FAQs" title="Frequently asked questions" sub="Everything people ask before ordering." />
            <Link to="/faq" className="btn-ghost mt-7">View all FAQs</Link>
          </Reveal>
          <Reveal delay={80}><FaqList items={FAQS.slice(0, 5)} /></Reveal>
        </section>

        <section className="container-x pt-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-12 py-16 text-center text-white">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
              <h2 className="relative mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight">Ready to get your resume and interview prep sorted?</h2>
              <p className="relative mx-auto mt-4 max-w-xl text-slate-300">Send your request in two minutes. I reply on WhatsApp with scope and price.</p>
              <div className="relative mt-8 flex justify-center gap-3">
                <Link to="/order" className="btn-accent btn-lg">Place an order</Link>
                <a href={waLink('Hi CareerChill! I want to know more.')} target="_blank" rel="noreferrer" className="btn btn-lg border border-white/25 text-white hover:bg-white/10">Ask on WhatsApp</a>
              </div>
              <p className="relative mt-6 text-sm text-slate-400">{SITE.whatsappDisplay} · {SITE.email}</p>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  )
}
