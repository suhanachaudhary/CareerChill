import { useState } from 'react'
import Icon from './Icon'

const BEFORE = ['Worked on website project', 'Responsible for testing', 'Knows React, Node']
const AFTER = [
  'Built a responsive React site used by 500+ students, cutting load time by 40%',
  'Wrote 60+ test cases and caught 12 bugs before release',
  'React · Node.js · SQL — backed by project proof',
]

// Phone: segmented toggle. Desktop: side by side.
export default function BeforeAfter() {
  const [tab, setTab] = useState('after')
  return (
    <div>
      <div role="tablist" className="mb-4 flex rounded-xl bg-slate-100 p-1 md:hidden">
        {[['before', 'Before'], ['after', 'After']].map(([k, l]) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k}
            onClick={() => setTab(k)}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold transition ${tab === k ? 'bg-white text-slate-900 shadow-card' : 'text-slate-500'}`}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        <div className={`card ${tab === 'before' ? '' : 'hidden md:block'}`}>
          <span className="chip">Before · generic</span>
          <ul className="mt-5 space-y-3 text-[15px] text-slate-500">
            {BEFORE.map((t) => (
              <li key={t} className="flex gap-3"><Icon name="x" className="mt-0.5 h-4 w-4 flex-none text-slate-400" strokeWidth={2.2} />{t}</li>
            ))}
          </ul>
        </div>
        <div className={`card !border-emerald-600/40 !bg-emerald-50/50 ${tab === 'after' ? '' : 'hidden md:block'}`}>
          <span className="chip !border-emerald-200 !text-emerald-700">After · CareerChill</span>
          <ul className="mt-5 space-y-3 text-[15px] font-medium text-slate-800">
            {AFTER.map((t) => (
              <li key={t} className="flex gap-3"><Icon name="check" className="mt-0.5 h-4 w-4 flex-none text-emerald-600" strokeWidth={2.4} />{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
