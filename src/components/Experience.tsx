import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { jobs } from '../data/cv'
import Reveal from './Reveal'
import { Section, SectionHead } from './Section'

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="experiencia">
      <SectionHead
        index="03"
        kicker="Trayectoria"
        title="Experiencia"
        lede="De webmaster de una fundación a analista TI: cinco años bajando desde la interfaz hasta la infraestructura."
      />

      <div className="border-t border-line">
        {jobs.map((job, i) => {
          const isOpen = open === i
          return (
            <Reveal key={job.company} delay={i * 0.05} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group grid w-full grid-cols-12 items-start gap-4 py-8 text-left transition-colors duration-300 sm:py-10"
              >
                <div className="col-span-12 sm:col-span-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      · reciente
                    </span>
                  )}
                </div>

                <div className="col-span-11 sm:col-span-8">
                  <h3 className="display text-2xl leading-tight transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                    {job.company}
                  </h3>
                  <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.16em] text-accent/90">
                    {job.role}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {job.summary}
                  </p>
                </div>

                <div className="col-span-1 flex justify-end pt-1">
                  <span
                    className={[
                      'grid h-8 w-8 place-items-center border border-line text-muted transition-all duration-500',
                      isOpen ? 'rotate-45 border-accent text-accent' : 'group-hover:border-accent group-hover:text-accent',
                    ].join(' ')}
                  >
                    <Plus size={14} />
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-4 pb-10">
                      <div className="col-span-12 sm:col-span-3" />
                      <div className="col-span-12 sm:col-span-9">
                        <ul className="space-y-3.5">
                          {job.bullets.map((b) => (
                            <li key={b} className="flex gap-4">
                              <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                              <span className="text-sm leading-relaxed text-ink/85 sm:text-base">
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {job.tags.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
