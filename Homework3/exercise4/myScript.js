function printing(girls,boys)
{ 
//    2^2=4
    // 00  - girls <10 and boys<10
    // 01  - girls <10 and boys>10
    // 10  - girls >10 and boys<10
    // 11  - girls > 10 and boys>10

if((girls>=0 && girls<=9) && (boys>=0 && boys<=9)){        //  00
console.log("0"+girls + " girls " + "0" + boys + " boys "); 
}


else if((girls>=0 && girls<=9) && (boys>=10)){        //  01
    console.log("0"+girls + " girls " + boys + " boys "); 
    }


    else if((girls>=10) && (boys>=0 && boys<=9)){        //  10
        console.log(girls + " girls " + "0" + boys + " boys "); 
        }


     else
     {
        console.log(girls + " girls " + boys + " boys ");  //11
     }

        }

printing((parseInt(prompt("Enter number of girls:"))),(parseInt(prompt("Enter number of boys:"))));

// printing(5,6); 00
// printing(5,15);  01
// printing(15,5);  10
// printing(17,18); 11 