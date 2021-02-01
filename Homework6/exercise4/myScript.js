
function createTable() {
  r = prompt("Redici:");
  k = prompt("Koloni:");

  for (var i = 0; i < parseInt(r); i++) {
    var red = document.getElementById('myTable').insertRow(i);
    for (var j = 0; j < parseInt(k); j++) {
      var kelija = red.insertCell(j);
      kelija.innerHTML = "Redica-" + i + " Kolona-" + j;
    }
  }
}


let kopce = document.getElementById("myButton");

kopce.addEventListener("click", function () {
  createTable();
});