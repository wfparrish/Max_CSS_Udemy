let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');

let selectPlanButtons = document.querySelectorAll('.plan button');
console.log(selectPlanButtons)

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}