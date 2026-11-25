/* =====================================================
   LÓGICA DEL CALENDARIO (no hace falta tocarla)
   Usa CONFIG, TEXTOS_POR_DEFECTO y ADORNOS de config.js
   ===================================================== */

const $ = id => document.getElementById(id);
const ahora = new Date();
const probar = CONFIG.modoPrueba || location.search.includes("todo");
const ultimo = CONFIG.totalDias;
let actual = null;
let abiertas = new Set();
try { abiertas = new Set(JSON.parse(localStorage.getItem("adviento-abiertas-" + CONFIG.anio) || "[]")); } catch (e) {}
const guardar = () => { try { localStorage.setItem("adviento-abiertas-" + CONFIG.anio, JSON.stringify([...abiertas])); } catch (e) {} };

const fotoDe = d => (CONFIG.dias[d] && CONFIG.dias[d].foto) || (CONFIG.carpetaFotos + "dia-" + d + CONFIG.extension);
const abierto = d => probar || ahora >= new Date(CONFIG.anio, 11, d);
const esHoy = d => ahora.getFullYear() === CONFIG.anio && ahora.getMonth() === 11 && ahora.getDate() === d;

$("para").textContent = CONFIG.paraQuien;
$("titulo").textContent = CONFIG.titulo;
$("subtitulo").textContent = CONFIG.subtitulo;
$("firma").textContent = CONFIG.firma;
document.title = CONFIG.titulo;

function textoEstado() {
  if (probar) return "Modo prueba: todas las casillas están abiertas";
  const inicio = new Date(CONFIG.anio, 11, 1);
  if (ahora < inicio) {
    const n = Math.ceil((inicio - ahora) / 864e5);
    return n === 1 ? "Mañana se abre la primera casilla" : "Faltan " + n + " días para la primera casilla";
  }
  if (ahora > new Date(CONFIG.anio, 11, ultimo + 1)) return "Ya están todas las casillas abiertas";
  return esHoy(Math.min(ahora.getDate(), ultimo)) ? "Hoy te espera la casilla " + ahora.getDate() : "Puedes volver a ver las casillas anteriores";
}
$("estado").textContent = textoEstado();

/* ---- Rejilla ---- */
function pintarRejilla() {
  const r = $("rejilla"); r.innerHTML = "";
  for (let d = 1; d <= ultimo; d++) {
    const b = document.createElement("button");
    const libre = abierto(d);
    b.className = "casilla" + (libre ? "" : " bloqueada") + (esHoy(d) ? " hoy" : "") + (libre && abiertas.has(d) ? " abierta" : "");
    b.setAttribute("aria-label", "Día " + d + (libre ? "" : ", todavía bloqueado"));
    b.innerHTML = '<span class="adorno">' + (libre ? ADORNOS[(d - 1) % ADORNOS.length] : "🔒") + '</span><span class="num">' + d + '</span><span class="pie">' + (esHoy(d) ? "es hoy" : libre ? (abiertas.has(d) ? "" : "ábrela") : "") + '</span>';
    if (libre && abiertas.has(d) && d !== ultimo) b.style.backgroundImage = 'url("' + fotoDe(d) + '")';
    b.onclick = () => libre ? abrir(d) : bloqueado(d, b);
    r.appendChild(b);
  }
}

let t;
function avisar(m) { const a = $("aviso"); a.textContent = m; a.classList.add("ver"); clearTimeout(t); t = setTimeout(() => a.classList.remove("ver"), 2400); }
function bloqueado(d, b) {
  b.classList.remove("temblor"); void b.offsetWidth; b.classList.add("temblor");
  avisar("Todavía no. Esta casilla se abre el " + d + " de diciembre.");
}

/* ---- Pestaña del día ---- */
function abrir(d) {
  actual = d; abiertas.add(d); guardar();
  const datos = CONFIG.dias[d] || {};
  const final = d === ultimo;
  const v = CONFIG.videoFinal || {};
  $("gran").textContent = d;
  $("dTitulo").textContent = datos.titulo || (final && v.titulo) || "Día " + d;
  $("dTexto").textContent = datos.texto || (final && v.texto) || TEXTOS_POR_DEFECTO[(d - 1) % TEXTOS_POR_DEFECTO.length];
  $("pieFoto").textContent = datos.pie || "";

  const marco = $("marco"), visor = $("visor"), acc = $("acciones");
  visor.innerHTML = ""; visor.style.aspectRatio = ""; marco.style.width = ""; acc.innerHTML = "";

  // Botón con enlace (por ejemplo, la app del último día)
  if (datos.enlace) {
    const b = document.createElement("a");
    b.className = "boton"; b.href = datos.enlace; b.target = "_blank"; b.rel = "noopener";
    b.textContent = datos.boton || "Abrir";
    acc.appendChild(b);
  }

  if (final && v.url) {
    // Vídeo final (opcional)
    marco.style.width = "min(100%, 680px)"; visor.style.aspectRatio = "16 / 9";
    if (v.tipo === "youtube") {
      const f = document.createElement("iframe");
      f.src = "https://www.youtube.com/embed/" + v.url; f.allowFullscreen = true; f.title = "Vídeo final";
      visor.appendChild(f);
    } else {
      const m = document.createElement("video"); m.src = v.url; m.controls = true; m.playsInline = true; visor.appendChild(m);
    }
  } else if (datos.enlace && !datos.foto) {
    // Día con enlace y sin foto: tarjeta de regalo
    marco.style.width = "min(100%, 380px)"; visor.style.aspectRatio = "4 / 5";
    visor.innerHTML = '<div class="vacio"><b>🎁</b>Tu regalo de Navidad</div>';
  } else {
    // Foto: el marco se adapta a la forma de la foto, sin recortarla
    const img = new Image(); img.alt = datos.titulo || "Foto del día " + d;
    img.onload = () => {
      visor.style.aspectRatio = img.naturalWidth + " / " + img.naturalHeight;
      marco.style.width = "min(100%, calc(" + (72 * img.naturalWidth / img.naturalHeight).toFixed(2) + "vh + 28px))";
    };
    img.onerror = () => {
      marco.style.width = "min(100%, 380px)"; visor.style.aspectRatio = "4 / 5";
      visor.innerHTML = '<div class="vacio"><b>' + ADORNOS[(d - 1) % ADORNOS.length] + '</b>Aquí irá la foto del día ' + d + '.<br>Guárdala como <code>' + fotoDe(d) + '</code></div>';
    };
    img.src = fotoDe(d);
    visor.appendChild(img);
  }
  $("ant").disabled = !(d > 1);
  $("sig").disabled = !(d < ultimo && abierto(d + 1));
  $("dia").classList.add("ver"); $("dia").scrollTop = 0; $("cerrar").focus();
  document.body.style.overflow = "hidden";
}
function cerrar() {
  $("dia").classList.remove("ver"); document.body.style.overflow = ""; actual = null;
  const vid = $("visor"); vid.innerHTML = ""; pintarRejilla();
}
$("cerrar").onclick = cerrar;
$("ant").onclick = () => actual > 1 && abrir(actual - 1);
$("sig").onclick = () => actual < ultimo && abierto(actual + 1) && abrir(actual + 1);
document.addEventListener("keydown", e => {
  if (actual === null) return;
  if (e.key === "Escape") cerrar();
  if (e.key === "ArrowLeft" && !$("ant").disabled) $("ant").click();
  if (e.key === "ArrowRight" && !$("sig").disabled) $("sig").click();
});

pintarRejilla();
