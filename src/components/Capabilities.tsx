import { capabilities } from '../data/cv'
import Reveal from './Reveal'
import { Section, SectionHead } from './Section'

export default function Capabilities() {
  return (
    <Section id="capacidades">
      <SectionHead
        index="02"
        kicker="En qué ayudo"
        title="Capacidades"
        lede="Cuatro frentes que suelo cubrir a la vez: el producto, la nube que lo sostiene, el riesgo que lo amenaza y las personas que lo usan."
      />

      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {capabilities.map((c, i) => (
          <Reveal
            key={c.n}
            delay={i * 0.06}
            className="group relative bg-surface/55 p-8 backdrop-blur-md transition-colors duration-500 hover:bg-surface sm:p-10"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent">{c.n}</span>
            <h3 className="display mt-5 text-2xl leading-tight sm:text-3xl">{c.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {c.body}
            </p>
            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
