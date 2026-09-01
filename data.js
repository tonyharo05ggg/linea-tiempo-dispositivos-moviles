const EVENTS = [
  {
    "date": "1950-01-01",
    "display": "1950",
    "title": "La radio móvil se consolida",
    "category": "Redes",
    "icon": "📻",
    "desc": "Los sistemas de radiotelefonía móvil usados en vehículos comienzan a extenderse en servicios públicos, transporte y empresas.",
    "importance": "Prepararon la infraestructura y el concepto de comunicación inalámbrica móvil que después evolucionaría hacia la telefonía celular."
  },
  {
    "date": "1956-04-25",
    "display": "25 abr 1956",
    "title": "Sistema MTA en Suecia",
    "category": "Redes",
    "icon": "🚘",
    "desc": "Ericsson y la administración telefónica sueca ponen en servicio uno de los primeros sistemas automáticos de telefonía móvil para automóviles.",
    "importance": "Demostró que una llamada móvil podía conectarse automáticamente con la red telefónica pública."
  },
  {
    "date": "1959-01-01",
    "display": "1959",
    "title": "Bell Labs impulsa el concepto celular",
    "category": "Redes",
    "icon": "📡",
    "desc": "La investigación en Bell Labs avanza en el uso de pequeñas áreas de cobertura o celdas para reutilizar frecuencias.",
    "importance": "El concepto celular permitió multiplicar la capacidad de las redes móviles y es la base de 1G, 2G, 3G, 4G y 5G."
  },
  {
    "date": "1964-01-01",
    "display": "1964",
    "title": "Improved Mobile Telephone Service",
    "category": "Redes",
    "icon": "☎️",
    "desc": "AT&T introduce mejoras al servicio de telefonía móvil para vehículos en Estados Unidos, conocido como IMTS.",
    "importance": "Automatizó más funciones y mejoró la experiencia previa a las redes celulares comerciales."
  },
  {
    "date": "1969-01-01",
    "display": "1969",
    "title": "Avances en conmutación celular",
    "category": "Redes",
    "icon": "🗼",
    "desc": "La industria perfecciona técnicas de handoff para transferir una llamada entre áreas de cobertura mientras el usuario se mueve.",
    "importance": "El handoff hizo posible mantener llamadas en movimiento, una capacidad esencial de toda red celular moderna."
  },
  {
    "date": "1971-12-01",
    "display": "dic 1971",
    "title": "Propuesta de red celular a la FCC",
    "category": "Redes",
    "icon": "📶",
    "desc": "AT&T presenta propuestas regulatorias para desplegar sistemas celulares comerciales en Estados Unidos.",
    "importance": "Ayudó a transformar décadas de investigación en planes de redes celulares para uso público."
  },
  {
    "date": "1973-04-03",
    "display": "3 abr 1973",
    "title": "Primera llamada con celular portátil",
    "category": "Dispositivos",
    "icon": "📞",
    "desc": "Martin Cooper, de Motorola, realiza en Nueva York una demostración pública de un teléfono celular portátil DynaTAC.",
    "importance": "Probó que la telefonía celular podía salir del automóvil y convertirse en un dispositivo verdaderamente personal."
  },
  {
    "date": "1979-12-01",
    "display": "dic 1979",
    "title": "Primera red celular comercial 1G",
    "category": "Redes",
    "icon": "1️⃣",
    "desc": "Nippon Telegraph and Telephone despliega en Japón una de las primeras redes celulares automáticas comerciales de primera generación.",
    "importance": "Marca el inicio de la telefonía celular comercial a gran escala."
  },
  {
    "date": "1981-09-01",
    "display": "sep 1981",
    "title": "NMT entra en servicio",
    "category": "Redes",
    "icon": "🌍",
    "desc": "El sistema Nordic Mobile Telephone comienza operaciones en países nórdicos.",
    "importance": "Fue una de las primeras redes 1G con roaming internacional, anticipando la movilidad entre países."
  },
  {
    "date": "1983-09-21",
    "display": "21 sep 1983",
    "title": "Motorola DynaTAC 8000X aprobado",
    "category": "Dispositivos",
    "icon": "🧱",
    "desc": "La FCC aprueba el Motorola DynaTAC 8000X para uso comercial.",
    "importance": "Se convirtió en el referente del primer teléfono celular portátil comercial."
  },
  {
    "date": "1983-10-13",
    "display": "13 oct 1983",
    "title": "Primera red celular comercial de EE. UU.",
    "category": "Redes",
    "icon": "🇺🇸",
    "desc": "Ameritech inicia servicio celular comercial AMPS en Chicago.",
    "importance": "Aceleró la adopción de la telefonía celular en Norteamérica."
  },
  {
    "date": "1985-01-01",
    "display": "1985",
    "title": "Reino Unido inaugura redes celulares",
    "category": "Redes",
    "icon": "📡",
    "desc": "Vodafone y Cellnet comienzan operaciones móviles celulares en Reino Unido.",
    "importance": "La competencia entre operadores aceleró la expansión del mercado europeo."
  },
  {
    "date": "1987-09-07",
    "display": "7 sep 1987",
    "title": "Acuerdo GSM",
    "category": "Redes",
    "icon": "🤝",
    "desc": "Operadores europeos firman el Memorandum of Understanding para desarrollar y desplegar GSM.",
    "importance": "GSM creó una plataforma digital común que facilitaría roaming, SMS y equipos compatibles entre países."
  },
  {
    "date": "1989-04-25",
    "display": "25 abr 1989",
    "title": "Motorola MicroTAC",
    "category": "Dispositivos",
    "icon": "📟",
    "desc": "Motorola presenta el MicroTAC, un teléfono considerablemente más compacto con diseño abatible.",
    "importance": "Impulsó la miniaturización y acercó el celular al tamaño de bolsillo."
  },
  {
    "date": "1991-07-01",
    "display": "1 jul 1991",
    "title": "Primera llamada GSM comercial",
    "category": "Redes",
    "icon": "2️⃣",
    "desc": "Radiolinja realiza en Finlandia una de las primeras llamadas comerciales sobre una red GSM.",
    "importance": "Inauguró la era digital 2G con mejor capacidad, seguridad y servicios de datos."
  },
  {
    "date": "1992-12-03",
    "display": "3 dic 1992",
    "title": "Primer SMS",
    "category": "Mensajería",
    "icon": "💬",
    "desc": "Neil Papworth envía el mensaje «Merry Christmas» a través de la red de Vodafone.",
    "importance": "El SMS transformó la comunicación escrita y creó una cultura global de mensajería móvil."
  },
  {
    "date": "1994-08-16",
    "display": "16 ago 1994",
    "title": "IBM Simon sale a la venta",
    "category": "Dispositivos",
    "icon": "📲",
    "desc": "BellSouth comercializa IBM Simon Personal Communicator en Estados Unidos.",
    "importance": "Llevó al mercado una combinación temprana de telefonía, PDA y pantalla táctil."
  },
  {
    "date": "1996-01-03",
    "display": "3 ene 1996",
    "title": "Motorola StarTAC",
    "category": "Dispositivos",
    "icon": "🤏",
    "desc": "Motorola presenta StarTAC, uno de los primeros teléfonos tipo concha ampliamente populares.",
    "importance": "Hizo del celular un producto más pequeño, ligero y asociado al diseño personal."
  },
  {
    "date": "1996-08-15",
    "display": "15 ago 1996",
    "title": "Nokia 9000 Communicator",
    "category": "Dispositivos",
    "icon": "⌨️",
    "desc": "Nokia lanza el 9000 Communicator con teléfono, correo, fax, navegador y teclado físico.",
    "importance": "Anticipó el concepto de productividad móvil que más tarde dominarían los smartphones."
  },
  {
    "date": "1997-01-01",
    "display": "1997",
    "title": "Nokia 6110 y Snake",
    "category": "Software",
    "icon": "🐍",
    "desc": "Nokia populariza Snake en teléfonos móviles, convirtiendo el juego integrado en una experiencia masiva.",
    "importance": "Mostró que el móvil podía ser también una plataforma de entretenimiento."
  },
  {
    "date": "1998-01-01",
    "display": "1998",
    "title": "Symbian toma forma",
    "category": "Software",
    "icon": "⚙️",
    "desc": "Psion, Ericsson, Motorola y Nokia impulsan Symbian como plataforma para dispositivos móviles inteligentes.",
    "importance": "Fue uno de los sistemas operativos dominantes antes de Android e iOS."
  },
  {
    "date": "1999-02-22",
    "display": "22 feb 1999",
    "title": "Nokia 7110 y WAP",
    "category": "Internet",
    "icon": "🌐",
    "desc": "Nokia anuncia el 7110, conocido por integrar acceso a servicios de Internet mediante WAP.",
    "importance": "Acercó la navegación y los servicios web a teléfonos de consumo masivo."
  },
  {
    "date": "1999-09-01",
    "display": "sep 1999",
    "title": "BlackBerry 850",
    "category": "Dispositivos",
    "icon": "✉️",
    "desc": "Research In Motion lanza BlackBerry 850, orientado al correo electrónico móvil.",
    "importance": "Popularizó la comunicación empresarial permanente y el correo push."
  },
  {
    "date": "2000-09-01",
    "display": "sep 2000",
    "title": "Sharp J-SH04 con cámara",
    "category": "Cámara",
    "icon": "📷",
    "desc": "Sharp introduce en Japón uno de los primeros teléfonos comerciales con cámara integrada.",
    "importance": "Inició la convergencia entre teléfono y cámara, cambiando para siempre la fotografía cotidiana."
  },
  {
    "date": "2000-11-01",
    "display": "nov 2000",
    "title": "Nokia 3310",
    "category": "Dispositivos",
    "icon": "🔋",
    "desc": "El Nokia 3310 se consolida como un teléfono popular por su resistencia, batería y facilidad de uso.",
    "importance": "Representa la masificación global del teléfono móvil de funciones."
  },
  {
    "date": "2001-10-01",
    "display": "oct 2001",
    "title": "Primera red 3G comercial",
    "category": "Redes",
    "icon": "3️⃣",
    "desc": "NTT DoCoMo lanza FOMA en Japón, una de las primeras redes móviles 3G comerciales.",
    "importance": "3G hizo viables servicios de datos mucho más rápidos, videollamadas y una Internet móvil más rica."
  },
  {
    "date": "2002-03-04",
    "display": "4 mar 2002",
    "title": "BlackBerry 5810",
    "category": "Dispositivos",
    "icon": "⌨️",
    "desc": "RIM presenta un BlackBerry que integra funciones de teléfono con correo electrónico móvil.",
    "importance": "Consolidó el smartphone empresarial y la comunicación móvil permanente."
  },
  {
    "date": "2002-06-01",
    "display": "jun 2002",
    "title": "Nokia 7650",
    "category": "Cámara",
    "icon": "📸",
    "desc": "Nokia comercializa el 7650, uno de sus primeros teléfonos con cámara integrada y Symbian.",
    "importance": "Ayudó a unir cámara, aplicaciones y conectividad en un smartphone de consumo."
  },
  {
    "date": "2003-10-01",
    "display": "oct 2003",
    "title": "Nokia N-Gage",
    "category": "Dispositivos",
    "icon": "🎮",
    "desc": "Nokia lanza N-Gage, combinando teléfono móvil y consola portátil.",
    "importance": "Fue un experimento temprano de convergencia entre videojuegos y telefonía."
  },
  {
    "date": "2004-02-01",
    "display": "feb 2004",
    "title": "Motorola RAZR V3",
    "category": "Dispositivos",
    "icon": "✨",
    "desc": "Motorola presenta el RAZR V3, conocido por su cuerpo metálico ultradelgado.",
    "importance": "Convirtió el diseño industrial del teléfono en un factor de compra tan importante como sus funciones."
  },
  {
    "date": "2005-06-01",
    "display": "jun 2005",
    "title": "Nokia N90",
    "category": "Cámara",
    "icon": "🎥",
    "desc": "Nokia impulsa su serie N con dispositivos centrados en multimedia, cámara y conectividad avanzada.",
    "importance": "Los teléfonos empiezan a competir con cámaras compactas y reproductores multimedia."
  },
  {
    "date": "2005-07-11",
    "display": "11 jul 2005",
    "title": "Google compra Android",
    "category": "Software",
    "icon": "🤖",
    "desc": "Google adquiere Android Inc., empresa dedicada a software para dispositivos móviles.",
    "importance": "La operación dio origen al ecosistema Android que dominaría gran parte del mercado mundial."
  },
  {
    "date": "2006-05-16",
    "display": "16 may 2006",
    "title": "Nokia N95 anunciado",
    "category": "Dispositivos",
    "icon": "🛰️",
    "desc": "Nokia presenta un smartphone con GPS, cámara avanzada, Wi-Fi y conectividad 3G.",
    "importance": "Mostró cuántas funciones especializadas podían concentrarse en un solo teléfono."
  },
  {
    "date": "2007-01-09",
    "display": "9 ene 2007",
    "title": "Apple presenta el iPhone",
    "category": "Dispositivos",
    "icon": "🍎",
    "desc": "Steve Jobs presenta el iPhone con pantalla multitáctil y una interfaz centrada en el uso de los dedos.",
    "importance": "Redefinió la interacción con el smartphone y aceleró el abandono de teclados físicos."
  },
  {
    "date": "2007-06-29",
    "display": "29 jun 2007",
    "title": "Primer iPhone sale a la venta",
    "category": "Dispositivos",
    "icon": "📱",
    "desc": "Apple inicia las ventas del iPhone original en Estados Unidos.",
    "importance": "Marcó el inicio comercial de una nueva generación de smartphones centrados en pantalla táctil e Internet."
  },
  {
    "date": "2007-11-05",
    "display": "5 nov 2007",
    "title": "Open Handset Alliance y Android",
    "category": "Software",
    "icon": "🤖",
    "desc": "Google y múltiples compañías anuncian la Open Handset Alliance y Android como plataforma móvil abierta.",
    "importance": "Creó una alternativa abierta y escalable que permitió a numerosos fabricantes competir en smartphones."
  },
  {
    "date": "2008-07-10",
    "display": "10 jul 2008",
    "title": "App Store",
    "category": "Apps",
    "icon": "🛍️",
    "desc": "Apple abre la App Store para distribuir aplicaciones de terceros en iPhone y iPod touch.",
    "importance": "Transformó el teléfono en una plataforma de software y creó una nueva economía de aplicaciones."
  },
  {
    "date": "2008-09-23",
    "display": "23 sep 2008",
    "title": "HTC Dream / T-Mobile G1",
    "category": "Dispositivos",
    "icon": "🤖",
    "desc": "Se presenta el primer teléfono comercial basado en Android.",
    "importance": "Inició la expansión del ecosistema Android en hardware de múltiples fabricantes."
  },
  {
    "date": "2008-10-22",
    "display": "22 oct 2008",
    "title": "Primer Android a la venta",
    "category": "Software",
    "icon": "📲",
    "desc": "El T-Mobile G1 comienza a venderse en Estados Unidos con Android.",
    "importance": "Android pasa de proyecto de software a plataforma comercial para consumidores."
  },
  {
    "date": "2009-02-01",
    "display": "feb 2009",
    "title": "Palm Pre y webOS",
    "category": "Software",
    "icon": "🃏",
    "desc": "Palm presenta Pre y webOS con multitarea basada en tarjetas y gestos.",
    "importance": "Introdujo ideas de interfaz que después aparecerían en otros sistemas móviles."
  },
  {
    "date": "2009-06-06",
    "display": "6 jun 2009",
    "title": "Palm Pre sale a la venta",
    "category": "Dispositivos",
    "icon": "🖐️",
    "desc": "Palm comercializa Pre en Estados Unidos.",
    "importance": "Demostró nuevas formas de multitarea y sincronización en la nube."
  },
  {
    "date": "2009-12-14",
    "display": "14 dic 2009",
    "title": "Primeras redes LTE comerciales",
    "category": "Redes",
    "icon": "4️⃣",
    "desc": "TeliaSonera inaugura servicios LTE comerciales en Estocolmo y Oslo.",
    "importance": "LTE se convirtió en la base de la era 4G y del video móvil de alta velocidad."
  },
  {
    "date": "2010-01-05",
    "display": "5 ene 2010",
    "title": "Google Nexus One",
    "category": "Dispositivos",
    "icon": "🧭",
    "desc": "Google presenta Nexus One como teléfono de referencia para Android.",
    "importance": "La familia Nexus ayudó a mostrar la experiencia Android diseñada directamente por Google."
  },
  {
    "date": "2010-06-07",
    "display": "7 jun 2010",
    "title": "iPhone 4",
    "category": "Dispositivos",
    "icon": "📐",
    "desc": "Apple presenta iPhone 4 con pantalla Retina y cámara frontal.",
    "importance": "Elevó el estándar de densidad de pantalla y popularizó las videollamadas móviles."
  },
  {
    "date": "2010-10-21",
    "display": "21 oct 2010",
    "title": "Windows Phone 7",
    "category": "Software",
    "icon": "🪟",
    "desc": "Microsoft lanza comercialmente Windows Phone 7 con una interfaz basada en mosaicos.",
    "importance": "Fue uno de los principales intentos de crear un tercer ecosistema frente a iOS y Android."
  },
  {
    "date": "2011-02-13",
    "display": "13 feb 2011",
    "title": "Samsung Galaxy S II",
    "category": "Dispositivos",
    "icon": "🌌",
    "desc": "Samsung anuncia Galaxy S II, uno de los Android más influyentes de su generación.",
    "importance": "Ayudó a consolidar a Samsung como competidor global en smartphones de gama alta."
  },
  {
    "date": "2011-10-04",
    "display": "4 oct 2011",
    "title": "iPhone 4S y Siri",
    "category": "IA",
    "icon": "🗣️",
    "desc": "Apple presenta iPhone 4S con Siri como asistente de voz integrado.",
    "importance": "Popularizó la interacción conversacional con asistentes digitales en el teléfono."
  },
  {
    "date": "2011-11-17",
    "display": "17 nov 2011",
    "title": "Galaxy Nexus y Android 4.0",
    "category": "Software",
    "icon": "🍦",
    "desc": "El Galaxy Nexus llega con Android 4.0 Ice Cream Sandwich.",
    "importance": "Android unificó mejor sus interfaces para teléfonos y otros dispositivos táctiles."
  },
  {
    "date": "2012-05-03",
    "display": "3 may 2012",
    "title": "Samsung Galaxy S III",
    "category": "Dispositivos",
    "icon": "🌠",
    "desc": "Samsung presenta Galaxy S III con una fuerte integración de software y hardware Android.",
    "importance": "Contribuyó a convertir la familia Galaxy S en una de las líneas Android más reconocidas."
  },
  {
    "date": "2012-09-12",
    "display": "12 sep 2012",
    "title": "iPhone 5",
    "category": "Dispositivos",
    "icon": "📏",
    "desc": "Apple presenta iPhone 5 con pantalla más grande y conectividad LTE.",
    "importance": "Reflejó la transición general del mercado hacia pantallas mayores y banda ancha 4G."
  },
  {
    "date": "2013-09-10",
    "display": "10 sep 2013",
    "title": "iPhone 5s y Touch ID",
    "category": "Seguridad",
    "icon": "👆",
    "desc": "Apple presenta iPhone 5s con sensor de huella Touch ID y procesador móvil de 64 bits.",
    "importance": "La biometría se vuelve una forma cotidiana de desbloquear dispositivos y autorizar compras."
  },
  {
    "date": "2013-10-31",
    "display": "31 oct 2013",
    "title": "Google Nexus 5",
    "category": "Dispositivos",
    "icon": "5️⃣",
    "desc": "Google y LG presentan Nexus 5 junto con Android 4.4 KitKat.",
    "importance": "Mostró que un smartphone potente podía ofrecer una experiencia Android limpia a precio competitivo."
  },
  {
    "date": "2014-02-24",
    "display": "24 feb 2014",
    "title": "Samsung Galaxy S5",
    "category": "Dispositivos",
    "icon": "💧",
    "desc": "Samsung presenta Galaxy S5 con lector de huellas y resistencia al agua.",
    "importance": "Funciones antes especializadas comenzaron a convertirse en expectativas habituales de la gama alta."
  },
  {
    "date": "2014-09-09",
    "display": "9 sep 2014",
    "title": "iPhone 6 y Apple Pay",
    "category": "Pagos",
    "icon": "💳",
    "desc": "Apple presenta iPhone 6 y 6 Plus junto con su plataforma de pagos móviles Apple Pay.",
    "importance": "Aceleró el uso del teléfono como cartera digital mediante NFC y autenticación biométrica."
  },
  {
    "date": "2015-03-01",
    "display": "1 mar 2015",
    "title": "Galaxy S6 Edge",
    "category": "Dispositivos",
    "icon": "↪️",
    "desc": "Samsung presenta Galaxy S6 Edge con pantalla curva en ambos laterales.",
    "importance": "Impulsó diseños de pantalla que reducían bordes y diferenciaban visualmente al smartphone."
  },
  {
    "date": "2015-09-09",
    "display": "9 sep 2015",
    "title": "iPhone 6s y 3D Touch",
    "category": "Interfaz",
    "icon": "👉",
    "desc": "Apple presenta iPhone 6s con detección de diferentes niveles de presión en pantalla.",
    "importance": "Experimentó con una nueva dimensión de interacción táctil contextual."
  },
  {
    "date": "2016-02-21",
    "display": "21 feb 2016",
    "title": "Galaxy S7",
    "category": "Dispositivos",
    "icon": "💦",
    "desc": "Samsung presenta Galaxy S7 y S7 edge con mejoras de cámara y resistencia al agua.",
    "importance": "La fotografía, la protección y el rendimiento se convierten en áreas centrales de competencia."
  },
  {
    "date": "2016-07-06",
    "display": "6 jul 2016",
    "title": "Pokémon GO",
    "category": "Apps",
    "icon": "🧿",
    "desc": "Niantic lanza Pokémon GO utilizando GPS, cámara y realidad aumentada.",
    "importance": "Demostró a escala mundial cómo sensores móviles y ubicación podían crear experiencias de realidad aumentada."
  },
  {
    "date": "2016-10-04",
    "display": "4 oct 2016",
    "title": "Google Pixel",
    "category": "Dispositivos",
    "icon": "📷",
    "desc": "Google presenta la primera generación Pixel bajo su propia marca.",
    "importance": "Google empieza a integrar más estrechamente hardware, Android, cámara computacional y servicios de IA."
  },
  {
    "date": "2017-02-26",
    "display": "26 feb 2017",
    "title": "Nokia regresa a smartphones",
    "category": "Industria",
    "icon": "🔄",
    "desc": "HMD Global presenta una nueva generación de teléfonos Nokia basados en Android.",
    "importance": "Mostró la transformación de marcas históricas para competir en el ecosistema moderno."
  },
  {
    "date": "2017-09-12",
    "display": "12 sep 2017",
    "title": "iPhone X",
    "category": "Dispositivos",
    "icon": "🔓",
    "desc": "Apple presenta iPhone X con pantalla OLED casi sin bordes, Face ID y navegación por gestos.",
    "importance": "Aceleró la eliminación del botón frontal y popularizó el desbloqueo facial 3D."
  },
  {
    "date": "2018-02-25",
    "display": "25 feb 2018",
    "title": "Galaxy S9",
    "category": "Cámara",
    "icon": "🌙",
    "desc": "Samsung presenta Galaxy S9 con cámara de apertura variable.",
    "importance": "Reflejó la creciente importancia de la fotografía computacional y el rendimiento nocturno."
  },
  {
    "date": "2018-06-14",
    "display": "14 jun 2018",
    "title": "3GPP completa 5G Release 15",
    "category": "Redes",
    "icon": "5️⃣",
    "desc": "3GPP completa una etapa clave de Release 15, base de las primeras implementaciones 5G NR.",
    "importance": "Estableció especificaciones fundamentales para llevar 5G de pruebas a redes comerciales."
  },
  {
    "date": "2018-10-09",
    "display": "9 oct 2018",
    "title": "Pixel 3 y fotografía computacional",
    "category": "Cámara",
    "icon": "🌃",
    "desc": "Google presenta Pixel 3, reforzando técnicas de fotografía computacional como HDR y visión nocturna.",
    "importance": "Demostró que el software podía mejorar una cámara móvil tanto o más que añadir hardware."
  },
  {
    "date": "2019-02-20",
    "display": "20 feb 2019",
    "title": "Samsung Galaxy Fold",
    "category": "Plegables",
    "icon": "📖",
    "desc": "Samsung presenta Galaxy Fold, un smartphone con pantalla flexible que se abre como una pequeña tableta.",
    "importance": "Reintrodujo cambios radicales de forma física en un mercado dominado por rectángulos táctiles."
  },
  {
    "date": "2019-04-03",
    "display": "3 abr 2019",
    "title": "Primer smartphone comercial conectado a 5G",
    "category": "Redes",
    "icon": "📡",
    "desc": "Motorola destaca la conexión comercial 5G del moto z3 mediante el 5G moto mod.",
    "importance": "Marca el paso inicial de 5G desde infraestructura a dispositivos disponibles para consumidores."
  },
  {
    "date": "2019-05-01",
    "display": "may 2019",
    "title": "Despliegues 5G comerciales",
    "category": "Redes",
    "icon": "⚡",
    "desc": "Operadores de varios países comienzan a expandir servicios 5G comerciales durante 2019.",
    "importance": "Inicia una nueva generación de redes con menor latencia, mayor capacidad y más velocidad."
  },
  {
    "date": "2019-09-10",
    "display": "10 sep 2019",
    "title": "iPhone 11 Pro",
    "category": "Cámara",
    "icon": "📸",
    "desc": "Apple presenta iPhone 11 Pro con sistema de triple cámara.",
    "importance": "Los sistemas multicámara se vuelven una característica central de los smartphones de gama alta."
  },
  {
    "date": "2020-02-11",
    "display": "11 feb 2020",
    "title": "Galaxy Z Flip",
    "category": "Plegables",
    "icon": "🪞",
    "desc": "Samsung presenta Galaxy Z Flip con diseño plegable tipo concha y pantalla flexible.",
    "importance": "Mostró una segunda dirección para los plegables: reducir el tamaño del teléfono al guardarlo."
  },
  {
    "date": "2020-04-15",
    "display": "15 abr 2020",
    "title": "iPhone SE de segunda generación",
    "category": "Dispositivos",
    "icon": "♻️",
    "desc": "Apple presenta un iPhone de menor costo usando un diseño conocido y procesador moderno.",
    "importance": "Refuerza la estrategia de extender tecnologías actuales a segmentos de precio más accesibles."
  },
  {
    "date": "2020-10-13",
    "display": "13 oct 2020",
    "title": "iPhone 12 con 5G",
    "category": "Redes",
    "icon": "📶",
    "desc": "Apple presenta su primera familia de iPhone compatible con redes 5G.",
    "importance": "La adopción de 5G por una de las líneas de smartphones más vendidas aceleró su visibilidad global."
  },
  {
    "date": "2021-01-14",
    "display": "14 ene 2021",
    "title": "Galaxy S21",
    "category": "Dispositivos",
    "icon": "📱",
    "desc": "Samsung presenta Galaxy S21, S21+ y S21 Ultra.",
    "importance": "La integración de cámaras múltiples, altas tasas de refresco y 5G se consolida en la gama alta."
  },
  {
    "date": "2021-05-18",
    "display": "18 may 2021",
    "title": "Android 12 presentado en Google I/O",
    "category": "Software",
    "icon": "🎨",
    "desc": "Google muestra Android 12 y su lenguaje visual Material You.",
    "importance": "El sistema móvil adopta personalización dinámica y mayor enfoque en privacidad."
  },
  {
    "date": "2021-09-14",
    "display": "14 sep 2021",
    "title": "iPhone 13",
    "category": "Dispositivos",
    "icon": "🎬",
    "desc": "Apple presenta iPhone 13 con mejoras de cámara, autonomía y video computacional.",
    "importance": "Muestra la madurez del smartphone: la innovación se desplaza hacia eficiencia y procesamiento de imagen."
  },
  {
    "date": "2022-02-09",
    "display": "9 feb 2022",
    "title": "Galaxy S22 Ultra integra S Pen",
    "category": "Dispositivos",
    "icon": "✍️",
    "desc": "Samsung presenta Galaxy S22 Ultra con lápiz S Pen integrado.",
    "importance": "Fusionó características de la antigua familia Galaxy Note con la línea Galaxy S."
  },
  {
    "date": "2022-05-11",
    "display": "11 may 2022",
    "title": "Google muestra Pixel 7",
    "category": "IA",
    "icon": "🧠",
    "desc": "Google anticipa Pixel 7 y continúa apostando por chips Tensor diseñados para IA móvil.",
    "importance": "El procesamiento local de inteligencia artificial se convierte en un diferenciador del hardware móvil."
  },
  {
    "date": "2022-09-07",
    "display": "7 sep 2022",
    "title": "iPhone 14 y comunicación satelital",
    "category": "Satélite",
    "icon": "🛰️",
    "desc": "Apple presenta iPhone 14 con Emergency SOS vía satélite en mercados compatibles.",
    "importance": "El smartphone comienza a comunicarse directamente con satélites para emergencias fuera de cobertura celular."
  },
  {
    "date": "2022-10-06",
    "display": "6 oct 2022",
    "title": "Pixel 7 y Tensor G2",
    "category": "IA",
    "icon": "🧠",
    "desc": "Google presenta Pixel 7 con una segunda generación de su procesador Tensor.",
    "importance": "La IA integrada al dispositivo gana protagonismo en fotografía, voz y funciones inteligentes."
  },
  {
    "date": "2023-02-01",
    "display": "1 feb 2023",
    "title": "Galaxy S23 Ultra",
    "category": "Cámara",
    "icon": "🔭",
    "desc": "Samsung presenta Galaxy S23 Ultra con sensor principal de 200 megapíxeles.",
    "importance": "La resolución extrema se combina con procesamiento computacional para ampliar las capacidades fotográficas."
  },
  {
    "date": "2023-05-10",
    "display": "10 may 2023",
    "title": "Google Pixel Fold",
    "category": "Plegables",
    "icon": "📖",
    "desc": "Google presenta su primer smartphone plegable, Pixel Fold.",
    "importance": "La entrada directa de Google confirma la madurez creciente del formato plegable."
  },
  {
    "date": "2023-09-12",
    "display": "12 sep 2023",
    "title": "iPhone 15 adopta USB-C",
    "category": "Conectividad",
    "icon": "🔌",
    "desc": "Apple presenta iPhone 15 y sustituye Lightning por USB-C.",
    "importance": "Unifica el conector físico del iPhone con un estándar ampliamente usado en la industria."
  },
  {
    "date": "2023-10-04",
    "display": "4 oct 2023",
    "title": "Pixel 8 y más IA en el dispositivo",
    "category": "IA",
    "icon": "✨",
    "desc": "Google presenta Pixel 8 con Tensor G3 y nuevas funciones de fotografía y procesamiento inteligente.",
    "importance": "La IA empieza a formar parte visible de tareas cotidianas del smartphone."
  },
  {
    "date": "2024-01-17",
    "display": "17 ene 2024",
    "title": "Galaxy S24 y Galaxy AI",
    "category": "IA",
    "icon": "🤖",
    "desc": "Samsung presenta Galaxy S24 con un conjunto de funciones generativas y de traducción bajo Galaxy AI.",
    "importance": "La inteligencia artificial generativa se convierte en argumento central de venta de smartphones."
  },
  {
    "date": "2024-05-14",
    "display": "14 may 2024",
    "title": "Google integra Gemini en Android",
    "category": "IA",
    "icon": "♊",
    "desc": "Google anuncia una integración más profunda de Gemini y funciones generativas en Android.",
    "importance": "Los asistentes móviles evolucionan de ejecutar comandos simples a comprender y generar contenido."
  },
  {
    "date": "2024-09-09",
    "display": "9 sep 2024",
    "title": "iPhone 16",
    "category": "IA",
    "icon": "🍏",
    "desc": "Apple presenta la familia iPhone 16, diseñada alrededor de nuevas capacidades de procesamiento e inteligencia personal.",
    "importance": "La IA generativa y el procesamiento local pasan a definir una nueva etapa de competencia entre plataformas móviles."
  },
  {
    "date": "2025-01-22",
    "display": "22 ene 2025",
    "title": "Galaxy S25",
    "category": "IA",
    "icon": "🧠",
    "desc": "Samsung presenta Galaxy S25 con una experiencia cada vez más centrada en asistentes y funciones de IA.",
    "importance": "El teléfono comienza a actuar como un agente que conecta aplicaciones, contenido y contexto del usuario."
  },
  {
    "date": "2025-03-01",
    "display": "2025",
    "title": "5G Advanced entra en expansión",
    "category": "Redes",
    "icon": "📶",
    "desc": "Operadores y fabricantes comienzan a introducir capacidades asociadas a 5G-Advanced basadas en nuevas versiones del estándar.",
    "importance": "5G-Advanced funciona como puente tecnológico entre 5G convencional y la futura generación 6G."
  },
  {
    "date": "2026-01-21",
    "display": "21 ene 2026",
    "title": "Smartphones centrados en agentes de IA",
    "category": "IA",
    "icon": "🧩",
    "desc": "Los nuevos dispositivos premium profundizan funciones de IA capaces de resumir, traducir, buscar y coordinar tareas entre aplicaciones.",
    "importance": "La interfaz móvil comienza a depender menos de abrir manualmente cada aplicación y más de expresar una intención."
  },
  {
    "date": "2026-03-01",
    "display": "2026",
    "title": "5G-Advanced gana presencia",
    "category": "Redes",
    "icon": "📡",
    "desc": "Las redes y módems compatibles con funciones avanzadas de 5G continúan expandiéndose en distintos mercados.",
    "importance": "Mejora eficiencia, capacidad y preparación para nuevos servicios de inteligencia y dispositivos conectados."
  },
  {
    "date": "2026-06-01",
    "display": "2026",
    "title": "Plegables más delgados y resistentes",
    "category": "Plegables",
    "icon": "📚",
    "desc": "La competencia en plegables se centra en reducir grosor, mejorar bisagras y hacer las pantallas flexibles más durables.",
    "importance": "El formato plegable avanza desde producto experimental hacia una categoría más madura."
  },
  {
    "date": "2026-08-01",
    "display": "2026",
    "title": "IA local y privacidad ganan importancia",
    "category": "IA",
    "icon": "🔐",
    "desc": "Los procesadores móviles incorporan unidades neuronales más potentes para ejecutar modelos directamente en el dispositivo.",
    "importance": "Procesar IA localmente reduce latencia y puede limitar la cantidad de datos que deben enviarse a servidores."
  },
  {
    "date": "2026-08-31",
    "display": "31 ago 2026",
    "title": "La evolución móvil continúa",
    "category": "Industria",
    "icon": "🚀",
    "desc": "Los dispositivos móviles actuales combinan 5G, cámaras computacionales, biometría, IA, servicios en la nube y, en algunos casos, conexión satelital.",
    "importance": "El teléfono se ha convertido en una plataforma personal de comunicación, creación, identidad, navegación y cómputo."
  },
  {
    "date": "2027-03-01",
    "display": "2027 · proyección",
    "title": "5G-Advanced más extendido",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: se espera una presencia mayor de capacidades 5G-Advanced en redes y dispositivos compatibles.",
    "importance": "Podría mejorar eficiencia espectral, latencia y soporte para nuevas experiencias conectadas.",
    "future": true
  },
  {
    "date": "2027-06-01",
    "display": "2027 · proyección",
    "title": "Más funciones de IA ejecutadas localmente",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: procesadores móviles más potentes permitirían ejecutar modelos de IA más complejos sin depender siempre de la nube.",
    "importance": "Esto podría mejorar velocidad, privacidad y disponibilidad de asistentes inteligentes.",
    "future": true
  },
  {
    "date": "2027-09-01",
    "display": "2027 · proyección",
    "title": "Conectividad híbrida terrestre-satélite",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: más teléfonos podrían alternar entre redes celulares y servicios satelitales compatibles.",
    "importance": "La combinación podría reducir áreas sin cobertura y mejorar comunicaciones de emergencia.",
    "future": true
  },
  {
    "date": "2027-12-01",
    "display": "2027 · proyección",
    "title": "Plegables y nuevos formatos evolucionan",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: pantallas flexibles, plegables y otros formatos podrían continuar reduciendo grosor y aumentando durabilidad.",
    "importance": "El diseño físico del dispositivo podría volver a ser una fuente importante de diferenciación.",
    "future": true
  },
  {
    "date": "2028-03-01",
    "display": "2028 · proyección",
    "title": "Primeras pruebas avanzadas hacia 6G",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: la investigación y pruebas precomerciales relacionadas con 6G deberían intensificarse antes de su despliegue esperado alrededor de 2030.",
    "importance": "6G busca ampliar capacidades de comunicación, sensado, inteligencia y conectividad ubicua.",
    "future": true
  },
  {
    "date": "2028-06-01",
    "display": "2028 · proyección",
    "title": "Agentes móviles más autónomos",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: asistentes de IA podrían realizar cadenas de tareas más largas entre servicios y aplicaciones con autorización del usuario.",
    "importance": "La relación con el teléfono podría pasar de operar apps a delegar objetivos completos.",
    "future": true
  },
  {
    "date": "2028-09-01",
    "display": "2028 · proyección",
    "title": "Mayor integración entre móvil y wearables",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: teléfonos, audífonos, relojes y gafas podrían compartir contexto y procesamiento de manera más transparente.",
    "importance": "El smartphone podría funcionar cada vez más como núcleo de un ecosistema personal distribuido.",
    "future": true
  },
  {
    "date": "2028-12-01",
    "display": "2028 · proyección",
    "title": "Hacia una nueva generación móvil",
    "category": "Futuro",
    "icon": "🔮",
    "desc": "Proyección: 5G-Advanced, IA local, satélites y nuevos formatos preparan el terreno para la próxima generación de comunicaciones móviles.",
    "importance": "Resume la transición desde el teléfono como dispositivo aislado hacia un sistema inteligente conectado de forma casi permanente.",
    "future": true
  }
];
