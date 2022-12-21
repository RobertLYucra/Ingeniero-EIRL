const mostrarTarjeta_r = document.getElementById('romulo');
const adclass_r = document.getElementById('saber-romulo'); 
const removeCLass = document.querySelector('.cerrar .white')
const users_info = document.querySelectorAll('.users-info')

const adclass_w = document.getElementById('saber-william'); 
const adclass_s = document.getElementById('saber-sosimo'); 
const adclass_e= document.getElementById('saber-elias'); 


const mostrarTarjeta_w = document.getElementById('William');
const mostrarTarjeta_s = document.getElementById('sosimo');
const mostrarTarjeta_e = document.getElementById('elias');

const saber = document.querySelectorAll('.saber-mas')



//Romulo
adclass_r.addEventListener('click', () => {
    mostrarTarjeta_r.classList.toggle('active')
});


function remover(){
    users_info.forEach((item)=>{
        item.classList.remove('active');
    })
}

users_info.forEach((item)=> item.addEventListener('click',remover))


//William
 adclass_w.addEventListener('click', () => {
    mostrarTarjeta_w.classList.toggle('active')
});

//Sosimo
 adclass_s.addEventListener('click', () => {
    mostrarTarjeta_s.classList.toggle('active')
});


//elias
 adclass_e.addEventListener('click', () => {
    mostrarTarjeta_e.classList.toggle('active')
});








