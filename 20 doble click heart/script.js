const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0
 
// loveMe.addEventListener('dblclick', (e) => {
//     console.log('123')
// } ) 

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        // console.log(clickTime);
    } else {
        // if there is less than 800 whatever it will recognize the second click else
        if((new Date().getTime() - clickTime) < 900) {
            createHeart(e)
            console.log(123);
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
            console.log(clickTime);
        }
    }
})


const createHeart = (e) => {
    const heart = document.createElement('i');
    // when using classList.add JS do not let us write a space. to solve that error i worte it twice
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX
    const y = e.clientY
    console.log(x);
    console.log(y);

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => { 
        heart.remove();
        console.log('bye corazon');
    }, 1000);
}
