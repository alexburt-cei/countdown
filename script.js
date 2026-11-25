// 14/12/2026 08:00 hora de Madrid (CET, UTC+1 en diciembre)
const TARGET = new Date("2026-12-14T08:00:00+01:00").getTime();
const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    $("timer").hidden = true;
    $("done").hidden = false;
    clearInterval(timer);
    return;
  }
  const s = Math.floor(diff / 1000);
  $("d").textContent = Math.floor(s / 86400);
  $("h").textContent = pad(Math.floor((s % 86400) / 3600));
  $("m").textContent = pad(Math.floor((s % 3600) / 60));
  $("s").textContent = pad(s % 60);
}
const timer = setInterval(tick, 1000);
tick();
