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

function checkIt(word1, word2, len) {

    if ((word1.length < len) && (word2.length < len)) {  //00
        theContent.style.backgroundColor = "red";
        theContent.innerText = `Your name and surname must be at least ${len} letters long!`;

    }
    else if ((word1.length < len) && (word2.length > len)) { //01  
        theContent.style.backgroundColor = "red";
        theContent.innerText = `Your name must be at least ${len} letters long!`;

    }

    else if ((word1.length > len) && (word2.length < len)) //10
    {
        theContent.style.backgroundColor = "red";
        theContent.innerText = `Your surname must be at least ${len} letters long!`;

    }

    else {  //11
        theContent.style.backgroundColor = "green";
        theContent.innerText = `Hello ${word1} ${word2}! How are you feeling today?`;

    }
}


myButton.addEventListener("click", function () {
    let fName = firstName.value;
    let lName = lastName.value;
    checkIt(fName, lName, 3);


});


theContent.addEventListener("mouseover", function () {
    theContent.innerText = " ";

});