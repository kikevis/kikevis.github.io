import { motion } from 'framer-motion'
import { ArrowDownRight, MapPin, Mail } from 'lucide-react'
import { profile } from '../data/cv'
import { RevealLines } from './Reveal'

const marquee = [
  'React',
  'Django',
  'TypeScript',
  'OWASP',
  'ISO 27001',
  'Microsoft 365',
  'RBAC',
  'DevSecOps',
  'SQL',
  'Cloudflare',
  'Redes',
  'Hardening',
]

function StatusPill({ children, live = false }: { children: React.ReactNode; live?: boolean }) {
  return (
    <span className={`chip ${live ? 'chip-live' : ''}`}>
      {live && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] pt-28 lg:pt-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------- Columna de texto ---------- */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-7 flex flex-wrap items-center gap-2.5"
            >
              <StatusPill live>{profile.available}</StatusPill>
              <StatusPill>
                <MapPin size={11} /> {profile.location}
              </StatusPill>
            </motion.div>

            <h1 className="display text-[15vw] leading-[0.82] sm:text-[11vw] lg:text-[7.4vw] xl:text-[6.6vw]">
              <RevealLines lines={['Geovanny Enrique', 'Villa Sánchez']} lineClassName="glow-text" />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-2xl"
            >
              <p className="font-mono text-[12px] uppercase leading-relaxed tracking-[0.22em] text-accent">
                {profile.role}
                <span className="text-muted"> — {profile.roleNote}</span>
              </p>
              <p className="mt-5 text-xl leading-snug text-ink/90 sm:text-2xl">
                Desarrollo Full Stack, arquitectura cloud y seguridad de la información.
                Escribo el sistema <em className="not-italic text-accent">y</em> el plan para
                que no se caiga.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#experiencia" className="btn btn-solid">
                Ver trayectoria <ArrowDownRight size={14} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                <Mail size={14} /> Escríbeme
              </a>
            </motion.div>
          </div>

          {/* ---------- Retrato ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="card overflow-hidden">
                <picture>
                  <source srcSet="./geovanny.webp" type="image/webp" />
                  <img
                    src="./geovanny.jpg"
                    alt="Retrato de Geovanny Enrique Villa Sánchez"
                    width={880}
                    height={1100}
                    loading="eager"
                    className="photo-treat h-full w-full object-cover transition-[filter] duration-700"
                  />
                </picture>
                <div className="pointer-events-none absolute inset-0 mix-blend-overlay grid-bg" />
              </div>

              <div className="mt-3 flex items-center justify-between border border-line bg-surface/50 px-3 py-2 backdrop-blur-md">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  ID · {profile.githubLabel}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  ONLINE
                  <span className="ml-1 animate-blink">_</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Marquesina ---------- */}
      <div className="relative mt-16 overflow-hidden border-y border-line bg-surface/30 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {marquee.map((m) => (
                <span
                  key={`${dup}-${m}`}
                  className="flex items-center gap-6 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.24em] text-muted"
                >
                  {m}
                  <span className="text-accent">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
