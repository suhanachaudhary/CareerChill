import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHead from '../components/PageHead'
import { SERVICES, getService } from '../data/services'
import { SITE, waLink, mailLink } from '../config'

const LEVELS = ['Fresher (0 yrs)', '1–3 years', '3–6 years', '6+ years']

const EMPTY = {
  service: '',
  name: '',
  phone: '',
  email: '',
  level: '',
  role: '',
  company: '',
  skills: '',
  deadline: '',
  notes: '',
  consent: false,
}

function buildMessage(f) {
  const s = getService(f.service)
  const opt = (label, v) => (v.trim() ? `${label}: ${v.trim()}` : null)
  const lines = [
    `Hi CareerChill! I'd like to request a service.`,
    '',
    `Service: ${s?.name ?? ''}`,
    `Name: ${f.name.trim()}`,
    `WhatsApp: ${f.phone.trim()}`,
    opt('Email', f.email),
    `Experience: ${f.level}`,
    `Target role: ${f.role.trim()}`,
    opt('Target company', f.company),
    opt('Skills', f.skills),
    opt('Deadline', f.deadline),
    opt('Notes', f.notes),
    '',
    `I will share my existing resume (if any) here / on email.`,
  ]
  return lines.filter((l) => l !== null).join('\n')
}

export default function Order() {
  const [params] = useSearchParams()
  const [f, setF] = useState({ ...EMPTY, service: getService(params.get('service'))?.id || '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setF((p) => ({ ...p, [k]: v }))
    setErrors((p) => ({ ...p, [k]: undefined }))
  }

  const needsResume = f.service === 'experienced-resume'
  const message = useMemo(() => buildMessage(f), [f])

  const validate = () => {
    const e = {}
    if (!f.service) e.service = 'Pick a service'
    if (!f.name.trim()) e.name = 'Enter your name'
    if (!/^\+?\d[\d\s-]{8,14}$/.test(f.phone.trim())) e.phone = 'Enter a valid WhatsApp number'
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email'
    if (!f.level) e.level = 'Select your experience'
    if (!f.role.trim()) e.role = 'Enter the role you are targeting'
    if (!f.consent) e.consent = 'Please agree to continue'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (via) => (ev) => {
    ev.preventDefault()
    if (!validate()) {
      document.querySelector('[data-error="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    if (via === 'wa') window.open(waLink(message), '_blank', 'noopener')
    else window.location.href = mailLink(`CareerChill request: ${getService(f.service).name}`, message)
    setSent(true)
  }

  const copy = async () => {
    if (!validate()) return
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — user can use the other buttons */
    }
  }

  const Err = ({ k }) => (errors[k] ? <p className="mt-1 text-xs font-semibold text-red-600" data-error="true">{errors[k]}</p> : null)
  const cls = (k) => `input ${errors[k] ? '!border-red-500' : ''}`

  if (sent) {
    return (
      <div className="container-x max-w-2xl py-16 text-center md:py-24">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-midnight bg-butter text-5xl shadow-pop">🎉</div>
        <h1 className="mt-4 text-3xl font-extrabold">Request ready — just hit send!</h1>
        <p className="mt-3 font-medium text-midnight/70">
          Your message opened in WhatsApp / your mail app. Press <strong>Send</strong> there to complete the request. I will reply with
          scope, price and delivery time. {SITE.paymentNote}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn-mint">Open WhatsApp again</a>
          <button className="btn-ghost" onClick={() => setSent(false)}>Edit request</button>
          <Link to="/" className="btn-ghost">Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-x pt-6 md:pt-10">
      <PageHead
        eyebrow="Order request"
        title="Tell me what you need."
        sub="Takes 2 minutes. This form doesn't store anything — it prepares a message you send on WhatsApp or email."
        emoji="📝"
        tone="bg-mint"
      />

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_24rem]">
      <form className="card space-y-6 !p-5 sm:!p-8" noValidate onSubmit={submit('wa')}>
        <div>
          <span className="label">1. Choose a service</span>
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <label
                key={s.id}
                className={`cursor-pointer rounded-2xl border-2 border-midnight p-4 transition ${
                  f.service === s.id ? `${s.tone} shadow-pop-sm` : 'bg-white hover:bg-midnight/5'
                }`}
              >
                <input type="radio" name="service" className="sr-only" checked={f.service === s.id} onChange={() => { setF((p) => ({ ...p, service: s.id })); setErrors((p) => ({ ...p, service: undefined })) }} />
                <div className="font-extrabold">{s.emoji} {s.name}</div>
                <div className="text-sm font-semibold text-midnight/65">{s.price}</div>
              </label>
            ))}
          </div>
          <Err k="service" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="name">Full name *</label>
            <input id="name" className={cls('name')} value={f.name} onChange={set('name')} autoComplete="name" />
            <Err k="name" />
          </div>
          <div>
            <label className="label" htmlFor="phone">WhatsApp number *</label>
            <input id="phone" className={cls('phone')} value={f.phone} onChange={set('phone')} inputMode="tel" placeholder="+91 98765 43210" autoComplete="tel" />
            <Err k="phone" />
          </div>
          <div>
            <label className="label" htmlFor="email">Email (optional)</label>
            <input id="email" type="email" className={cls('email')} value={f.email} onChange={set('email')} autoComplete="email" />
            <Err k="email" />
          </div>
          <div>
            <label className="label" htmlFor="level">Experience *</label>
            <select id="level" className={cls('level')} value={f.level} onChange={set('level')}>
              <option value="">Select…</option>
              {LEVELS.map((l) => <option key={l}>{l}</option>)}
            </select>
            <Err k="level" />
          </div>
          <div>
            <label className="label" htmlFor="role">Target role *</label>
            <input id="role" className={cls('role')} value={f.role} onChange={set('role')} placeholder="e.g. React Developer" />
            <Err k="role" />
          </div>
          <div>
            <label className="label" htmlFor="company">Target company (optional)</label>
            <input id="company" className="input" value={f.company} onChange={set('company')} placeholder="e.g. TCS, Infosys" />
          </div>
        </div>

        <div>
          <label className="label" htmlFor="skills">Key skills</label>
          <input id="skills" className="input" value={f.skills} onChange={set('skills')} placeholder="React, Node.js, SQL…" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="deadline">Deadline (optional)</label>
            <input id="deadline" type="date" className="input" value={f.deadline} onChange={set('deadline')} min={new Date().toISOString().slice(0, 10)} />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="notes">Anything else?</label>
          <textarea id="notes" rows={3} className="input" value={f.notes} onChange={set('notes')} placeholder="Projects, achievements, job link, special requests…" />
        </div>

        <div className="rounded-2xl border-2 border-dashed border-midnight bg-butter/60 p-4 text-sm font-medium">
          📎 {needsResume ? <strong>Your existing resume is needed.</strong> : 'If you have an existing resume,'} send the file on WhatsApp / email after this
          message. Files are never uploaded to this website.
        </div>

        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" className="mt-1 h-5 w-5 accent-emerald-600" checked={f.consent} onChange={set('consent')} />
          <span>
            I understand work starts after payment is confirmed, and I agree to the <Link to="/privacy" className="font-bold underline">privacy policy</Link>. ATS-friendly and
            interview kits do not guarantee shortlisting or specific questions.
          </span>
        </label>
        <Err k="consent" />

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="submit" className="btn-mint">Send on WhatsApp</button>
          <button type="button" className="btn-primary" onClick={submit('mail')}>Send by email</button>
          <button type="button" className="btn-ghost" onClick={copy}>{copied ? 'Copied ✓' : 'Copy message'}</button>
        </div>
      </form>

      <aside className="space-y-5 lg:sticky lg:top-28">
        <div className={`card ${getService(f.service)?.tone || '!bg-white'}`}>
          <p className="text-xs font-extrabold uppercase tracking-wider text-midnight/60">Your pick</p>
          {getService(f.service) ? (
            <>
              <h3 className="mt-2 text-xl font-extrabold">{getService(f.service).emoji} {getService(f.service).name}</h3>
              <p className="mt-1 text-2xl font-extrabold">{getService(f.service).price}</p>
              <p className="text-xs font-bold text-midnight/60">Delivery: {getService(f.service).delivery}</p>
              <ul className="mt-4 space-y-1.5 text-sm font-medium">
                {getService(f.service).includes.map((i) => <li key={i}>✓ {i}</li>)}
              </ul>
            </>
          ) : (
            <p className="mt-2 font-semibold text-midnight/70">Choose a service to see what's included.</p>
          )}
        </div>
        <div className="card">
          <h3 className="font-extrabold">What happens next?</h3>
          <ol className="mt-3 space-y-2 text-sm font-medium text-midnight/75">
            <li>1️⃣ You send the message on WhatsApp</li>
            <li>2️⃣ I confirm scope, price & delivery</li>
            <li>3️⃣ You pay — {SITE.paymentNote.split(' — ')[0]}</li>
            <li>4️⃣ I deliver your files privately</li>
          </ol>
        </div>
      </aside>
      </div>
    </div>
  )
}
