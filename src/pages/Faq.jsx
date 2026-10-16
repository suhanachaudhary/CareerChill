import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import PageHead from '../components/PageHead'
import { FAQS } from '../data/faqs'
import { waLink } from '../config'

export default function Faq() {
  return (
    <div className="container-x pt-6 md:pt-10">
      <PageHead eyebrow="FAQs" title="Everything you might ask." sub="Pricing, payment, privacy, revisions — all answered." emoji="🤔" tone="bg-lilac" />
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_1.7fr]">
        <aside className="card !bg-mint lg:sticky lg:top-28">
          <h2 className="text-2xl font-extrabold">Still unsure?</h2>
          <p className="mt-2 font-medium text-midnight/75">Message me — no pressure. I reply fast on WhatsApp.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={waLink('Hi CareerChill! I have a question.')} target="_blank" rel="noreferrer" className="btn-primary">WhatsApp</a>
            <Link to="/contact" className="btn-ghost">Contact</Link>
          </div>
        </aside>
        <FaqList items={FAQS} />
      </div>
    </div>
  )
}
