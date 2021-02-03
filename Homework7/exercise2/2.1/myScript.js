

let Library = {
    titleBook: ["Pale Fire", "The Sound", "Americans"],
    authorBook: ["Vladimir Nabokov", "William Faulkner", "Gertrude Stein"],
    readingStatusBook: [false, true, true],
    infoReadingStatusBook: function (i) {
        if (this.readingStatusBook[i] == true) {
            console.log(`Already read \"${this.titleBook[i]}\" by ${this.authorBook[i]}`);
        }
        else {
            console.log(`You still need to read \"${this.titleBook[i]}\" by ${this.authorBook[i]}`);
        }
    }
}


let getInput = document.getElementById("enterTitle");
let getButton = document.getElementById("myButton");
getButton.addEventListener("click", function () {
    let v = getInput.value.toLowerCase();
    if (!(!(v))) {
        let flag = false;


        for (var i = 0; i < Library.titleBook.length; i++) {
            if (v === (Library.titleBook[i]).toLowerCase()) {
                flag = true;
                Library.infoReadingStatusBook(i);
                break;
            }
        }
        if (flag == false) {
            console.log("The entered book is not in the library!");
        }

    }
    else
        console.log("Please enter something!");
});




