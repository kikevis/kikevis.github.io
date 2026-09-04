import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

/** Envoltorio de entrada al hacer scroll. */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'header'
}) {
  const Tag = motion[as] as typeof motion.div
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <Tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </Tag>
  )
}

/** Título grande que entra línea por línea. */
export function RevealLines({
  lines,
  className = '',
  lineClassName = '',
}: {
  lines: readonly string[]
  className?: string
  lineClassName?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <span ref={ref} className={className}>
      {/* pt-[0.14em] en el recorte: evita que se corten las tildes de las mayúsculas */}
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pt-[0.14em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: '108%' }}
            animate={inView ? { y: 0 } : { y: '108%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 + 0.08 * i }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
