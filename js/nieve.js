/* Animación de nieve de fondo (canvas). Se desactiva sola con "reducir movimiento". */

/* ---- Nieve suave ---- */
(function () {
  const c = document.getElementById("nieve"), x = c.getContext("2d"); let w, h, copos = [];
  const ajustar = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
  addEventListener("resize", ajustar); ajustar();
  for (let i = 0; i < 70; i++) copos.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2.4 + .6, v: Math.random() * .6 + .25, o: Math.random() * .5 + .2, f: Math.random() * 6 });
  (function paso() {
    x.clearRect(0, 0, w, h);
    for (const p of copos) {
      p.y += p.v; p.f += .01; p.x += Math.sin(p.f) * .35;
      if (p.y > h + 5) { p.y = -5; p.x = Math.random() * w; }
      x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fillStyle = "rgba(244,248,239," + p.o + ")"; x.fill();
    }
    requestAnimationFrame(paso);
  })();
})();
