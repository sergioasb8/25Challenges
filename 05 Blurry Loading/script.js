const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let FilterValue = 100;
let OpacityValue = 1;
let int = setInterval(blurring, 30)

function blurring() {
    

    if(load < 100){
       load += 1;
    }

    if(FilterValue > 0){
        FilterValue -= 1;
    }

    if(OpacityValue > 0){
        OpacityValue -= 0.01;
    }

    loadText.innerText = load + "%";
    loadText.style.opacity = OpacityValue;
    bg.style.filter = "blur(" + FilterValue + "px)";
}

   
 