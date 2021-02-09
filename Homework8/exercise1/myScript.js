let theBody = $("body");
let theButton = $("#button");
let theInput = $("#name");
let theDiv = $("div");

$(document).ready(function () {

    theButton.on("click", function () {

        if (theInput.val() == "") {
            theDiv.html(`<h1>You haven't entered anything</h1>`);
            

        }
        else {

            theDiv.html(`<h1>Hello there ${theInput.val()} </h1>`);
            // theBody.append(theDiv);
        }
    });
});

