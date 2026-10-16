// Plain page heading used on inner pages.
export default function PageHead({ eyebrow, title, sub }) {
  return (
    <div className="max-w-3xl pb-2">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-2 text-[2rem] font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
      {sub && <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">{sub}</p>}
    </div>
  )
}
