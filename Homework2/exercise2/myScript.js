var ime=prompt("Enter your name:");
var prezime=prompt("Enter your surname:");
var greeting="Hello,";

var fullGreeting= `${greeting} ${ime} ${prezime}`;  //interpolation

 alert(fullGreeting);
 console.log(fullGreeting);


// var fullGreeting=greeting+ ime+" "+prezime;--> concatenation

//  alert(fullGreeting);

// console.log(fullGreeting);