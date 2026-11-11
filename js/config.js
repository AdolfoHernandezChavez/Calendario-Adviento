/* =====================================================
   CONFIGURACIÓN: aquí cambias textos, fotos y vídeo.
   (Los colores están en css/estilos.css, bloque :root)
   ===================================================== */

/* =====================================================================
   ✏️  AQUÍ MODIFICAS TODO LO IMPORTANTE
   ===================================================================== */
const CONFIG = {
  paraQuien: "Para ti",
  titulo: "Nuestro calendario de Adviento",
  subtitulo: "Una casilla nueva cada día hasta el 25 de diciembre. Ábrela cuando llegue su día.",
  firma: "Con todo mi cariño ♥",
  anio: 2026,            // año del calendario
  totalDias: 25,         // el calendario llega hasta el 25 de diciembre

  // true = abre TODAS las casillas para que pruebes la web (ponlo en false al enviarla).
  // También puedes probar añadiendo ?todo al final de la dirección.
  modoPrueba: false,

  // Las fotos se buscan solas en: fotos/dia-1.jpg, fotos/dia-2.jpg ... (formato .jpg)
  carpetaFotos: "fotos/",
  extension: ".jpg",

  // Texto y foto de cada día. Los que no escribas usan un texto de ejemplo.
  // Ejemplo con foto propia: 5: { titulo:"Aquel paseo", texto:"…", foto:"fotos/paseo.jpg", pie:"Sevilla, 2024" }
  dias: {
    1: { titulo: "Empezamos", texto: "Hoy abre diciembre y yo abro esta sorpresa para ti. Cada día habrá una flor o un recuerdo nuestro." },
    2: { titulo: "Una flor para ti", texto: "Porque hay días que se arreglan con un ramo, aunque sea de mentira." },
    3: { titulo: "Ese día", texto: "Uno de esos momentos que no necesitan explicación. Solo mirarlo." },
    // 4: { titulo: "", texto: "" },
    // ...sigue añadiendo los que quieras
  },

  // Último día: vídeo sorpresa. Deja url vacío si aún no lo tienes.
  //  tipo "youtube": pon solo el ID del vídeo (lo que va tras v= en la dirección)
  //  tipo "archivo": ruta a un mp4, por ejemplo "video/final.mp4"
  videoFinal: { tipo: "youtube", url: "", titulo: "Nuestro último regalo", texto: "El día final tiene sorpresa. Espero que te saque una sonrisa." }
};

const TEXTOS_POR_DEFECTO = [
  "Una flor más para este día. Que te acompañe.",
  "Un recuerdo pequeño que para mí es enorme.",
  "Hoy te regalo esta imagen. Mírala despacio.",
  "Otro momento que guardo con cariño.",
  "Para que sonrías un poquito hoy."
];
const ADORNOS = ["🌿","🌸","💚","🌷","🍀","🌹","⭐","🌼","❄️","🎁"];
