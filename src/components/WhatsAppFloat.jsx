import { waLink } from '../config'
import Icon from './Icon'

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink('Hi CareerChill! I have a question.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-emerald-700 md:inline-flex"
    >
      <Icon name="chat" className="h-5 w-5" /> Chat with us
    </a>
  )
}
