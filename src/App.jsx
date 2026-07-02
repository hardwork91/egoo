import { useState } from 'react'
import { useIntl } from 'react-intl'
import DeviceDemo from './DeviceDemo.jsx'
import { LanguageSwitcher } from './i18n.jsx'

// TODO: reemplazar por las URLs reales cuando estén publicadas.
const DEMO_URL = '#estudio' // demo jugable en el navegador (itch / hosted)
const STUDIO_URL = '#estudio' // el estudio/editor web
const DISCORD_URL = 'https://discord.gg/2AgUEgjR9'

const TRIO = ['small', 'offline', 'blank', 'yours']
const STEPS = ['s1', 's2', 's3']
const SPECS = ['size', 'screen', 'control', 'stories', 'conn', 'body', 'battery', 'shipping']
const EXAMPLES = ['1', '2', '3', '4']
const FAQS = ['1', '2', '3', '4', '5', '6']

function Wordmark({ className = '' }) {
  return <img src="/egoo/logo.svg" alt="egoo" className={`logo ${className}`.trim()} />
}

function Waitlist() {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [note, setNote] = useState(t('wl.note'))

  function submit(e) {
    e.preventDefault()
    const v = email.trim()
    if (!v || v.indexOf('@') < 1) {
      setNote(t('wl.err'))
      return
    }
    // TODO: conectar a un servicio real (Tally / Formspree / Buttondown).
    setDone(true)
  }

  return (
    <section className="signup" id="join">
      <div className="wrap">
        <p className="eyebrow kicker" style={{ justifyContent: 'center' }}>{t('wl.eyebrow')}</p>
        <h2>{t('wl.h2')}</h2>
        <p className="sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>{t('wl.sub')}</p>
        {done ? (
          <p className="done">
            {intl.formatMessage({ id: 'wl.done' }, { b: (c) => <b>{c}</b> })}
          </p>
        ) : (
          <>
            <form className="wl" onSubmit={submit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('wl.placeholder')}
                aria-label={t('wl.aria')}
                required
              />
              <button className="btn" type="submit">{t('wl.btn')}</button>
            </form>
            <p className="fineprint">{note}</p>
          </>
        )}
      </div>
    </section>
  )
}

export default function App() {
  const intl = useIntl()
  const t = (id, values) => intl.formatMessage({ id }, values)

  return (
    <div className="page">
      <header className="bar">
        <div className="wrap">
          <Wordmark />
          <nav>
            <a href="#what">{t('nav.what')}</a>
            <a href="#como">{t('nav.how')}</a>
            <a href="#join">{t('nav.join')}</a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="copy">
            <span className="eyebrow">{t('hero.eyebrow')}</span>
            <h1>{t('hero.h1.a')}<br />{t('hero.h1.b')}<br /><span className="soft">{t('hero.h1.c')}</span></h1>
            <p className="lede">{t('hero.lede', { strong: (c) => <strong>{c}</strong> })}</p>
            <div className="cta-row">
              <a className="btn" href="#join">{t('cta.join')}</a>
              <a className="btn ghost" href={DEMO_URL}>{t('cta.demo')}</a>
            </div>
          </div>
          <DeviceDemo />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="wrap">
          <p className="eyebrow kicker" style={{ justifyContent: 'center' }}>{t('statement.eyebrow')}</p>
          <p className="slogan">{t('statement.slogan.a')}<br /><span className="amber">{t('statement.slogan.b')}</span></p>
          <p className="statement-sub">{t('statement.sub')}</p>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section id="what">
        <div className="wrap">
          <p className="eyebrow kicker">{t('what.eyebrow')}</p>
          <h2>{t('what.h2')}</h2>
          <p className="sub">{t('what.sub')}</p>
          <div className="trio">
            {TRIO.map((k) => (
              <div className="cell" key={k}>
                <span className="lab">{t(`trio.${k}.lab`)}</span>
                <h3>{t(`trio.${k}.h`)}</h3>
                <p>{t(`trio.${k}.p`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como">
        <div className="wrap">
          <p className="eyebrow kicker">{t('how.eyebrow')}</p>
          <h2>{t('how.h2')}</h2>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s}>
                <span className="num">{`0${i + 1}`}</span>
                <h3>{t(`how.${s}.h`)}</h3>
                <p>{t(`how.${s}.p`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SPECS */}
      <section className="specs-sec" id="specs">
        <div className="wrap">
          <p className="eyebrow kicker">{t('specs.eyebrow')}</p>
          <h2>{t('specs.h2')}</h2>
          <div className="specs">
            <dl>
              {SPECS.map((k) => (
                <div key={k}>
                  <dt>{t(`specs.${k}.k`)}</dt>
                  <dd>{t(`specs.${k}.v`)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section id="estudio">
        <div className="wrap">
          <p className="eyebrow kicker">{t('studio.eyebrow')}</p>
          <h2>{t('studio.h2')}</h2>
          <p className="sub">{t('studio.sub')}</p>
          <div className="studio-wrap">
            <div className="studio-mock" aria-hidden="true">
              <div className="bar"><span /><span /><span /></div>
              <div className="body">
                <div className="node">
                  <span className="node-t">{t('studio.mock.scene')}</span>
                  <p>{t('studio.mock.text')}</p>
                  <div className="choices"><span>{t('studio.mock.optA')}</span><span>{t('studio.mock.optB')}</span></div>
                </div>
                <div className="branch">
                  <span className="pill">{t('studio.mock.pillB')}</span>
                  <span className="pill">{t('studio.mock.pillA')}</span>
                </div>
              </div>
            </div>
            <a className="btn" href={STUDIO_URL}>{t('studio.cta')}</a>
          </div>
        </div>
      </section>

      {/* EXAMPLE STORIES */}
      <section className="examples-sec" id="historias">
        <div className="wrap">
          <p className="eyebrow kicker">{t('examples.eyebrow')}</p>
          <h2>{t('examples.h2')}</h2>
          <div className="examples">
            {EXAMPLES.map((n) => (
              <div className="ex" key={n}>
                <span className="g">{t(`ex.${n}.g`)}</span>
                <h3>{t(`ex.${n}.t`)}</h3>
                <p>{t(`ex.${n}.h`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO LAYERS */}
      <section className="layers" id="layers">
        <div className="wrap">
          <p className="eyebrow kicker">{t('layers.eyebrow')}</p>
          <h2>{t('layers.h2')}</h2>
          <div className="cols">
            <div className="layer">
              <span className="tag">{t('layers.web.tag')}</span>
              <h3>{t('layers.web.h')}</h3>
              <p>{t('layers.web.p')}</p>
              <div className="price">{t('layers.web.price')}</div>
            </div>
            <div className="layer pay">
              <span className="tag">{t('layers.dev.tag')}</span>
              <h3>{t('layers.dev.h')}</h3>
              <p>{t('layers.dev.p')}</p>
              <div className="price">{t('layers.dev.price')}</div>
            </div>
          </div>
          <p className="community-note">{t('layers.community')}</p>
          <div className="discord-cta">
            <a className="btn" href={DISCORD_URL} target="_blank" rel="noreferrer">{t('cta.discord')}</a>
          </div>
        </div>
      </section>

      {/* WHO MAKES IT */}
      <section id="quien">
        <div className="wrap">
          <p className="eyebrow kicker">{t('maker.eyebrow')}</p>
          <h2>{t('maker.h2')}</h2>
          <p className="sub">{t('maker.sub')}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <p className="eyebrow kicker">{t('faq.eyebrow')}</p>
          <h2>{t('faq.h2')}</h2>
          <div className="faq">
            {FAQS.map((n) => (
              <details key={n}>
                <summary>{t(`faq.q${n}`)}</summary>
                <p>{t(`faq.a${n}`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Waitlist />

      <footer>
        <div className="wrap">
          <div>
            <Wordmark />
            <p className="foot-slogan">{t('footer.slogan.a')} <span className="accent">{t('footer.slogan.b')}</span></p>
            <p className="note">{t('footer.note')}</p>
          </div>
          <nav className="foot-links">
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">{t('footer.discord')}</a>
            <a href="#join">{t('footer.waitlist')}</a>
            <a href="mailto:hola@egoo.example">{t('footer.contact')}</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
