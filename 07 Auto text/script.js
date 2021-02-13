const textEl = document.getElementById('text');
const textElString = document.getElementById('text').textContent;
const SpeedElement = document.getElementById('speed');
let SpeedNumber = SpeedElement.value;
let idx = 1;
let speed =  500 - (SpeedNumber*40);


writeText();

function writeText() {
    textEl.innerText = textElString.slice(0,idx);
    
    idx++

    if(idx > textElString.length) {
        idx = 1;
    }
    
    SpeedElement.addEventListener('click', (e) => {
        SpeedNumber = SpeedElement.value;
        speed =  500 - (SpeedNumber*40);
        
    });

    setTimeout(writeText, speed);
}




