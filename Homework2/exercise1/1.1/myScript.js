var ar=[];
var maks=0;
for(var i=0;i<5;i++){
ar[i]=prompt("Input number:");
if(ar[i]>maks)
 {
         maks=parseInt(ar[i]);
}
 }

alert("The maximum number is:" +maks);
 console.log("The maximum number is:" +maks);