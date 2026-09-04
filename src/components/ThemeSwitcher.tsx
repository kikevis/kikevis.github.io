import { THEMES, useTheme } from '../theme/ThemeProvider'

/**
 * Selector de los tres temas. Segmentado, con estado activo evidente
 * y etiquetas accesibles (no solo color).
 */
export default function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Tema visual del sitio"
      className="inline-flex items-center gap-px border border-line bg-surface/70 p-px backdrop-blur-md"
    >
      {THEMES.map((t) => {
        const active = t.id === theme
        return (
          <button
            key={t.id}
            role="radio"
            aria-checked={active}
            title={`${t.label} — ${t.hint}`}
            onClick={() => setTheme(t.id)}
            className={[
              'group flex items-center gap-2 px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300',
              active
                ? 'bg-accent text-accent-ink'
                : 'text-muted hover:bg-line/40 hover:text-ink',
            ].join(' ')}
          >
            <span
              className="h-2.5 w-2.5 shrink-0 border border-current"
              style={{ background: t.swatch }}
              aria-hidden="true"
            />
            {!compact && <span className="hidden sm:inline">{t.label}</span>}
          </button>
        )
      })}
    </div>
  )
}
