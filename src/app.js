let quien = ["Una jirafa", "Mi abuela", "El taxista", "Mi sobrino de 3 meses"];
let accion = ["se comió", "se orinó", "aplastó", "rompió"];
let que = ["mi tarea", "mi laptop", "la moto"];
let cuando = [
  "en la madrugada",
  "cuando estaba en el baño",
  "mientras dormia",
  "cuando estaba comiendo",
  "cuando estaba haciendo voluntariado"
];

function generarExcusa() {
  const quienIndex = Math.floor(Math.random() * quien.length);
  const accionIndex = Math.floor(Math.random() * accion.length);
  const queIndex = Math.floor(Math.random() * que.length);
  const cuandoIndex = Math.floor(Math.random() * cuando.length);

  return `${quien[quienIndex]} ${accion[accionIndex]} ${que[queIndex]} ${cuando[cuandoIndex]}.`;
}
function mostrarExcusa() {
  const excuse = generarExcusa();
  document.getElementById("excuse").innerHTML = excuse;
}
window.onload = mostrarExcusa;
