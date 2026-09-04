import { certifications, education, type Credential } from '../data/cv'
import Reveal from './Reveal'
import { Section, SectionHead } from './Section'

function CredentialRow({ c, i }: { c: Credential; i: number }) {
  const inProgress = c.status === 'progreso'
  return (
    <Reveal delay={i * 0.05} className="border-b border-line py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h4 className="max-w-xl text-lg leading-snug text-ink sm:text-xl">{c.title}</h4>
        <span
          className={[
            'font-mono text-[11px] uppercase tracking-[0.18em]',
            inProgress ? 'text-accent' : 'text-muted',
          ].join(' ')}
        >
          {inProgress ? 'en trámite' : c.year}
        </span>
      </div>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {c.org}
      </p>
      {c.note && <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{c.note}</p>}
    </Reveal>
  )
}

export default function Formation() {
  return (
    <Section id="formacion">
      <SectionHead
        index="05"
        kicker="Credenciales"
        title="Formación"
        lede="Una base técnica del SENA, ingeniería encima y especialización en seguridad para cerrar el círculo."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="label mb-6">Educación</div>
          <div className="border-t border-line">
            {education.map((c, i) => (
              <CredentialRow key={c.title} c={c} i={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="label mb-6">Certificaciones</div>
          <div className="border-t border-line">
            {certifications.map((c, i) => (
              <CredentialRow key={c.title} c={c} i={i} />
            ))}
          </div>

          <Reveal delay={0.15} className="card mt-8 p-6">
            <div className="label mb-3">Idiomas</div>
            <div className="flex items-baseline justify-between">
              <span className="text-lg text-ink">Español</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Nativo
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-lg text-ink">Inglés</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Intermedio
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
