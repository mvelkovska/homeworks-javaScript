function recept(name, ing, t) {
    t.innerHTML += `The name of the recipe is <strong>${name}</strong>`;
    let uls = document.createElement("ul");

    for (let i in ing) {
        let element = document.createElement("li");
        element.innerText = `${ing[i]}`;
        uls.appendChild(element);
      }
      t.appendChild(uls);
}




let nameRecipe = prompt("Enter the name of the recipe:");
let numberIngr = parseInt(prompt("Enter number of ingredients:"));
let allIngr = [];
for (let i = 0; i < numberIngr; i++) {
   allIngr[i] = prompt(`Enter ingredient: ${i + 1}`);
   
}
let titleDiv = document.getElementById("tekst");
recept(nameRecipe, allIngr, titleDiv);
