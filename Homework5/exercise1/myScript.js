let firstParagraph = document.getElementsByTagName("p")[0];
firstParagraph.innerText += "--I am the first paragraph!--";

let secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.innerText+= secondParagraph.innerText + "--I am the second paragraph!--";

let firstHeading = document.getElementById("myTitle");
firstHeading.innerText+="--I am the first h1 heading!--";

let lastDiv=document.getElementsByTagName("div")[2];
let secondHeading = lastDiv.children[1];
secondHeading.innerText += "--I am the second h1 heading!--";

let thirdHeading = secondHeading.previousElementSibling;
thirdHeading.innerText += "--I am the h3 heading!--";

