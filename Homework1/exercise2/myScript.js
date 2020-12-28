var priceOfPhone=prompt("Enter the price of the phone:");

var taxRate=prompt("Enter the tax rate of the phone:");

var numberOfPhones=30;

var calculateTax=parseFloat((taxRate*priceOfPhone)/100);

var calculateFinalPriceForOnePhone=parseFloat(priceOfPhone+calculateTax);

var calculateFinalPriceForAllPhones=parseFloat(calculateFinalPriceForOnePhone*30);

alert("The final result is: " + calculateFinalPriceForAllPhones);

console.log("The final result is: " + calculateFinalPriceForAllPhones);

