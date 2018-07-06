function evenNumber(number) {
    return number % 2 == 0;
}

function sumEven() {
    let evenCounter = 0;
    let result = 0;
    for (let counter = 0; counter < 5; counter++) {
        if (counter % 2 == 0) {
            result += counter;
        }
    }
    console.log(result);
}

sumEven();