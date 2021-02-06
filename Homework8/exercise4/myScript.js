let n1 = $("#one");
let n2 = $("#two");
let n3 = $("#three");
let theButton = $("#button");
let r = $("#h1result");

$(document).ready(function () {

    theButton.on("click", function () {
        if (!(n1.val()) || !(n2.val()) || !(n3.val())) {
            r.text("Please fill out all the fields");
        }
        else {
            let sum = parseFloat(n1.val()) + parseFloat(n2.val()) + parseFloat(n3.val());
            let avg = sum / 3;
            if (avg >= 10) {
                r.text(`${avg}`);
                r.css("color", "green");
            }
            else {
                r.text(`${avg}`);
                r.css("color", "red");
            }
        }

    });

});