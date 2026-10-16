import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import PageHead from '../components/PageHead'
import { FAQS } from '../data/faqs'
import { waLink } from '../config'

export default function Faq() {
  return (
    <div className="container-x pt-8 md:pt-14">
      <PageHead eyebrow="FAQs" title="Frequently asked questions" sub="Pricing, payment, privacy, revisions — all answered." />
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_1.9fr]">
        <aside className="card lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold">Still have a question?</h2>
          <p className="mt-2 text-sm text-slate-600">Message me — no pressure. I reply fast on WhatsApp.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={waLink('Hi CareerChill! I have a question.')} target="_blank" rel="noreferrer" className="btn-accent">WhatsApp</a>
            <Link to="/contact" className="btn-ghost">Contact</Link>
          </div>
        </aside>
        <FaqList items={FAQS} />
      </div>
    </div>
  )
}
