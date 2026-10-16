import { Link } from 'react-router-dom'

export default function ServiceCard({ s, detailed = false }) {
  return (
    <div className={`relative flex w-full flex-col rounded-3xl border-2 border-midnight p-6 shadow-pop ${s.tone}`}>
      {s.popular && (
        <span className="chip absolute -top-3.5 right-5 rotate-3 !bg-midnight !text-mint">⭐ Best value</span>
      )}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-midnight bg-white text-3xl shadow-pop-sm">{s.emoji}</div>
      <h3 className="mt-5 text-xl font-extrabold leading-tight">{s.name}</h3>
      <p className="mt-2 text-sm font-medium text-midnight/70">{s.blurb}</p>
      <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
        <span className="text-3xl font-extrabold">{s.price}</span>
        <span className="text-xs font-bold text-midnight/60">· {s.delivery}</span>
      </div>
      {detailed && (
        <>
          <ul className="mt-5 space-y-2 border-t-2 border-dashed border-midnight/25 pt-5 text-sm font-medium">
            {s.includes.map((i) => (
              <li key={i} className="flex gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 border-midnight bg-white text-[10px] font-extrabold">✓</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-bold text-midnight/55">Best for: {s.for}</p>
        </>
      )}
      <Link to={`/order?service=${s.id}`} className="btn-primary mt-6 w-full !mt-auto">
        Request this →
      </Link>
    </div>
  )
}
