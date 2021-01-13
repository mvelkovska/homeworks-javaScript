function total(anArray)
{
   let flag=false;
    let totals=0;
    for(let checking of anArray)
    {
    if (!(Number.isInteger(checking)))

    {
       alert("ERROR,SOME ELEMENT/S ARE NOT NUMBERS");
       flag=true;
       break;
    }
    else {
        totals+=checking;    
    }

}
if(flag==false){
return alert(`The sum is: ${totals}`);
}
}


let arr=[];
for(var i=0;i<5;i++){
    arr[i]=parseInt(prompt(`Enter number-${i+1}`));
}

total(arr);