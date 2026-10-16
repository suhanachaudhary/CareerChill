import { Link, useLocation } from 'react-router-dom'
import { waLink } from '../config'

// Phone-only sticky action bar. Hidden on the Order page (it has its own buttons).
export default function MobileBar() {
  const { pathname } = useLocation()
  if (pathname === '/order') return null
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-midnight/10 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="flex gap-3">
        <a
          href={waLink('Hi CareerChill! I have a question.')}
          target="_blank"
          rel="noreferrer"
          className="btn flex-1 bg-[#25D366] !py-3 text-white"
        >
          WhatsApp
        </a>
        <Link to="/order" className="btn-primary flex-1 !py-3">
          Order now
        </Link>
      </div>
    </div>
  )
}
