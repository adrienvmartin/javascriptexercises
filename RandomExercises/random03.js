function firstFactorial(num) {
    let result = 1;
    for (i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(result);
}

firstFactorial(8);