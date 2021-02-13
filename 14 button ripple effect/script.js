const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        const circle = document.createElement('span');
        circle.classList.add('circle');

        // this is always the same value
        // Output the coordinates of the mouse pointer when the mouse button is clicked on an element
        const x = e.clientX
        const y = e.clientY

        //revisar 
        // console.log(x,y);

        // this is always the same value, get the position of a div element
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // console.log(buttonTop,buttonLeft);

        // this value is changing, i guess this is the value to use 
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // adding css style to circle. first the number. then px cause css needs to know
        // the unit of measure 
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        console.log(xInside,yInside);
        this.appendChild(circle);

        setTimeout(() => circle.remove(),300);
    })
})