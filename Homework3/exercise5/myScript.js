
function ATM(moneyInBank,withdrawal)
{
 if(moneyInBank>withdrawal)
 {
    let result=moneyInBank-withdrawal;
 
 alert("The amount that is taken is " +withdrawal + "$, now you have " + result+ "$");
 }
 else {
 alert("Not enough money");
}
}





ATM((parseInt(prompt("Enter the amount you have:"))),(parseInt(prompt("Enter the amount you want to withdraw:"))));