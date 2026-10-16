import { useState } from 'react'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={f.q} className={`rounded-2xl border-2 border-midnight shadow-pop-sm transition ${open === i ? 'bg-mint' : 'bg-white'}`}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-extrabold"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {f.q}
            <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 border-midnight bg-white text-lg leading-none transition ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm font-medium leading-relaxed text-midnight/80">{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
