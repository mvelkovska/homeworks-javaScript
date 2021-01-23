let titleDiv = document.getElementById("title");
let contentDiv = document.getElementById("content");

function weightInChicken(w, content) {
  let result = w / 0.5;
  content.innerHTML = `<strong>The weight in CHICKEN is: ${result}</strong>`;

}

function printing(w, title) {
  title.innerHTML += `<strong> Let's convert.You entered: ${w} </strong>`;
  weightInChicken(weight, contentDiv);
}

let weight = parseFloat(prompt("Enter weight:"));

if(!(isNaN(weight))){
printing(weight, titleDiv);
}

else  {
  alert("Please enter number!");
}