function ATM(deposit) {

    this.deposit = deposit;
    this.getBalance = function () {
        console.log(`You have ${this.deposit} money on your account`);
    }

    this.bye=function(){
        console.log(`Bye,bye, wish you a nice day!`);
    }

    this.makeDeposit=function(){
        let makeInput=parseInt(prompt("How much you want to deposit?"));
        this.deposit+=makeInput;
        console.log(`NOW you have ${this.deposit} money on your account`);
    }
   
    this.makeWithdrawal=function(){
       
        let takeMoney=parseInt(prompt("How much you want to withdraw?"));
        if(takeMoney<=this.deposit)
        {
           this.deposit-=takeMoney;
           console.log(`NOW you have ${this.deposit} money on your account`);
        }
        else 
        {
            console.log("YOU DON'T HAVE ENOUGH MONEY!");
        }
    }

}
let first = document.getElementById("one");
let second = document.getElementById("two");
let third = document.getElementById("three");
let fourth = document.getElementById("four");


let A = new ATM(565);

three.addEventListener("click", function () {

    A.getBalance();
});




four.addEventListener("click", function () {

    A.bye();
});


one.addEventListener("click", function () {

    A.makeDeposit();
});

two.addEventListener("click", function () {

   A.makeWithdrawal();
});
