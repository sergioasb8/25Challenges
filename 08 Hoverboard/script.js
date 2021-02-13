const container = document.getElementById('container');
const colors = ['aqua', '#f20d0d', '#ffff1a', 'lime', '#ff4dff'];
const SQUARES = 3000;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('P');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
   const color = getRandomColor();
   console.log(color);
   element.style.background = color;
   element.style.boxShadow = '2px 2px 20px white';
}

function removeColor(element) {
    element.style.background = 'grey';
    element.style.boxShadow = '0px 0px 0px';
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*5)];
}