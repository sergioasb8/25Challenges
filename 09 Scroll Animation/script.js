const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    
    console.log(window.innerHeight / 5 * 3.5);
    
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop); 
        if(boxTop < triggerBottom) {
            box.classList.add('show');
        }
        
        if(boxTop > triggerBottom) {
            box.classList.remove('show');
        }
    });
    
}