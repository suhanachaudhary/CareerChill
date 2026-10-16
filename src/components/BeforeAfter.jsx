import { useState } from 'react'

const BEFORE = ['Worked on website project', 'Responsible for testing', 'Knows React, Node']
const AFTER = [
  'Built a responsive React site used by 500+ students, cutting load time by 40%',
  'Wrote 60+ test cases and caught 12 bugs before release',
  'React · Node.js · SQL — backed by project proof',
]

const Row = ({ ok, children }) => (
  <li className="flex gap-3">
    <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-midnight text-xs font-extrabold ${ok ? 'bg-mint' : 'bg-white'}`}>
      {ok ? '✓' : '✕'}
    </span>
    <span className={ok ? 'font-bold' : 'font-medium text-midnight/60 line-through decoration-midnight/30'}>{children}</span>
  </li>
)

// Phone: segmented toggle. Desktop: side by side with an arrow.
export default function BeforeAfter() {
  const [tab, setTab] = useState('after')
  return (
    <div>
      <div role="tablist" className="mb-4 flex rounded-full border-2 border-midnight bg-white p-1 md:hidden">
        {[['before', 'Before'], ['after', 'After']].map(([k, l]) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`flex-1 rounded-full py-2.5 text-sm font-extrabold transition ${tab === k ? 'bg-midnight text-mint' : 'text-midnight/50'}`}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
        <div className={`card !bg-peach/60 ${tab === 'before' ? '' : 'hidden md:block'}`}>
          <span className="chip bg-white">😕 Before · generic</span>
          <ul className="mt-5 space-y-3 text-[15px]">{BEFORE.map((t) => <Row key={t}>{t}</Row>)}</ul>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-midnight bg-butter text-2xl shadow-pop-sm">➜</span>
        </div>
        <div className={`card !bg-mint ${tab === 'after' ? '' : 'hidden md:block'}`}>
          <span className="chip bg-white">🤩 After · CareerChill</span>
          <ul className="mt-5 space-y-3 text-[15px]">{AFTER.map((t) => <Row key={t} ok>{t}</Row>)}</ul>
        </div>
      </div>
    </div>
  )
}
