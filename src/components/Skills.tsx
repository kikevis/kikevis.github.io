import { skillGroups } from '../data/cv'
import Reveal from './Reveal'
import { Section, SectionHead } from './Section'

export default function Skills() {
  return (
    <Section id="stack">
      <SectionHead
        index="04"
        kicker="Herramientas"
        title="Stack"
        lede="Lo que uso a diario, agrupado por el problema que resuelve."
      />

      <div className="grid gap-px border border-line bg-line lg:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.id}
            delay={i * 0.05}
            className="bg-surface/55 p-8 backdrop-blur-md sm:p-10"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display text-xl sm:text-2xl">{g.title}</h3>
              <span className="text-right font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {g.note}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.05em] text-ink/80 transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
