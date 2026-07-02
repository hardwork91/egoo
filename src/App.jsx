import { useState } from 'react'
import DeviceDemo from './DeviceDemo.jsx'

function Wordmark() {
  return (
    <span className="word">egoo<span className="dot" /></span>
  )
}

function Waitlist() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [note, setNote] = useState('Nada de spam, prometido. Solo un correo cuando esté listo.')

  function submit(e) {
    e.preventDefault()
    const v = email.trim()
    if (!v || v.indexOf('@') < 1) {
      setNote('Mmm, ese correo se ve raro — ¿lo revisas?')
      return
    }
    // TODO: conectar a un servicio real (Tally / Formspree / Buttondown).
    setDone(true)
  }

  return (
    <section className="signup" id="join">
      <div className="wrap">
        <p className="eyebrow kicker" style={{ justifyContent: 'center' }}>¿Quieres uno?</p>
        <h2>Aparta tu lugar en la primera tanda.</h2>
        <p className="sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Los hacemos en tandas pequeñas y a mano. Deja tu correo y te avisamos una sola
          vez — cuando estén listos, y antes de que se acaben.
        </p>
        {done ? (
          <p className="done">¡Estás dentro! <b>Te avisamos una vez.</b></p>
        ) : (
          <>
            <form className="wl" onSubmit={submit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                aria-label="Correo electrónico"
                required
              />
              <button className="btn" type="submit">Aparta el mío</button>
            </form>
            <p className="fineprint">{note}</p>
          </>
        )}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="bar">
        <div className="wrap">
          <Wordmark />
          <nav>
            <a href="#what">qué es esto</a>
            <a href="#join">únete</a>
          </nav>
        </div>
      </header>

      {/* HERO : the thesis in motion — one neutral object, any story */}
      <section className="hero">
        <div className="wrap">
          <div className="copy">
            <span className="eyebrow">Escribe · Comparte · Juega</span>
            <h1>Un cacharrito.<br />Cualquier historia.<br /><span className="soft">Sin distracciones.</span></h1>
            <p className="lede">
              Egoo es un cacharrito de bolsillo para ficción interactiva — historias que se
              ramifican según lo que eliges, con condiciones, dados y azar, combates, ítems
              y más — y <strong>la pequeña banda que las escribe</strong>. Agarra una que
              hizo alguien (fantasía, noir, ciencia ficción, cosas maravillosamente raras),
              o escribe la tuya en nuestro estudio web (gratis) y compártela. Y la juegas
              tranquilo, sin distracciones — en la fila, en el bus, esperando el café, donde
              caiga.
            </p>
            <div className="cta-row">
              <a className="btn" href="#join">Únete a la lista</a>
              <a className="btn ghost" href="#what">Cómo funciona</a>
            </div>
          </div>

          <DeviceDemo />
        </div>
      </section>

      {/* STATEMENT : old-school feel, modern core */}
      <section className="statement">
        <div className="wrap">
          <p className="eyebrow kicker" style={{ justifyContent: 'center' }}>La idea</p>
          <p className="slogan">Vieja escuela por fuera.<br /><span className="amber">Moderno por dentro.</span></p>
          <p className="statement-sub">
            Parece salido de un cajón de 1994. Juega lo que sea que la comunidad imagine.
          </p>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section id="what">
        <div className="wrap">
          <p className="eyebrow kicker">Una cosita tranquila</p>
          <h2>Solo tú y la historia.</h2>
          <p className="sub">
            Una linterna bajo las sábanas. Una pantallita en un viaje largo. Esa forma feliz
            en que una historia te tragaba entero. Egoo es justo para eso: un objeto pequeño
            y humilde que no te pide nada más que atención, y le entrega el mundo entero a
            las palabras. Es sobrio a propósito, para que la historia pueda ser cualquier
            cosa.
          </p>

          <div className="trio">
            <div className="cell">
              <span className="lab">Pequeño</span>
              <h3>Cabe en la mano</h3>
              <p>Un objeto tranquilo que llevas como un libro de bolsillo. Se queda quieto y espera, como las cosas buenas.</p>
            </div>
            <div className="cell">
              <span className="lab">En blanco a propósito</span>
              <h3>La historia es todo el show</h3>
              <p>El aparato se mantiene neutro para que el mundo viva en las palabras: un cuento de hadas una noche, uno de fantasmas la siguiente.</p>
            </div>
            <div className="cell">
              <span className="lab">Tuyo</span>
              <h3>Hecho de tus mundos</h3>
              <p>Escribe tus propias historias, o piérdete en las que soñó la comunidad. Cárgalas y listo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO LAYERS */}
      <section className="layers" id="layers">
        <div className="wrap">
          <p className="eyebrow kicker">Dos formas de entrar</p>
          <h2>Gratis en la web. Vivo en tu mano.</h2>
          <div className="cols">
            <div className="layer">
              <span className="tag">El estudio + la comunidad</span>
              <h3>Escribe y comparte — gratis</h3>
              <p>
                Escribe historias ramificadas en nuestro estudio y juégalas ahí mismo en el
                navegador. Compártelas con una comunidad de creadores que crece — y explora,
                juega y piérdete en las de los demás. Sin costo, nunca.
              </p>
              <div className="price">$0 · en tu navegador</div>
            </div>
            <div className="layer pay">
              <span className="tag">El cacharro</span>
              <h3>La mejor parte</h3>
              <p>
                Los hacemos a mano, en tandas pequeñas, y te los mandamos. Las mismas
                historias — de bolsillo, siempre listas, e imposibles de dejar por una
                distracción.
              </p>
              <div className="price">unos $50 · hechos a mano</div>
            </div>
          </div>
          <p className="community-note">
            La comunidad vive en Discord — intercambia historias, vota tus favoritas y encuentra tu próxima lectura.
          </p>
        </div>
      </section>

      <Waitlist />

      <footer>
        <div className="wrap">
          <Wordmark />
          <span className="note">un cacharrito de historias · hecho a mano · «Egoo» es solo un nombre provisional</span>
        </div>
      </footer>
    </div>
  )
}
