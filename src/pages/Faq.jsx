import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import { FAQS } from '../data/faqs'

export default function Faq() {
  return (
    <div className="container-x max-w-3xl py-14">
      <p className="eyebrow">FAQs</p>
      <h1 className="mb-8 mt-2 text-4xl font-extrabold">Everything you might ask</h1>
      <FaqList items={FAQS} />
      <p className="mt-8 text-sm text-midnight/70">
        Still unsure? <Link to="/contact" className="font-bold text-mint-dark hover:underline">Contact me</Link> — I reply fast on WhatsApp.
      </p>
    </div>
  )
}
