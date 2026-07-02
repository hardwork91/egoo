// Catálogos de traducción (react-intl). Inglés por defecto.
// Regla: NINGÚN string visible vive en los componentes; todo pasa por aquí.

export const messages = {
  en: {
    'lang.switch': 'Change language',

    'nav.what': "what's this",
    'nav.how': 'how it works',
    'nav.join': 'join',

    'hero.eyebrow': 'Write · Share · Play',
    'hero.h1.a': 'One little gadget.',
    'hero.h1.b': 'Any story.',
    'hero.h1.c': 'No distractions.',
    'hero.lede':
      'Egoo is a tiny pocket gadget for interactive fiction — branching stories with conditions, dice and chance, combat, items and more — and <strong>the little crew that writes them</strong>. Grab one someone made (fantasy, noir, sci-fi, gloriously weird stuff), or write your own in our web studio (free) and share it. And you play it in peace, no distractions — in line, on the bus, waiting for coffee, wherever.',
    'cta.join': 'Join the waitlist',
    'cta.demo': 'Play the demo',

    'statement.eyebrow': 'The idea',
    'statement.slogan.a': 'Old-school to hold.',
    'statement.slogan.b': 'Modern to the core.',
    'statement.sub':
      'Looks like it fell out of a drawer from 1994. Plays whatever the community can dream up.',

    'what.eyebrow': 'A quiet little thing',
    'what.h2': 'Just you and the story.',
    'what.sub':
      'A flashlight under the covers. A tiny screen on a long drive. That happy way a story used to swallow you whole. Egoo is built for exactly that: a small, humble object that asks nothing of you but your attention, and hands the whole world over to the words. It stays plain on purpose, so the story can be anything.',

    'trio.small.lab': 'Small',
    'trio.small.h': 'Fits in your palm',
    'trio.small.p':
      'A quiet object you carry like a paperback. It sits still and waits, the way good things do.',
    'trio.offline.lab': 'No signal',
    'trio.offline.h': 'Zero notifications',
    'trio.offline.p':
      "100% offline: no wifi, no pings, nothing to pull you out of the story. It only connects to your PC to load new stories.",
    'trio.blank.lab': 'Blank on purpose',
    'trio.blank.h': 'The story is the whole show',
    'trio.blank.p':
      'The device stays neutral so the world lives in the words: crawl a dungeon tonight, explore a dead station at the edge of the system the next.',
    'trio.yours.lab': 'Yours',
    'trio.yours.h': 'Made of your own worlds',
    'trio.yours.p':
      'Write your own stories, or get lost in ones the community dreamed up. Load them on and go.',

    'how.eyebrow': 'How it works',
    'how.h2': 'From idea to your pocket, in three steps.',
    'how.s1.h': 'Pick or write',
    'how.s1.p':
      'Browse the community’s stories or write your own in the web studio — free, nothing to install.',
    'how.s2.h': 'Load it over USB',
    'how.s2.p':
      'Plug the gadget into your computer and drop the stories in. No apps, no accounts, no cloud.',
    'how.s3.h': 'Play wherever',
    'how.s3.p': 'Turn it on and get lost. Save your progress and pick it back up whenever.',

    'specs.eyebrow': 'The spec sheet',
    'specs.h2': 'What you get.',
    'specs.size.k': 'Size',
    'specs.size.v': '~55 × 35 × 20 mm · pocket-sized',
    'specs.screen.k': 'Screen',
    'specs.screen.v': 'monochrome OLED, 128 × 64 pixels',
    'specs.control.k': 'Control',
    'specs.control.v': '5-way joystick',
    'specs.stories.k': 'Stories',
    'specs.stories.v': 'loaded over USB — no apps or accounts',
    'specs.conn.k': 'Connectivity',
    'specs.conn.v': '100% offline · USB only to load stories',
    'specs.body.k': 'Body',
    'specs.body.v': '3D-printed and hand-assembled',
    'specs.battery.k': 'Battery',
    'specs.battery.v': 'rechargeable over USB',
    'specs.shipping.k': 'Shipping',
    'specs.shipping.v': 'made to order, in small batches',

    'studio.eyebrow': 'Write your own',
    'studio.h2': 'A studio for weaving stories.',
    'studio.sub':
      "Drag scenes, link them, and give them choices, dice and conditions. Test them in the browser and, when you're happy, load them onto the gadget or share them with the community. All free, nothing to install.",
    'studio.mock.scene': 'Scene · The Silent Ship',
    'studio.mock.text': 'A merchant ship adrift. No answer to your hail…',
    'studio.mock.optA': '‹ Ignore',
    'studio.mock.optB': 'Board ›',
    'studio.mock.pillB': '→ Board',
    'studio.mock.pillA': '→ Ignore',
    'studio.cta': 'Open the studio',

    'examples.eyebrow': 'A taste',
    'examples.h2': 'Example stories.',
    'ex.1.g': 'Sci-fi',
    'ex.1.t': 'The Silent Ship',
    'ex.1.h': "A merchant adrift and a choice you shouldn't make alone.",
    'ex.2.g': 'Horror',
    'ex.2.t': 'The Calling Light',
    'ex.2.h': 'Someone lights it every night. And you live alone.',
    'ex.3.g': 'Fantasy',
    'ex.3.t': 'Cards Against the King',
    'ex.3.h': 'A card game for your freedom… and maybe your soul.',
    'ex.4.g': 'Noir',
    'ex.4.t': 'Last Stop',
    'ex.4.h': "A suitcase, a ticket, and a name that isn't yours.",

    'layers.eyebrow': 'Two ways in',
    'layers.h2': 'Free on the web. Alive in your hand.',
    'layers.web.tag': 'The studio + community',
    'layers.web.h': 'Write & share — free',
    'layers.web.p':
      "Write branching stories in our studio and play them right in the browser. Share them with a growing community of creators — and browse, play, and get lost in everyone else's. No cost, ever.",
    'layers.web.price': '$0 · in your browser',
    'layers.dev.tag': 'The gadget',
    'layers.dev.h': 'The good part',
    'layers.dev.p':
      'We build them by hand, in tiny batches, and mail them out. The same stories — pocket-sized, always ready, and impossible to get distracted from.',
    'layers.dev.price': 'about $50 · built by hand',
    'layers.community':
      'The community lives on Discord — trade stories, vote on your favorites, and find your next read.',
    'cta.discord': 'Join the Discord',

    'maker.eyebrow': "Who's behind it",
    'maker.h2': 'One person, made by hand.',
    'maker.sub':
      "There's no factory or company behind this — it's one person assembling each Egoo by hand, in small batches, and sharing it all in the open: the wins, the flops, and the boards that come out crooked. If you like watching something get cooked from scratch, hop in: the community decides which stories make it in and where the gadget goes next.",

    'faq.eyebrow': 'Quick questions',
    'faq.h2': "Questions you're probably asking.",
    'faq.q1': 'Do I need wifi or my phone?',
    'faq.a1':
      'No. The gadget is self-contained: turn it on and play. USB is only for loading stories from your computer.',
    'faq.q2': 'How do I put stories on it?',
    'faq.a2':
      'From the web studio you send them over USB, or download the community’s. No apps, accounts or cloud.',
    'faq.q3': 'Can I write my own?',
    'faq.a3':
      'Absolutely. The web studio is free: write, test in the browser, load onto the gadget and, if you want, share with the community.',
    'faq.q4': 'How long does the battery last?',
    'faq.a4':
      'Built for several sessions between charges; the final number is coming soon. It recharges over USB.',
    'faq.q5': 'Where do you ship?',
    'faq.a5':
      'At first, in small batches and made to order. Available destinations will be announced at launch.',
    'faq.q6': 'Is “Egoo” the final name?',
    'faq.a6': "It's a working name — it may change before launch.",

    'wl.eyebrow': 'Want one?',
    'wl.h2': 'Grab a spot in the first batch.',
    'wl.sub':
      "We build these in tiny, hand-made runs. Drop your email and we'll poke you once — when they're ready, and before they're gone.",
    'wl.placeholder': 'you@email.com',
    'wl.aria': 'Email address',
    'wl.btn': 'Save me one',
    'wl.note': "No spam, promise. Just one email when it's ready.",
    'wl.err': 'Hmm, that email looks off — mind checking it?',
    'wl.done': "You're in! <b>We'll poke you once.</b>",

    'footer.slogan.a': 'Play. Explore.',
    'footer.slogan.b': 'Discover.',
    'footer.note': 'a little story gadget · built by hand',
    'footer.discord': 'Discord',
    'footer.waitlist': 'Waitlist',
    'footer.contact': 'Say hi',
  },

  es: {
    'lang.switch': 'Cambiar idioma',

    'nav.what': 'qué es esto',
    'nav.how': 'cómo va',
    'nav.join': 'únete',

    'hero.eyebrow': 'Escribe · Comparte · Juega',
    'hero.h1.a': 'Un cacharrito.',
    'hero.h1.b': 'Cualquier historia.',
    'hero.h1.c': 'Sin distracciones.',
    'hero.lede':
      'Egoo es un cacharrito de bolsillo para ficción interactiva — historias que se ramifican según lo que eliges, con condiciones, dados y azar, combates, ítems y más — y <strong>la pequeña banda que las escribe</strong>. Agarra una que hizo alguien (fantasía, noir, ciencia ficción, cosas maravillosamente raras), o escribe la tuya en nuestro estudio web (gratis) y compártela. Y la juegas tranquilo, sin distracciones — en la fila, en el bus, esperando el café, donde caiga.',
    'cta.join': 'Únete a la lista',
    'cta.demo': 'Juega el demo',

    'statement.eyebrow': 'La idea',
    'statement.slogan.a': 'Vieja escuela por fuera.',
    'statement.slogan.b': 'Moderno por dentro.',
    'statement.sub':
      'Parece salido de un cajón de 1994. Juega lo que sea que la comunidad imagine.',

    'what.eyebrow': 'Una cosita tranquila',
    'what.h2': 'Solo tú y la historia.',
    'what.sub':
      'Una linterna bajo las sábanas. Una pantallita en un viaje largo. Esa forma feliz en que una historia te tragaba entero. Egoo es justo para eso: un objeto pequeño y humilde que no te pide nada más que atención, y le entrega el mundo entero a las palabras. Es sobrio a propósito, para que la historia pueda ser cualquier cosa.',

    'trio.small.lab': 'Pequeño',
    'trio.small.h': 'Cabe en la mano',
    'trio.small.p':
      'Un objeto tranquilo que llevas como un libro de bolsillo. Se queda quieto y espera, como las cosas buenas.',
    'trio.offline.lab': 'Sin señal',
    'trio.offline.h': 'Cero notificaciones',
    'trio.offline.p':
      '100% offline: ni wifi, ni pings, ni nada que te saque de la historia. Solo se conecta al PC para cargarle historias nuevas.',
    'trio.blank.lab': 'En blanco a propósito',
    'trio.blank.h': 'La historia es todo el show',
    'trio.blank.p':
      'El aparato se mantiene neutro para que el mundo viva en las palabras: bajar a una mazmorra esta noche, explorar una estación muerta en el borde del sistema la siguiente.',
    'trio.yours.lab': 'Tuyo',
    'trio.yours.h': 'Hecho de tus mundos',
    'trio.yours.p':
      'Escribe tus propias historias, o piérdete en las que soñó la comunidad. Cárgalas y listo.',

    'how.eyebrow': 'Cómo va',
    'how.h2': 'De la idea a tu bolsillo, en tres pasos.',
    'how.s1.h': 'Elige o escribe',
    'how.s1.p':
      'Explora las historias de la comunidad o escribe la tuya en el estudio web — gratis, sin instalar nada.',
    'how.s2.h': 'Cárgala por USB',
    'how.s2.p':
      'Conecta el cacharro al ordenador y arrástrale las historias. Sin apps, sin cuentas, sin nube.',
    'how.s3.h': 'Juega donde caiga',
    'how.s3.p': 'Enciéndelo y piérdete. Guarda tu partida y retómala cuando quieras.',

    'specs.eyebrow': 'La ficha técnica',
    'specs.h2': 'Qué recibes.',
    'specs.size.k': 'Tamaño',
    'specs.size.v': '~55 × 35 × 20 mm · cabe en el bolsillo',
    'specs.screen.k': 'Pantalla',
    'specs.screen.v': 'OLED monocroma, 128 × 64 píxeles',
    'specs.control.k': 'Control',
    'specs.control.v': 'joystick de 5 direcciones',
    'specs.stories.k': 'Historias',
    'specs.stories.v': 'se cargan por USB — sin apps ni cuentas',
    'specs.conn.k': 'Conexión',
    'specs.conn.v': '100% offline · solo USB para cargar historias',
    'specs.body.k': 'Cuerpo',
    'specs.body.v': 'impreso en 3D y ensamblado a mano',
    'specs.battery.k': 'Batería',
    'specs.battery.v': 'recargable por USB',
    'specs.shipping.k': 'Envío',
    'specs.shipping.v': 'hecho a pedido, en tandas pequeñas',

    'studio.eyebrow': 'Escríbelas tú',
    'studio.h2': 'Un estudio para tejer historias.',
    'studio.sub':
      'Arrastra escenas, enlázalas y ponles decisiones, dados y condiciones. Pruébalas en el navegador y, cuando te gusten, cárgalas al cacharro o compártelas con la comunidad. Todo gratis, sin instalar nada.',
    'studio.mock.scene': 'Escena · La nave muda',
    'studio.mock.text': 'Un mercante a la deriva. Nadie responde a tu llamada…',
    'studio.mock.optA': '‹ Ignorar',
    'studio.mock.optB': 'Abordar ›',
    'studio.mock.pillB': '→ Abordar',
    'studio.mock.pillA': '→ Ignorar',
    'studio.cta': 'Abre el estudio',

    'examples.eyebrow': 'Para abrir boca',
    'examples.h2': 'Historias de ejemplo.',
    'ex.1.g': 'Ciencia ficción',
    'ex.1.t': 'La nave muda',
    'ex.1.h': 'Un mercante a la deriva y una decisión que no deberías tomar solo.',
    'ex.2.g': 'Terror',
    'ex.2.t': 'El faro que llama',
    'ex.2.h': 'Alguien enciende la luz cada noche. Y tú vives solo.',
    'ex.3.g': 'Fantasía',
    'ex.3.t': 'Naipes contra el rey',
    'ex.3.h': 'Una partida de cartas por tu libertad… y quizá por tu alma.',
    'ex.4.g': 'Noir',
    'ex.4.t': 'Última parada',
    'ex.4.h': 'Una maleta, un billete y un nombre que no es el tuyo.',

    'layers.eyebrow': 'Dos formas de entrar',
    'layers.h2': 'Gratis en la web. Vivo en tu mano.',
    'layers.web.tag': 'El estudio + la comunidad',
    'layers.web.h': 'Escribe y comparte — gratis',
    'layers.web.p':
      'Escribe historias ramificadas en nuestro estudio y juégalas ahí mismo en el navegador. Compártelas con una comunidad de creadores que crece — y explora, juega y piérdete en las de los demás. Sin costo, nunca.',
    'layers.web.price': '$0 · en tu navegador',
    'layers.dev.tag': 'El cacharro',
    'layers.dev.h': 'La mejor parte',
    'layers.dev.p':
      'Los hacemos a mano, en tandas pequeñas, y te los mandamos. Las mismas historias — de bolsillo, siempre listas, e imposibles de dejar por una distracción.',
    'layers.dev.price': 'unos $50 · hechos a mano',
    'layers.community':
      'La comunidad vive en Discord — intercambia historias, vota tus favoritas y encuentra tu próxima lectura.',
    'cta.discord': 'Únete al Discord',

    'maker.eyebrow': 'Quién anda detrás',
    'maker.h2': 'Lo hace una persona, a mano.',
    'maker.sub':
      'No hay fábrica ni empresa detrás — soy una persona montando cada Egoo a mano, en tandas pequeñas, y contándolo en abierto: los aciertos, los fallos y las placas que salen torcidas. Si te gusta ver cómo se cocina algo desde cero, súbete: la comunidad decide qué historias entran y hacia dónde va el cacharro.',

    'faq.eyebrow': 'Dudas rápidas',
    'faq.h2': 'Preguntas que te estarás haciendo.',
    'faq.q1': '¿Necesito wifi o el teléfono?',
    'faq.a1':
      'No. El cacharro es autónomo: lo enciendes y juegas. El USB solo sirve para cargarle historias desde el ordenador.',
    'faq.q2': '¿Cómo le pongo historias?',
    'faq.a2':
      'Desde el estudio web las envías por USB, o descargas las de la comunidad. Nada de apps, cuentas ni nube.',
    'faq.q3': '¿Puedo escribir las mías?',
    'faq.a3':
      'Claro. El estudio web es gratis: escribes, pruebas en el navegador, cargas al cacharro y, si quieres, compartes con la comunidad.',
    'faq.q4': '¿Cuánto dura la batería?',
    'faq.a4':
      'Pensado para varias sesiones entre cargas; el dato final lo confirmamos pronto. Se recarga por USB.',
    'faq.q5': '¿A dónde envían?',
    'faq.a5':
      'Al principio, en tandas pequeñas y a pedido. Los destinos disponibles se anuncian con el lanzamiento.',
    'faq.q6': '¿«Egoo» es el nombre final?',
    'faq.a6': 'Es un nombre de trabajo — puede cambiar antes del lanzamiento.',

    'wl.eyebrow': '¿Quieres uno?',
    'wl.h2': 'Aparta tu lugar en la primera tanda.',
    'wl.sub':
      'Los hacemos en tandas pequeñas y a mano. Deja tu correo y te avisamos una sola vez — cuando estén listos, y antes de que se acaben.',
    'wl.placeholder': 'tu@correo.com',
    'wl.aria': 'Correo electrónico',
    'wl.btn': 'Aparta el mío',
    'wl.note': 'Nada de spam, prometido. Solo un correo cuando esté listo.',
    'wl.err': 'Mmm, ese correo se ve raro — ¿lo revisas?',
    'wl.done': '¡Estás dentro! <b>Te avisamos una vez.</b>',

    'footer.slogan.a': 'Juega. Explora.',
    'footer.slogan.b': 'Descubre.',
    'footer.note': 'un cacharrito de historias · hecho a mano',
    'footer.discord': 'Discord',
    'footer.waitlist': 'Lista de espera',
    'footer.contact': 'Escríbenos',
  },
}
