let theButton = $("#button");
let theInput = $("#textt");
let theColor = $("#colorpick");
let theMessage = $("#message");


$(document).ready(function () {

    theButton.on("click", function () {
        if (theInput.val() === "") { // po default bojata e crna, ne moze da se validira,veke e izbrana,izbor e na korisnikot dali ke ja smeni?
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
