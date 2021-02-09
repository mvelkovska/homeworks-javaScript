$(document).ready(function () {
    let myButton = $("Button");
    let userInput = parseInt(prompt("Please enter id number from 1 to 200:"));
    let myText = $("<h4></h4>");

    function getIt(number) {
        $.ajax({

            url: `https://jsonplaceholder.typicode.com/todos/${number}`,
            success: function (result) {
                myText.text(`ID: ${result.id}`);
                myText.append(`<br>`);
                myText.append(`TITLE: ${result.title}`);
                myText.append(`<br>`);
                if (result.completed === true) {

                    myText.append(`   IS COMPLETED?:Completed`);
                }
                else {
                    myText.append(`  IS COMPLETED?:Not completed`);
                }

            },
            error: function (err) {
                myText = $("<h1></h1>").text(`Sorry,the request failed`);

                console.log(err);
            }

        });
    };

    function validateMe(u) {
        if (u >= 1 && u <= 200) {
            getIt(u);
        }
        else {
            myText.text("Dear user,please enter valid ID");
            myText.css("color", "red");
        }

    }
    myButton.click(function () {
        validateMe(userInput);
    });
    myButton.after(myText);
});

