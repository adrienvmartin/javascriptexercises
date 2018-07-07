let numbers = [];

let result = null;

function numbersResult() {
    for (i = 0; i < 1001; i++) {
        numbers.push(i);
        result += numbers[i];
    }
    
    if (result == 500500) {
        console.log(`The result ${result} is correct!`);
    }

    else {
        console.log(`Error!`);
    }
}

numbersResult();