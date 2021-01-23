function myFunction(niza, t) {
  t.innerHTML += "<h3>Your numbers are:</h3>";
  let uls = document.createElement("ul");
  let zbir = 0;

  for (let i in niza) {
    let element = document.createElement("li");
    element.innerText = `${niza[i]}`;
    uls.appendChild(element);
    zbir += niza[i];
  }
  t.appendChild(uls);
  t.innerHTML += `<h3>The sum of the numbers is: ${zbir} </h3>`;

  let stringg = "";
  for (let i in niza) {


    if (niza[niza.length - 1] == niza[i]) {
      stringg += `${niza[i]}`;
    }
    else {
      stringg += `${niza[i]}+`;
    }
  }
  stringg += (`=${zbir}`);
  t.innerHTML += `<h3>The whole mathematical equasion as a string is: ${stringg}`;
}
let titleDiv = document.getElementById("tekst");
var arr = [7, 5, 40, 32, 2, 1];
myFunction(arr, titleDiv);