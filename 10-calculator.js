let calculation = localStorage.getItem('calculation') || '';
function updateCalculation(value){
calculation += value;
localStorage.setItem('calculation', calculation);
displayResult();
}
function displayResult() {
document.querySelector('.js-result')
 .innerHTML = `${calculation}` ;
}