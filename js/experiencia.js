const mostrarTarjeta = document.getElementById('romulo');
const mostrarFondo = document.querySelector('.fondo-a');
const adclass = document.getElementById('saber-romulo'); 
const removeCLass = document.querySelector('.cerrar .white')


adclass.addEventListener('click', () => {
    mostrarTarjeta.classList.toggle('active')
    mostrarFondo.classList.toggle('active-f')
});

removeCLass.addEventListener('click', () => {
    mostrarTarjeta.classList.remove('active')
    mostrarFondo.classList.remove('active-f')
    adclass.style.visibility = 'visible'
});