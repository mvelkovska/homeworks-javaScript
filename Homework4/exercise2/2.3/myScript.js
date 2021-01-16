function total(anArray) {
    let flag = false;
    let totals = 0;
    for (let checking of anArray) {
        if (val(checking) == true) {
            flag = true;
            break;
        }
        else {
            totals += checking;
        }

    }
    if (flag == false) {
        return alert(`The sum is: ${totals}`);
    }
}

function val(arr) {
   // if (!(Number.isInteger(arr))) {
    if(isNaN(arr)){
        alert("ERROR,SOME ELEMENT/S OF YOUR ARRAY ARE NOT NUMBERS");
        return true;

    }
    else {
        return false;
    }
}



let irregularArray = ["jjj", true, 6, 7, 8];
total(irregularArray);

let regularArray = [1, 2, 3, 4, 5];
total(regularArray);