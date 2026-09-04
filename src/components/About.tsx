import { profile, stats, summary, summarySecond } from '../data/cv'
import Reveal from './Reveal'
import { Section, SectionHead } from './Section'

export default function About() {
  return (
    <Section id="perfil">
      <SectionHead index="01" kicker="Quién soy" title="Perfil" />

      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink/90 sm:text-xl">{summary}</p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{summarySecond}</p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            <span className="chip">DevSecOps</span>
            <span className="chip">OWASP</span>
            <span className="chip">ISO/IEC 27001</span>
            <span className="chip">RBAC</span>
            <span className="chip">Microsoft 365</span>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-px border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface/60 p-6 backdrop-blur-md sm:p-8">
                <div className="display text-4xl text-accent sm:text-5xl">{s.value}</div>
                <div className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-4 p-6">
            <div className="label mb-3">Nota sobre el título</div>
            <p className="text-sm leading-relaxed text-muted">
              Terminé el plan de estudios de Ingeniería de Sistemas y la ceremonia de grado
              está prevista para finales de 2026. En paralelo cursé un diplomado en Seguridad
              Informática cuyo certificado está en expedición.
            </p>
            <a
              href={profile.companyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-accent link-underline"
            >
              También dirijo {profile.company} ↗
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
