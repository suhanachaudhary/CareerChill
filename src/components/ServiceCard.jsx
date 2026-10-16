import { Link } from 'react-router-dom'

export default function ServiceCard({ s, detailed = false }) {
  return (
    <div className={`card relative flex flex-col ${s.popular ? 'ring-2 ring-mint-deep' : ''}`}>
      {s.popular && (
        <span className="absolute -top-3 right-5 rounded-full bg-mint px-3 py-1 text-xs font-bold">Best value</span>
      )}
      <div className="text-3xl">{s.emoji}</div>
      <h3 className="mt-3 text-lg font-extrabold">{s.name}</h3>
      <p className="mt-1 text-sm text-midnight/70">{s.blurb}</p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-2xl font-extrabold">{s.price}</span>
        <span className="text-xs text-midnight/50">· {s.delivery}</span>
      </div>
      {detailed && (
        <>
          <ul className="mt-4 space-y-2 text-sm">
            {s.includes.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 text-mint-dark">✓</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-midnight/50">Best for: {s.for}</p>
        </>
      )}
      <Link to={`/order?service=${s.id}`} className={`${s.popular ? 'btn-mint' : 'btn-primary'} mt-auto !mt-6`}>
        Request this
      </Link>
    </div>
  )
}
