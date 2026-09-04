import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/cv'
import ThemeSwitcher from './ThemeSwitcher'

function Monogram() {
  return (
    <a
      href="#top"
      aria-label="Ir al inicio"
      className="group flex items-center gap-3"
    >
      <span className="relative grid h-9 w-9 place-items-center border border-line bg-surface/60 backdrop-blur-sm transition-colors duration-300 group-hover:border-accent">
        <span className="font-display text-[13px] font-bold leading-none tracking-tightest text-ink transition-colors group-hover:text-accent">
          GV
        </span>
      </span>
      <span className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-muted sm:block">
        {profile.last}
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('perfil')
  const [solid, setSolid] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent',
        ].join(' ')}
      >
        <div className="shell flex items-center justify-between py-4">
          <Monogram />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Secciones">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  'font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300',
                  active === item.id ? 'text-accent' : 'text-muted hover:text-ink',
                ].join(' ')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="grid h-9 w-9 place-items-center border border-line bg-surface/60 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>

        <motion.div
          className="h-px origin-left bg-accent"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-bg/97 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="shell flex items-center justify-between py-4">
              <Monogram />
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="grid h-9 w-9 place-items-center border border-line text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <X size={16} />
              </button>
            </div>

            <nav className="shell flex flex-1 flex-col justify-center gap-1" aria-label="Secciones">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="font-mono text-[11px] text-muted">
                    0{i + 1}
                  </span>
                  <span className="display text-3xl transition-colors group-hover:text-accent">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="shell pb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {profile.location}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
