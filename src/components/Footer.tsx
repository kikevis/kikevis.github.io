import { ArrowUp } from 'lucide-react'
import { profile } from '../data/cv'
import { useTheme } from '../theme/ThemeProvider'

export default function Footer() {
  const { meta } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-bg/70 backdrop-blur-xl">
      <div className="shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          © {year} {profile.name} · {profile.location}
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Tema: <span className="text-accent">{meta.label}</span>
            <span className="ml-2 opacity-60">(tecla T)</span>
          </span>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
          >
            Volver arriba
            <ArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
