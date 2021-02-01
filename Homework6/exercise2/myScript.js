

function insert_Row() {
  let tabela = document.getElementById("sampleTable");
  let redica = tabela.insertRow(0);
  let kelija1 = redica.insertCell(0);
  let kelija2 = redica.insertCell(1);
  kelija1.innerText = "Hello from cell1";
  kelija2.innerText = "Hello from cell2";
}