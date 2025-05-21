// Acción.js

// Fecha en la que comenzó "el amor"
const fechaInicio = new Date("2023-05-01T00:00:00");

// Actualizar el contador cada segundo
function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("tiempo").innerHTML = 
    `${dias} días ${horas} horas ${minutos < 10 ? '0' : ''}${minutos} minutos ${segundos < 10 ? '0' : ''}${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// Crear pétalos animados
function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.classList.add("petalos");

  // Posición horizontal aleatoria
  petalo.style.left = Math.random() * window.innerWidth + "px";
  // Tamaño y color aleatorio
  petalo.style.width = petalo.style.height = `${Math.random() * 8 + 8}px`;
  petalo.style.backgroundColor = ["#ffc0cb", "#ff69b4", "#ffb6c1", "#ff4d6d"][Math.floor(Math.random() * 4)];
  petalo.style.opacity = Math.random();

  // Animación con duración aleatoria
  petalo.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(petalo);

  // Eliminar el pétalo cuando termine la animación
  setTimeout(() => {
    petalo.remove();
  }, 10000);
}

// Crear pétalos constantemente
setInterval(crearPetalo, 300);

const frases = [
  "Usted es mi todo.",
  "No somos solo amigos hey.",
  "La amo más cada día.",
  "Contigo hasta el fin del mundo.",
  "Usted mi destino.",
  "Ay! Eli, la amo tanto",
  "Estoy pensando en usted",
];

function mostrarFrase() {
  const span = document.createElement("span");
  span.textContent = frases[Math.floor(Math.random() * frases.length)];
  span.style.position = "absolute";
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = Math.random() * window.innerHeight + "px";
  span.style.color = "#ff69b4";
  span.style.fontWeight = "bold";
  span.style.opacity = 1;
  span.style.transition = "all 5s ease-out";
  document.body.appendChild(span);

  setTimeout(() => {
    span.style.transform = "translateY(-100px)";
    span.style.opacity = 0;
  }, 300);

  setTimeout(() => {
    span.remove();
  }, 5000);
}

setInterval(mostrarFrase, 4000);

const btnMusica = document.getElementById("btnMusica");
const musica = document.getElementById("musicaFondo");
let reproduciendo = false;

btnMusica.addEventListener("click", () => {
  if (reproduciendo) {
    musica.pause();
    btnMusica.textContent = "🔇 Reproducir música";
  } else {
    musica.play();
    btnMusica.textContent = "🎶 Pausar música";
  }
  reproduciendo = !reproduciendo;
});