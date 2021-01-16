function greeting(array) {
  let bigString = "";
  for (let i = 0; i < array.length; i++) {
    bigString += array[i] + " ";
  }
  return alert(bigString);
}


let arr = ["Hello", "there", "students", "of", "SEDC", "!"];
let arrr = ["Hello", "there", "students", "of", "SEDC", "!", "!", "!"];
greeting(arr);
greeting(arrr);

