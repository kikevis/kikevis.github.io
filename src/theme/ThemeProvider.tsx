import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ThemeName = 'hacker' | 'noir' | 'light'

export type ThemeMeta = {
  id: ThemeName
  label: string
  hint: string
  swatch: string
  page: string
  /** Colores usados por la escena 3D (hex). */
  scene: {
    primary: string
    secondary: string
    particles: string
    fog: string
  }
}

export const THEMES: ThemeMeta[] = [
  {
    id: 'hacker',
    label: 'Default',
    hint: 'Verde terminal sobre negro',
    swatch: '#00ff9c',
    page: '#05070a',
    scene: {
      primary: '#00ff9c',
      secondary: '#0affc0',
      particles: '#1cff9e',
      fog: '#05070a',
    },
  },
  {
    id: 'noir',
    label: 'Noir',
    hint: 'Blanco y negro, domina el negro',
    swatch: '#0a0a0a',
    page: '#0a0a0a',
    scene: {
      primary: '#ffffff',
      secondary: '#9a9a9a',
      particles: '#e8e8e8',
      fog: '#0a0a0a',
    },
  },
  {
    id: 'light',
    label: 'Papel',
    hint: 'Blanco y negro, domina el blanco',
    swatch: '#f4f4f1',
    page: '#f4f4f1',
    scene: {
      primary: '#101010',
      secondary: '#6b6b6b',
      particles: '#2a2a2a',
      fog: '#f4f4f1',
    },
  },
]

const STORAGE_KEY = 'gv-theme'

type Ctx = {
  theme: ThemeName
  meta: ThemeMeta
  setTheme: (t: ThemeName) => void
  cycle: () => void
}

const ThemeContext = createContext<Ctx | null>(null)

function readStored(): ThemeName {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw && THEMES.some((t) => t.id === raw)) return raw as ThemeName
  } catch {
    /* localStorage puede fallar en modo privado */
  }
  return 'hacker'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(readStored)

  useEffect(() => {
    const meta = THEMES.find((t) => t.id === theme) ?? THEMES[0]
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.background = meta.page
    const tag = document.querySelector('meta[name="theme-color"]')
    if (tag) tag.setAttribute('content', meta.page)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* sin persistencia, pero la sesión sigue funcionando */
    }
  }, [theme])

  const setTheme = useCallback((t: ThemeName) => setThemeState(t), [])

  const cycle = useCallback(() => {
    setThemeState((prev) => {
      const i = THEMES.findIndex((t) => t.id === prev)
      return THEMES[(i + 1) % THEMES.length].id
    })
  }, [])

  // Atajo de teclado: T cambia de tema.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null
      if (el && /input|textarea|select/i.test(el.tagName)) return
      if (e.key === 't' || e.key === 'T') cycle()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cycle])

  const value = useMemo<Ctx>(
    () => ({
      theme,
      meta: THEMES.find((t) => t.id === theme) ?? THEMES[0],
      setTheme,
      cycle,
    }),
    [theme, setTheme, cycle],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de <ThemeProvider>')
  return ctx
}
