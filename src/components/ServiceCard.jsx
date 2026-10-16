import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ServiceCard({ s, detailed = false }) {
  return (
    <div className={`relative flex w-full flex-col rounded-2xl border bg-white p-6 shadow-card ${s.popular ? 'border-emerald-600 ring-1 ring-emerald-600' : 'border-slate-200'}`}>
      {s.popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
      )}
      <div className="icon-tile"><Icon name={s.icon} className="h-5 w-5" /></div>
      <h3 className="mt-4 text-lg font-semibold leading-snug">{s.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.blurb}</p>
      <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
        <span className="text-2xl font-bold tracking-tight">{s.price}</span>
        <span className="text-xs text-slate-500">· {s.delivery}</span>
      </div>
      {detailed && (
        <>
          <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-700">
            {s.includes.map((i) => (
              <li key={i} className="flex gap-2.5">
                <Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-emerald-600" strokeWidth={2.4} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">Best for: {s.for}</p>
        </>
      )}
      <Link to={`/order?service=${s.id}`} className={`${s.popular ? 'btn-accent' : 'btn-ghost'} mt-6 w-full !mt-auto`}>
        Request this
      </Link>
    </div>
  )
}
