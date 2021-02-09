let theButton = $("#button");
let theInput = $("#textt");
let theColor = $("#colorpick");
let theMessage = $("#message");


$(document).ready(function () {

    theButton.on("click", function () {
        if (theInput.val() === "") {  // Bojata e vekje defaultno izbrana crna da bide,nema nachin kako bi se proverila?
            theMessage.text(`Please fill out the text field`);
            

        }
        else {

            theMessage.text("");
            let headerh1;
            headerh1 = $("<h1></h1>").text(`${theInput.val()}`);
            headerh1.css("color", `${theColor.val()}`);
            theButton.after(headerh1);

        }

    });

});
