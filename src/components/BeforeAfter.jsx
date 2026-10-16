import { useState } from 'react'

const BEFORE = ['Worked on website project', 'Responsible for testing', 'Knows React, Node']
const AFTER = [
  'Built a responsive React site used by 500+ students, cutting load time by 40%',
  'Wrote 60+ test cases and caught 12 bugs before release',
  'React · Node.js · SQL — backed by project proof',
]

const Row = ({ ok, children }) => (
  <li className="flex gap-3">
    <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-extrabold ${ok ? 'bg-mint text-midnight' : 'bg-red-100 text-red-600'}`}>
      {ok ? '✓' : '✕'}
    </span>
    <span className={ok ? 'font-semibold' : 'text-midnight/60'}>{children}</span>
  </li>
)

// Phone: segmented toggle. Desktop: side by side with an arrow.
export default function BeforeAfter() {
  const [tab, setTab] = useState('after')
  return (
    <div>
      <div role="tablist" className="mb-4 flex rounded-full bg-midnight/5 p-1 md:hidden">
        {[['before', 'Before'], ['after', 'After']].map(([k, l]) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`flex-1 rounded-full py-2.5 text-sm font-bold transition ${tab === k ? 'bg-white shadow-soft' : 'text-midnight/50'}`}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className={`card !border-red-100 ${tab === 'before' ? '' : 'hidden md:block'}`}>
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">Before · generic</span>
          <ul className="mt-5 space-y-3 text-[15px]">{BEFORE.map((t) => <Row key={t}>{t}</Row>)}</ul>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-midnight text-xl text-mint">→</span>
        </div>
        <div className={`card !border-mint-deep/40 bg-mint/20 ${tab === 'after' ? '' : 'hidden md:block'}`}>
          <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold">After · CareerChill</span>
          <ul className="mt-5 space-y-3 text-[15px]">{AFTER.map((t) => <Row key={t} ok>{t}</Row>)}</ul>
        </div>
      </div>
    </div>
  )
}
