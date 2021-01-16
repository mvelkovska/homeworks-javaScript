function minimax(a) {
    var mini = +Infinity;
    var maxi = -Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > maxi) {
            maxi = parseInt(a[i]);
        }
        if (a[i] < mini) {
            mini = parseInt(a[i]);
        }



    }
    let sum;
    sum = mini + maxi;
    return alert(`Max: ${maxi}, Min: ${mini}, Sum: ${sum}`);
}



let myArray = [1003, 2, 7, 58, 24];

let irregularArray = [2, "Hello", 3, 1, true, 55];

minimax(myArray);

minimax(irregularArray);