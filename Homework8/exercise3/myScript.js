let theButton = $("input");

let theOptions = $("option");

let theHeader = $("#content");

$(document).ready(function () {
    theButton.on("click", function () {
        theOptions.remove();
        $("#myColor").append(`<option value = "Yellow" id="option"> Yellow </option>`);
        let option= $("#option");
        theHeader.text(`${option.val()}`);

    })
});