import type { ReactNode } from 'react'
import Reveal from './Reveal'

export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  )
}

export function SectionHead({
  index,
  kicker,
  title,
  lede,
}: {
  index: string
  kicker: string
  title: string
  lede?: string
}) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent">{index}</span>
        <span className="rule flex-1" />
        <span className="label">{kicker}</span>
      </div>
      <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {lede && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
      )}
    </Reveal>
  )
}
