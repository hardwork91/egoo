import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { IntlProvider, useIntl } from 'react-intl'
import { messages } from './messages'

const STORAGE_KEY = 'egoo_locale'
const SUPPORTED = ['en', 'es']
const DEFAULT = 'en'

const LocaleContext = createContext({ locale: DEFAULT, setLocale: () => {} })
export const useLocale = () => useContext(LocaleContext)

function getInitialLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(saved)) return saved
  } catch {
    /* localStorage no disponible */
  }
  return DEFAULT
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  const setLocale = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} defaultLocale={DEFAULT} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

// Botón conmutador de idioma (globo) para la barra superior.
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const intl = useIntl()
  const next = locale === 'en' ? 'es' : 'en'
  return (
    <button
      type="button"
      className="lang"
      onClick={() => setLocale(next)}
      aria-label={intl.formatMessage({ id: 'lang.switch' })}
      title={intl.formatMessage({ id: 'lang.switch' })}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.5 3.8 5.8 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3z" />
      </svg>
      <span>{locale.toUpperCase()}</span>
    </button>
  )
}
