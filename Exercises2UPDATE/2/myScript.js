let c = document.getElementById("content");

function ATM(money) {

    this.money = money;
    this.getBalance = function () {
        c.innerHTML = `You have <strong> ${this.money} </strong> dollars on your account`;
    }

    this.bye = function () {
        c.innerHTML = `Bye,bye, wish you a nice day!`;
    }

    this.makeDeposit = function () {
        let makeInput = parseInt(prompt("How much you want to deposit?"));
        if (!(isNaN(makeInput))) {
            this.money += makeInput;
            c.innerHTML = `NOW you have <strong>${this.money}</strong> money on your account`;
        }
        else {
            c.innerHTML = `Please enter valid number!`;
        }
    }

    this.makeWithdrawal = function () {

        let takeMoney = parseInt(prompt("How much you want to withdraw?"));
        if (takeMoney <= this.money) {
            if (!(isNaN(takeMoney))) {
                this.money -= takeMoney;
                c.innerHTML = `NOW you have <strong>${this.money}</strong> money on your account`;
            }
        } else if ((isNaN(takeMoney))) {
            c.innerHTML = 'Please enter valid number!';
        }
        else {
            c.innerHTML = "YOU DON'T HAVE ENOUGH MONEY!";
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
