var godina = prompt("Enter year:");
var calc = (parseFloat(godina - 4) % 12);

switch (calc) {                                       //SOLUTION WITH SWITCH
    case 0:
        alert("You're a RAT in Chinese Zodiac!");
        break;
    case 1:
        alert("You're an OX in Chinese Zodiac!");
        break;

    case 2:
        alert("You're a TIGER in Chinese Zodiac!");
        break;

    case 3:
        alert("You're a RABBIT in Chinese Zodiac!");
        break;

    case 4:
        alert("You're a DRAGON in Chinese Zodiac!");
        break;

    case 5:
        alert("You're a SNAKE in Chinese Zodiac!");
        break;

    case 6:
        alert("You're a HORSE in Chinese Zodiac!");
        break;

    case 7:
        alert("You're a GOAT in Chinese Zodiac!");
        break;

    case 8:
        alert("You're a MONKEY in Chinese Zodiac!");
        break;


    case 9:
        alert("You're a ROOSTER in Chinese Zodiac!");
        break;

    case 10:
        alert("You're a DOG in Chinese Zodiac!");
        break;


    case 11:
        alert("You're a PIG in Chinese Zodiac!");
        break;


    default:
        alert("ENTER A VALID YEAR!");
}

// if(calc==0)                                                 SOLUTION WITH IF / ELSE
// {
//     alert("You're a RAT in Chinese Zodiac!");
// }

// else if(calc==1)
// {
//     alert("You're aN OX in Chinese Zodiac!");
// }

// else if(calc==2)
// {
//     alert("You're a TIGER in Chinese Zodiac!");
// }


// else if(calc==3)
// {
//     alert("You're a RABBIT in Chinese Zodiac!");
// }


// else if(calc==4)
// {
//     alert("You're a DRAGON in Chinese Zodiac!");
// }


// else if(calc==5)
// {
//     alert("You're a SNAKE in Chinese Zodiac!");
// }


// else if(calc==6)
// {
//     alert("You're a HORSE in Chinese Zodiac!");
// }


// else if(calc==7)
// {
//     alert("You're a GOAT in Chinese Zodiac!");
// }


// else if(calc==8)
// {
//     alert("You're a MONKEY in Chinese Zodiac!");
// }


// else if(calc==9)
// {
//     alert("You're a ROOSTER in Chinese Zodiac!");
// }


// else if(calc==10)
// {
//     alert("You're a DOG in Chinese Zodiac!");
// }


// else if(calc==11)
// {
//     alert("You're a PIG in Chinese Zodiac!");
// }

// else {
//     alert("ENTER A VALID YEAR!");
// }