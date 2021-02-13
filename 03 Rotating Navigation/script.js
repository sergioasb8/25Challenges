

const menu = document.getElementById('open');
const equis = document.getElementById('close');
const container = document.querySelector('.container');
const circle = document.querySelector('.circle');
const lista = document.querySelector('.lista')

menu.addEventListener('click', () => {
    container.classList.add('active');
    circle.classList.add('active');
    lista.classList.add('active');
    lista.classList.remove('origin');
});

equis.addEventListener('click',() => {
    container.classList.remove('active');
    container.classList.add('origin');
    circle.classList.remove('active');
    circle.classList.add('origin');
    lista.classList.remove('active');
    lista.classList.add('origin');
});
