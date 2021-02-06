function check(arr) {

    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (!(typeof (arr[i]) === "number")) { 
            flag = true;

        }
    }
    if (flag === false) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {

            if (arr[i - 1] % 2 == 0 && arr[i] % 2 == 0) {
                newArr.push("-", arr[i]);
            }



            else {
                newArr.push(arr[i]);
            }
        }

        console.log(newArr);
    }
    if (flag === true) {
        console.log("You have irregular array");
    }
}
let regularArr = [1, 2, 5, 4, 6, 8]; // the output should be [1,2,5,4,-,6,-,8]
let irregularArr = [6, 10, false, 25, null,NaN, 65, "hello"];
check(regularArr);
check(irregularArr);
