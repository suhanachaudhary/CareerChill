import { useState } from 'react'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={f.q} className="rounded-2xl border border-midnight/5 bg-white shadow-soft">
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {f.q}
            <span className={`text-mint-dark transition ${open === i ? 'rotate-45' : ''}`}>＋</span>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-midnight/75">{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
