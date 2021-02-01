
function finalArray(a) {
let newArr=[];

for(let i=0;i<a.length;i++)
{
    
    if(a[i-1]%2==0 && a[i]%2==0){
     newArr.push("-",a[i]);
    }
    
    

else {
    newArr.push(a[i]);
}}

console.log(newArr);
}

function check(arr){
for(let i=0;i<arr.length;i++)
{
    if((Number.isInteger(arr[i]))){
    return true;
}
    else {
        console.log("Not all the numbers are integers");
       return false;
    }
}
}



let regularArr = [0, 2, 5, 4, 6, 8]; // the output should be [0,-,2,5,4,-,6,-,8]
let irregularArr = [false, 6, 10, false, 25, null, 65, "hello"];



if (check(regularArr) == true) {
    finalArray(regularArr);
}

if (check(irregularArr) == true) {
    finalArray(irregularArr);
}

