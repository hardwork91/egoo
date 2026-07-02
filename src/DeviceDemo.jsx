import { useEffect } from 'react'
import { useLocale } from './i18n.jsx'

// Contenido de la demo del device, por idioma. Node lengths vary so the scroll
// count varies (0..3); choices are random. Menús/toasts también traducidos.
const DEMO = {
  en: {
    nodes: [
      { lines: ['A merchant ship drifts,', 'silent, off the bow.', 'Nobody answers.'], a: '‹ Ignore', b: 'Board ›' },
      { lines: ['Inside, the air is', 'cold and very still.', 'A door glows faint', 'amber, further in.', 'You hear breathing', "that isn't yours."], a: '‹ Back', b: 'Open ›' },
      { lines: ['The room is empty —', 'but for a small', 'music box turning', 'slowly on the floor.', 'It plays a song', 'you half-remember,', 'the one your mother', 'hummed, a lifetime', 'and a galaxy ago.'], a: '‹ Leave it', b: 'Take it ›' },
      { lines: ['The box grows warm.', 'The song swells and', 'the walls fall away.', "You're small again —", 'home, safe. The ship', 'is just a dream you', 'once had, on a long', 'and quiet night.', 'A voice says your', 'name. You could stay.', 'Stay forever.'], a: '‹ Wake up', b: 'Stay ›' },
    ],
    items: ['Resume', 'Save', 'Load'],
    back: '‹ back', select: 'select ›',
    save: 'SAVED&nbsp;✓<br>slot&nbsp;2', load: 'LOADING…<br>slot&nbsp;2',
  },
  es: {
    nodes: [
      { lines: ['Una nave mercante', 'flota inerte ante ti.', 'No responde nadie.'], a: '‹ Ignorar', b: 'Abordar ›' },
      { lines: ['Dentro, el aire está', 'frío y muy quieto.', 'Una puerta brilla', 'ámbar, más allá.', 'Oyes una respiración', 'que no es la tuya.'], a: '‹ Atrás', b: 'Abrir ›' },
      { lines: ['La sala está vacía —', 'salvo una cajita', 'de música que gira', 'despacio en el suelo.', 'Suena una canción', 'que casi recuerdas,', 'la que tarareaba', 'tu madre, hace una', 'vida y una galaxia.'], a: '‹ Dejarla', b: 'Tomarla ›' },
      { lines: ['La caja se entibia.', 'La canción crece y', 'las paredes se van.', 'Vuelves a ser niño —', 'en casa, a salvo. La', 'nave es solo un sueño', 'que tuviste una vez,', 'en una noche larga', 'y callada. Una voz', 'dice tu nombre.', 'Podrías quedarte.', 'Para siempre.'], a: '‹ Despertar', b: 'Quedarme ›' },
    ],
    items: ['Seguir', 'Guardar', 'Cargar'],
    back: '‹ atrás', select: 'elegir ›',
    save: 'GUARDADO&nbsp;✓<br>ranura&nbsp;2', load: 'CARGANDO…<br>ranura&nbsp;2',
  },
}

export default function DeviceDemo() {
  const { locale } = useLocale()
  const data = DEMO[locale] || DEMO.en

  useEffect(() => {
    let cancelled = false
    const L = DEMO[locale] || DEMO.en
    const nodes = L.nodes
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches
    const story = document.getElementById('story')
    const caret = document.getElementById('caret')
    const optA = document.getElementById('optA')
    const optB = document.getElementById('optB')
    const stick = document.getElementById('stick')
    const arD = document.getElementById('ar-d')
    const arL = document.getElementById('ar-l')
    const arR = document.getElementById('ar-r')
    if (!story) return

    let lh, visible, step
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
    const press = () => {
      stick.classList.add('press')
      return sleep(320).then(() => stick.classList.remove('press'))
    }

    function render(n) {
      story.innerHTML = n.lines.join('<br>')
      optA.textContent = n.a; optB.textContent = n.b
      optA.classList.remove('sel'); optB.classList.remove('sel')
      story.style.transform = 'translateY(0)'; story.style.opacity = '1'
      caret.textContent = '▾'; caret.style.opacity = '0'
    }

    async function playNode(n) {
      render(n)
      const total = n.lines.length
      const maxScroll = Math.max(0, (total - visible) * lh)
      const downs = maxScroll > 0 ? Math.ceil(maxScroll / step) : 0
      caret.textContent = '▾'; caret.style.opacity = downs > 0 ? '.65' : '0'
      await sleep(1600); if (cancelled) return
      let s = 0
      for (let d = 0; d < downs; d++) {
        await sleep(760); if (cancelled) return
        stick.classList.add('down'); arD.classList.add('on')
        s = Math.min(maxScroll, s + step); story.style.transform = 'translateY(-' + s + 'px)'
        if (s >= maxScroll - 1) caret.textContent = '▴'
        await sleep(480); if (cancelled) return
        stick.classList.remove('down'); arD.classList.remove('on')
      }
      await sleep(1300); if (cancelled) return
      caret.style.opacity = '0'
      const r = Math.random() < 0.5
      stick.classList.add(r ? 'right' : 'left'); (r ? arR : arL).classList.add('on'); (r ? optB : optA).classList.add('sel')
      await sleep(760); if (cancelled) return
      stick.classList.remove(r ? 'right' : 'left'); (r ? arR : arL).classList.remove('on')
      story.style.opacity = '0'; await sleep(340)
    }

    async function menu(action) { // 'save' | 'load'
      const items = L.items
      const target = action === 'save' ? 1 : 2
      const draw = (sel) => {
        let h = ''
        for (let k = 0; k < items.length; k++)
          h += (k ? '<br>' : '') + (k === sel ? '<span class="msel">▸ ' + items[k] + '</span>' : '&nbsp;&nbsp;' + items[k])
        story.innerHTML = h
      }
      story.style.transform = 'translateY(0)'; story.style.opacity = '1'; caret.style.opacity = '0'
      await press(); if (cancelled) return
      optA.textContent = L.back; optB.textContent = L.select
      optA.classList.remove('sel'); optB.classList.remove('sel')
      draw(0); await sleep(850); if (cancelled) return
      for (let k = 0; k < target; k++) {
        stick.classList.add('down'); arD.classList.add('on')
        await sleep(340); if (cancelled) return
        stick.classList.remove('down'); arD.classList.remove('on')
        draw(k + 1); await sleep(480); if (cancelled) return
      }
      optB.classList.add('sel'); await press(); if (cancelled) return; optB.classList.remove('sel')
      story.innerHTML = '<span class="toast">' + (action === 'save' ? L.save : L.load) + '</span>'
      await sleep(1150); if (cancelled) return
      story.style.opacity = '0'; await sleep(340)
    }

    async function loop() {
      render(nodes[0]); await sleep(80); if (cancelled) return
      lh = parseFloat(getComputedStyle(story).lineHeight) || (story.offsetHeight / nodes[0].lines.length)
      visible = Math.max(1, Math.round(story.parentElement.clientHeight / lh))
      step = visible * lh
      while (!cancelled) {
        await playNode(nodes[0]); if (cancelled) return
        await playNode(nodes[1]); if (cancelled) return
        await menu('save'); if (cancelled) return
        await playNode(nodes[2]); if (cancelled) return
        await menu('load'); if (cancelled) return
        await playNode(nodes[3]); if (cancelled) return
      }
    }

    if (reduce) render(nodes[0]); else loop()
    return () => { cancelled = true }
  }, [locale])

  return (
    <div className="stage">
      <div>
        <div className="device" role="img" aria-label="egoo">
          <span className="screw tl" /><span className="screw tr" />
          <span className="screw bl" /><span className="screw br" />
          <img className="device-logo" src="/egoo/logo-white.svg" alt="" aria-hidden="true" />
          <div className="screen">
            <div className="statbar">
              <span>1</span><span className="bars">▮▮▮ 0 ▮▮▮</span><span>1</span>
            </div>
            <div className="viewport">
              <div className="story" id="story" />
              <span className="caret" id="caret">▾</span>
            </div>
            <div className="opts">
              <span id="optA">{data.nodes[0].a}</span><span id="optB">{data.nodes[0].b}</span>
            </div>
          </div>
          <div className="padwrap" aria-hidden="true">
            <span className="arrow u" id="ar-u">▲</span>
            <span className="arrow d" id="ar-d">▼</span>
            <span className="arrow l" id="ar-l">◀</span>
            <span className="arrow r" id="ar-r">▶</span>
            <span className="stick" id="stick" />
          </div>
        </div>
      </div>
    </div>
  )
}
