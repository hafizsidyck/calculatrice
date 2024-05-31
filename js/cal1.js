const paragraphe = document.querySelector("#paragraphe");
const clear = document.querySelector("#clear");
const egal = document.querySelector("#egal");
const btn = document.querySelector("#button");

function add(value) {
  console.log(value);
    if (paragraphe.textContent === '0') paragraphe.textContent = value
    else paragraphe.textContent += value;
  console.log(paragraphe.textcontent);
}
function sup() {
  paragraphe.textcontent = "";
  console.log(paragraphe.textContent);
}
function calculate() {
  try {
    paragraphe.textcontent = eval(paragraphe.textcontent);
    console.log(eval(paragraphe.textcontent));
  } catch (e) {
    paragraphe.textcontent = e;
  }
}
// document.addEventListener ('keydown', function(event) {
//     const key = event.key;
//     if ((key >= '0' && key <= '9') || (key === '+' || key === '-' || key === '*' || key === '/')) append (key);
//     else if (key === 'Enter') calculate();
//     elseif (key === ' Backspace') deleteLast();
    
// })
