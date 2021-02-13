
// ¿Cuál es la opción que sirve?

let panels = document.querySelectorAll('.panel');
const actives = document.querySelectorAll('.active');

//        Sergio A. Sosa Bautista
//        Expanding cards


//        variables


// funciones 

panels.forEach((panel) => {
    
    panel.addEventListener('click', () => {
        RemoveActiveClass();
        panel.classList.add('active');
    });

});

function RemoveActiveClass() {
    panels.forEach((positive) => {
        positive.classList.remove('active');
    });
   
}

