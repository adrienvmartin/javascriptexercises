function sort(number1, number2, number3, highToLow) {
    let numbers = [number1, number2, number3];
    if (highToLow == true) {
        numbers.sort(function (a, b) { return b - a });
        console.log(numbers);
    }
    else if (highToLow == false) {
        numbers.sort(function (a, b) { return a - b });;
        console.log(numbers);
    }
}

sort(19, 48, 32, false);