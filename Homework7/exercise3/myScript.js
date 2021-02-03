let myName = document.getElementById("name");
let mySurname = document.getElementById("surname");
let myAge = document.getElementById("age");
let myButton = document.getElementById("button");
let myDiv = document.getElementById("content");

function Student(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

myDiv.innerHTML += `<ol>`;
myButton.addEventListener("click", function () {
    var arr = [];
    var s;
    s = new Student(myName.value, mySurname.value, myAge.value);
    arr.push(s);

   
    myDiv.innerHTML += `<li>${myName.value} ${mySurname.value} - ${myAge.value}</li>`;
   
});

myDiv.innerHTML += `<ol>`;

