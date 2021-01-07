
var a=parseInt(prompt("Input number 1:"));
var b=parseInt(prompt("Input number 2:"));
var c=parseInt(prompt("Input number 3:"));
var d=parseInt(prompt("Input number 4:"));
var e=parseInt(prompt("Input number 5:"));

if(a>b && a>c && a>d && a>e)
{
   
    alert("The maximum number is:"+a);
}

else if(b>a && b>c && b>d && b>e)
{
    

    alert("The maximum number is:"+b);
}

else if(c>a && c>b && c>d && c>e)
{
  
    alert("The maximum number is:"+c);
}


else if(d>a && d>b && d>c && d>e)
{
    
    alert("The maximum number is:"+d);
}


else
{
    
    alert("The maximum number is:"+e);
}