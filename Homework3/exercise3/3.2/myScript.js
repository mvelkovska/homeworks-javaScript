

function f(convertToDog, convertToHuman) {

    convertToDog *= 7;

    convertToHuman /= 7;
    let result = convertToHuman.toFixed(1);

    alert("Your dog's age is " + convertToDog + " years, and your human's age is " + result + " years");

}

f((parseFloat(prompt("Enter human years:"))), (parseFloat(prompt("Enter animal years:"))));