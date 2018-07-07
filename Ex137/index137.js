let numbers = [];

for (i = 1; i < 1001; i++) {
    numbers.push(i);
}

let numbersModified = [];

numbers.forEach(function (number) {
    number += 10;
    numbersModified.push(number);
})

function printNumbers() {
    
    for (i = 0; i < 1000; i++) {
        console.log(`Index: ` + numbers.indexOf(i+1) + `, Original value: ` + numbers[i] + `, Incremented value: ` + numbersModified[i]);
    }
}

printNumbers();

// Note to self: using countes with index is sketchy