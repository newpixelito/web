let icono = document.getElementById('icono-menu');
let navbar = document.getElementsByClassName('navbar')

icono.addEventListener('click', ()=>{
    navbar[0].classList.toggle('activo');
});

window.onscroll = ()=>{
    navbar[0].classList.remove('activo');
}