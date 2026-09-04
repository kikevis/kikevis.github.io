import { Suspense, lazy, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Formation from './components/Formation'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Scene3D = lazy(() => import('./components/Scene3D'))

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

/** Cortina de arranque estilo terminal. */
function Boot({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0)
  const lines = [
    'inicializando entorno seguro…',
    'cargando perfil · geovanny enrique villa sánchez',
    'render 3d listo',
  ]

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStep(1), 260),
      window.setTimeout(() => setStep(2), 520),
      window.setTimeout(onDone, 1150),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end bg-bg p-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {lines.slice(0, step + 1).map((l) => (
          <div key={l} className="py-0.5">
            <span className="text-accent">›</span> {l}
          </div>
        ))}
        <span className="text-accent animate-blink">_</span>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) setBooting(false)
  }, [])

  return (
    <>
      {/* Fondo WebGL */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Capas atmosféricas */}
      <div className="pointer-events-none fixed inset-0 z-[1] grid-bg" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 z-[2] mix-blend-overlay"
        style={{ backgroundImage: NOISE, opacity: 'var(--noise-opacity)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[3] h-24 animate-scan bg-gradient-to-b from-transparent via-accent/10 to-transparent"
        style={{ opacity: 'var(--scan-opacity)' }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Capabilities />
          <Experience />
          <Skills />
          <Formation />
          <Contact />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {booting && <Boot onDone={() => setBooting(false)} />}
      </AnimatePresence>
    </>
  )
}
