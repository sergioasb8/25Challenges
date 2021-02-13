const search = document.querySelector('.search');
const boton = document.querySelector('.btn');
let contador = 0;

boton.addEventListener('click', () => {
    if(contador%2 ==0) {
        search.classList.add('active');
    }
    else {
        search.classList.remove('active');
    }
    contador ++;    
});