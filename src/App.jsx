import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BottomTabs from './components/BottomTabs'
import Home from './pages/Home'
import Services from './pages/Services'
import Order from './pages/Order'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function ScrollToTop({ pathname }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop pathname={pathname} />
      <Navbar />
      <main key={pathname} className="page-in flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/order" element={<Order />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BottomTabs />
    </div>
  )
}
