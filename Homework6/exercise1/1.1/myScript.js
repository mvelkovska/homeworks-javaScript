let theDiv = document.getElementById("myDiv");
//console.log(theDiv);

let firstName = theDiv.children[0];
// console.log(firstName);

let lastName = theDiv.children[2];
// console.log(lastName);

let myButton = theDiv.children[4];
// console.log(myButton);

let theContent = document.getElementById("content");
// console.log(theContent);


myButton.addEventListener("click", function () {
    let fName = firstName.value;
    let lName = lastName.value;
    theContent.innerHTML = `Hello ${fName} ${lName}!`;
});


theContent.addEventListener("mouseover", function () {
    theContent.innerText = " ";

});