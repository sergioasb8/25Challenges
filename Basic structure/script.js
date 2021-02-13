let InputGet = document.getElementById('InputGet');
let ButtonGet = document.getElementById('ButtonGet');
let Result = document.getElementById('Result');
let InputSet = document.getElementById('InputSet');
let ButtonSet = document.getElementById('ButtonSet');

ButtonGet.addEventListener(`click`, () => {
    Result.innerText =  InputGet.value;
});

ButtonSet.addEventListener('click', () => {
    InputGet.value = InputSet.value;
});