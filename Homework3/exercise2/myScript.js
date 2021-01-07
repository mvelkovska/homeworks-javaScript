function myFunction(a)
{
    let returnType=typeof(a);
    return returnType;
}

alert("This is UNDEFINED: " +myFunction()); 

alert("This is NUMBER: " +myFunction(22)); 

alert("This is BOOLEAN: " +myFunction(true)); 

alert("This is STRING: " +myFunction("Hello World!")); 

alert("This is OBJECT: " +myFunction(null)); 