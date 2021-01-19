function recept(name, ing, t) {
  t.innerHTML += `The name of the recipe is <strong>${name}</strong>`;
  t.style.width = "30%";
  t.style.border = "3px solid black";
  t.style.backgroundColor = "rgb(226, 211, 146)";
  let tables = document.createElement("table");
  for (let i in ing) {
    let element1 = document.createElement("tr");
    tables.appendChild(element1);
    let element2 = document.createElement("td");
    element2.style.border = "3px solid black";
    element2.innerText = `${ing[i]}`;
    element1.appendChild(element2);

  }
  t.appendChild(tables);

}




let nameRecipe = prompt("Enter the name of the recipe:");
let numberIngr = parseInt(prompt("Enter number of ingredients:"));
let allIngr = [];
for (let i = 0; i < numberIngr; i++) {
  allIngr[i] = prompt(`Enter ingredient: ${i + 1}`);

}
let titleDiv = document.getElementById("tekst");
recept(nameRecipe, allIngr, titleDiv);
