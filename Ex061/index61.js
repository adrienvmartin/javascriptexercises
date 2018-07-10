let weekdayNumber = 8;
let dayOfWeek;

switch (weekdayNumber) {
    case 1:
    dayOfWeek = "Monday";
    break;

    case 2:
    dayOfWeek = "Tuesday";
    break;

    case 3:
    dayOfWeek = "Wednesday";
    break;

    case 4:
    dayOfWeek = "Thursday";
    break;
    
    case 5:
    dayOfWeek = "Friday";
    break;

    case 6:
    dayOfWeek = "Saturday";
    break;

    case 7:
    dayOfWeek = "Sunday";
    break;

    default:
    console.log("Please enter a number between 1 and 7");
}

let message = `Today it's ${dayOfWeek}`;
console.log(message);



/* If-Else version

if (weekdayNumber == 1) {
    console.log("Today it's Monday");
}
else if (weekdayNumber == 2) {
    console.log("Today it's Tuesday");
}

else if (weekdayNumber == 3) {
    console.log("Today it's Wednesday");
}

else if (weekdayNumber == 4) {
    console.log("Today it's Thursday");
}

else if (weekdayNumber == 5) {
    console.log("Today it's Friday");
}

else if (weekdayNumber == 6) {
    console.log("Today it's Saturday");
}

else if (weekdayNumber == 7) {
    console.log("Today it's Sunday");
}

else {
    console.log("Please enter a number between 1 and 7");
} */