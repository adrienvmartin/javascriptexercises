function even(number) {
    return number % 2 == 0;
}

let num = 12;

if (even(num) == true) {
    console.log(`The number ${num} is even`);
}

else {
    console.log(`The number ${num} is odd`);
}