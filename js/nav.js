// Evento para diseño responsive para vista mobile
let link = document.getElementById('link');
let bars = document.getElementById('bars');

bars.addEventListener("click", () => {
   link.classList.toggle('nav-show')
});


// Código para mostrar caja de la info del mapa
let mapa = document.getElementById('mapa');
let info = document.getElementById('info');

mapa.addEventListener("mouseover", () => {
   info.classList.add("transition");
});

mapa.addEventListener("mouseout", () => {
   info.classList.remove("transition");
});