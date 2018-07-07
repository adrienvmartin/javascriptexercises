let numbers = [];

let result = null;

function numbersResult() {
    for (i = 0; i < 1001; i++) {
        numbers.push(i);
        result += numbers[i];
    }
    
    if (result == 500500) {
        console.log(numbers + "\n");
        console.log(result + "\n" + `The result ${result} is correct!`);
    }

    else {
        console.log(`Error!`);
    }
}

numbersResult();