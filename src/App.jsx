import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/TrustBar'
import Services from './components/Services/Services'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Testimonials from './components/Testimonials/Testimonials'
import Booking from './components/Booking/Booking'
import Footer from './components/Footer/Footer'

function Toast({ message, color, show }) {
  return (
    <div
      className={`toast${show ? ' show' : ''}`}
      style={{ background: color }}
    >
      {message}
    </div>
  )
}

export default function App() {
  const [toast, setToast] = useState({ message: '', color: '#10B981', show: false })
  const timerRef = useRef(null)

  // Global scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  })

  const showToast = (message, color = '#10B981') => {
    clearTimeout(timerRef.current)
    setToast({ message, color, show: true })
    timerRef.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 4000)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Booking onToast={showToast} />
      <Footer />
      <Toast {...toast} />
    </>
  )
}
