
const mostrarMenu = document.querySelector('#menu');
const contenidoMenu = document.querySelector('#options');


mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')

});


const titulo = document.querySelector('.products');
let text = "Diseño Estructural - Supervisión - Gestión - Construcción";
let i = 0;

function writeText(){
    titulo.innerText = text.slice(0,i);
    i++;
    if(i>text.length){
        i=0;
    }
}

setInterval(writeText,100);