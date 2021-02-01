let myName = document.getElementById("fname");
let mySurname = document.getElementById("lname");
let myEmail = document.getElementById("email");
let myPass = document.getElementById("pwd");
let myButton = document.getElementById("aButton");
let myContent = document.getElementById("content");
// console.log(myPass);
// console.log(mySurname);
// console.log(myEmail);
// console.log(myPass);
// console.log(myButton);
// console.log(myContent);

function adding(nn, ss, ee, pp) {
    let s = "";
    s += "<strong>NAME:</strong>" + nn + "  <strong>SURNAME:</strong>" + ss + "  <strong>EMAIL:</strong>" + ee + "  <strong>PASSWORD:[hidden]</strong>";
    myContent.innerHTML = `<p>${s}</p>`;
}


myButton.addEventListener("click", function () {

    let n = myName.value;
    let s = mySurname.value;
    let e = myEmail.value;
    let p = myPass.value;

    if (!(n) || !(s) || !(e) || !(p))
    // if(n=="" || s=="" || e=="" || p=="")
    {
        alert("Please fill out all fields");
    }
    else {
        adding(n, s, e, p);
    }

});






