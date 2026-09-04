import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/cv'
import Reveal, { RevealLines } from './Reveal'
import { Section } from './Section'

const channels = [
  {
    icon: Mail,
    label: 'Correo',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
  },
]

export default function Contact() {
  return (
    <Section id="contacto" className="pb-16">
      <Reveal className="mb-4 flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent">06</span>
        <span className="rule flex-1" />
        <span className="label">Hablemos</span>
      </Reveal>

      <h2 className="display text-[13vw] leading-[0.84] sm:text-[9vw] lg:text-[6.5vw]">
        <RevealLines lines={['Cuéntame', 'qué hay que', 'construir']} lineClassName="glow-text" />
      </h2>

      <Reveal delay={0.2}>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Proyectos de desarrollo, auditorías y hardening, migraciones a Microsoft 365 o
          posiciones full-time. Respondo el mismo día.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c, i) => (
          <Reveal
            key={c.label}
            delay={i * 0.06}
            className="group bg-surface/55 backdrop-blur-md transition-colors duration-500 hover:bg-surface"
          >
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer noopener"
              className="flex h-full flex-col justify-between gap-8 p-7"
            >
              <c.icon
                size={18}
                className="text-muted transition-colors duration-300 group-hover:text-accent"
              />
              <div>
                <div className="label mb-2">{c.label}</div>
                <div className="break-all text-sm text-ink transition-colors duration-300 group-hover:text-accent sm:text-base">
                  {c.value}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <a href={`mailto:${profile.email}`} className="btn btn-solid">
          Enviar un mensaje
        </a>
      </Reveal>
    </Section>
  )
}
