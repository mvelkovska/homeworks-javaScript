function con1(x)
{

 let convertToDog=x*7;
return convertToDog;
}

var final1=con1(parseFloat(prompt("HUMAN TO DOG:Enter years: ")));

alert("Your dog's age is " + final1 + " years");


function con2(y)
{

 let convertToHuman=y/7;
 return convertToHuman;
}

var final2=con2(parseFloat(prompt("DOG TO HUMAN:Enter years: ")));

alert("The human's age is " + final2 + " years");
