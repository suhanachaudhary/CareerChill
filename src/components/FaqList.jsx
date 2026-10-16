import { useState } from 'react'
import Icon from './Icon'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      {items.map((f, i) => (
        <div key={f.q}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold hover:bg-slate-50"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {f.q}
            <Icon name="plus" className={`h-4 w-4 flex-none text-slate-400 transition ${open === i ? 'rotate-45' : ''}`} />
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
