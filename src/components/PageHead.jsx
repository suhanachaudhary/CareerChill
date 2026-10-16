// Coloured banner at the top of inner pages.
export default function PageHead({ eyebrow, title, sub, emoji, tone = 'bg-mint' }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border-2 border-midnight p-6 shadow-pop sm:p-10 lg:p-14 ${tone}`}>
      <span className="eyebrow !bg-white">{eyebrow}</span>
      <h1 className="mt-4 max-w-3xl text-[2rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
      {sub && <p className="mt-4 max-w-2xl text-base font-medium text-midnight/75 sm:text-lg">{sub}</p>}
      {emoji && (
        <span className="absolute -bottom-4 right-4 rotate-12 text-[5.5rem] opacity-90 sm:right-10 sm:text-[9rem] lg:text-[12rem]" aria-hidden="true">{emoji}</span>
      )}
    </div>
  )
}
