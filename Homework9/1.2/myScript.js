$(document).ready(function () {
    let myButton = $("Button");
    let userInput = parseInt(prompt("Please enter id number from 1 to 200:"));
    let myText = $("<h4></h4>");

    function getIt(number) {


        fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
            .then(response => {

                response.json()
                    .then(data => {
                        myText.text(`ID: ${data.id}`);
                        myText.append(`<br>`);
                        myText.append(`TITLE: ${data.title}`);
                        myText.append(`<br>`);
                        if (data.completed === true) {

                            myText.append(`   IS COMPLETED?:Completed`);
                        }
                        else {
                            myText.append(`  IS COMPLETED?:Not completed`);
                        }

                    });
            })
            .catch(err => {
                myText = $("<h1></h1>").text(`Sorry,the request failed`);

                console.log(err);
            });


    }


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

