function fullNames(firstName,lastName)
{
let newArray=[];

for(let i=0;i<firstName.length;i++){

 let numbering=i+1;
 newArray[i]=numbering+"."+firstName[i]+" "+lastName[i];


}
console.log(newArray);


}

let first=["Ana","Marijana","Marko","Alek"];

let last=["Aneva","Marijanova","Markov","Aleksov"];


fullNames(first,last);