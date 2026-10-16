// ✏️  EDIT THESE before launch — everything on the site reads from here.
export const SITE = {
  name: 'CareerChill',
  tagline: 'Less confusion. Better preparation.',
  // WhatsApp number with country code, digits only (e.g. 919876543210)
  whatsapp: '919149000288',
  whatsappDisplay: '+91 91490 00288',
  email: 'careerchilll@gmail.com',
  instagram: 'careerchill',
  // How payment is collected (shown on the Order page + FAQs)
  paymentNote: 'UPI / bank transfer — details are shared on WhatsApp after the scope is confirmed.',
}

export const waLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const mailLink = (subject = '', body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
