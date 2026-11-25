/* =====================================================
   CONFIGURACIÓN: aquí cambias textos, fotos y enlace.
   (Los colores están en css/estilos.css, bloque :root)
   ===================================================== */

const CONFIG = {
  paraQuien: "Para ti",
  titulo: "Nuestro calendario de Adviento",
  subtitulo: "Una casilla nueva cada día hasta el 24 de diciembre. Ábrela cuando llegue su día.",
  firma: "Con todo mi cariño ♥",
  anio: 2026,            // año del calendario
  totalDias: 24,         // el calendario llega hasta el 24 de diciembre

  // true = abre TODAS las casillas para probar la web. Déjalo en false al enviarla.
  // También puedes probar añadiendo ?todo al final de la dirección.
  modoPrueba: true,

  // Si un día no lleva "foto", se busca en fotos/dia-N.jpg
  carpetaFotos: "fotos/",
  extension: ".jpg",

  // Texto y foto de cada día.
  // Opciones por día: titulo, texto, foto, pie (texto bajo la foto), enlace y boton.
  dias: {
    1:  { titulo: "Empezamos", texto: "Hoy abre diciembre y quiero que empiece un diciembre especial para ti. Hoy, día 1, te recuerdo los primeros tulipanes que llegaron a tu vida por sorpresa.", foto: "fotos/tulipanes1.jpeg" },
    2:  { titulo: "Inicio", texto: "Hoy, día 2, te recuerdo un inicio, donde nuestros corazones se unieron pa no separarse más, LA SABINITA.", foto: "fotos/sabinita1.jpeg" },
    3:  { titulo: "Comienzos", texto: "Ya juntitos no había quien nos pudiera separar. Empezamos con nuestras fotitos.", foto: "fotos/puebloapueblo1.jpeg" },
    4:  { titulo: "Momentos nuestros", texto: "Horas y horas pasábamos juntos contándonos cosas y, sobre todo, queriéndonos.", foto: "fotos/coche1.jpeg" },
    5:  { titulo: "Primeros momentos", texto: "Ya estábamos empezando a disfrutar cada vez más, tú más feliz y yo aún más viéndote.", foto: "fotos/barco1.jpeg" },
    6:  { titulo: "¡VIVA San Isidro!", texto: "Primeras fiestas de La Orotava, ¡JUNTOS! Disfrutar de nuestras aficiones juntos es lo mejor que me ha pasado.", foto: "fotos/fiestasorotava1.jpeg" },
    7:  { titulo: "Contacto físico", texto: "No puedo expresar lo que siento con tu contacto físico, me estabilizo emocionalmente tan solo con ello.", foto: "fotos/coche2.jpeg" },
    8:  { titulo: "Garachico", texto: "Este pueblo ha sido nuestra vía de escape para ser libres y disfrutar (también es que nos gusta la fiesta).", foto: "fotos/garachico.jpeg" },
    9:  { titulo: "Dormilona", texto: "Nada como poder tenerte durmiendo a mi lado y cuidarte siempre.", foto: "fotos/dormir.jpeg" },
    10: { titulo: "Flores", texto: "1000 y 1 flor te regalaría, tu ilusión hace que mi corazón sea feliz.", foto: "fotos/flores1.jpeg" },
    11: { titulo: "LANZAROTE", texto: "Primer viaje juntos, qué felices fuimos y cómo disfrutamos. Te amo.", foto: "fotos/lanzarote.jpeg" },
    12: { titulo: "Fin de año", texto: "Qué enserrona ese día, pero disfruté mucho a tu lado. Ese día me hiciste parte de tu familia, gracias.", foto: "fotos/findeanos.jpeg" },
    13: { titulo: "TULIPANES", texto: "¿Qué es mi niña sin sus tulipanes? Aquí te recuerdo uno de ellos.", foto: "fotos/tulipanes2.jpeg" },
    14: { titulo: "25 de enero", texto: "Qué día tan importante, dos niños jugando queriendo decir todo lo que nos queríamos. Te amo, mi vida.", foto: "fotos/25enero.jpeg" },
    15: { titulo: "Unión", texto: "La unión que hemos creado durante todo este tiempo es increíble, quiero tenerte a mi lado de por vida.", foto: "fotos/corazon.jpeg" },
    16: { titulo: "SABINITA", texto: "¿Qué decir de la Sabinita? Segunda vez aquí y de la mano. Volveré siempre a ese lugar a tu lado.", foto: "fotos/sabinita2.jpeg" },
    17: { titulo: "Mi REINA", texto: "Desde el día 1 que decidiste presentarte, te convertiste en mi reina favorita. Estuviste preciosa, mi vida, me encantó vivirlo a tu lado.", foto: "fotos/corpus.jpeg" },
    18: { titulo: "LUGARES", texto: "Me encanta ir buscando sitios nuevos donde pasar el tiempo a tu lado y descubrir la isla.", foto: "fotos/paseo1.jpeg" },
    19: { titulo: "LA PALMA", texto: "Segundo viaje juntos, y qué viaje. No hay nada como disfrutar con la gente que más nos quiere.", foto: "fotos/lapalma.jpeg" },
    20: { titulo: "ROMEO SANTOS", texto: "Las ganas que tenías de ir y verte lo feliz que eras me hicieron disfrutar como un enano.", foto: "fotos/romeo.jpeg" },
    21: { titulo: "MÁS FLORES", texto: "Cómo no, más flores. A mi niña nunca le faltarán flores.", foto: "fotos/flores2.jpeg" },
    22: { titulo: "VERANO", texto: "Querido verano, nos has hecho unirnos más y más. Tener tiempo pa estar a tu lado es el mejor regalo.", foto: "fotos/barco2.jpeg" },
    23: { titulo: "DEPORTE", texto: "Un día sin pensarlo decidimos empezar en esto del deporte juntos y se ha vuelto nuestro mejor compañero.", foto: "fotos/deporte.jpeg" },

    // Último día: regalo con enlace a la app.
    // ⚠️ PENDIENTE: pega en "enlace" la dirección real de tu PWA (empieza por https://).
    24: {
      titulo: "APP-SIRENITA-GYM",
      texto: "Llevo preparando, a ratitos, alrededor de un mes un regalo para estas Navidades. Aquí te dejo una app de gym hecha por mí para usarla los dos.",
      enlace: "https://PEGA-AQUI-EL-ENLACE-DE-TU-APP",
      boton: "Abrir la app 💪",
      foto: "fotos/app.jpeg"
    },
  },

  // Vídeo final (opcional, ya no hace falta). Déjalo vacío.
  videoFinal: { tipo: "", url: "" }
};

const TEXTOS_POR_DEFECTO = [
  "Una flor más para este día. Que te acompañe.",
  "Un recuerdo pequeño que para mí es enorme.",
  "Hoy te regalo esta imagen. Mírala despacio.",
  "Otro momento que guardo con cariño.",
  "Para que sonrías un poquito hoy."
];
const ADORNOS = ["🌿","🌸","💚","🌷","🍀","🌹","⭐","🌼","❄️","🎁"];
