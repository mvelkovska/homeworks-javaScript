let theButton = $("#button");
let theInput = $("#textt");
let theColor = $("#colorr");
let theMessage = $("#message"); //h3 for messages

let colors = ["white", "black", "red", "yellow", "blue", "pink", "green"];

$(document).ready(function () {

    theButton.on("click", function () {
        if (theInput.val() === "" || theColor.val() === "") {
            theMessage.text(`Please fill all the fields!`); //h3 for messages

        }
        else {
            let flag = false;
            for (let i of colors) {
                if (i === theColor.val()) {
                    let headerh1;
                    headerh1 = $("<h1></h1>").text(`${theInput.val()}`); //h1 for the colored text
                    headerh1.css("color", `${theColor.val()}`);
                    theMessage.text("");//clearing text in case the user firstly inputted wrong color
                    theButton.after(headerh1); // adding h1 after the button
                    flag = true;
                    break;
                }

            }
            if (flag == false) {
                theMessage.text(`The color you have entered does not exist!`); //h3 for messages
            }
        }
    });
});
