function biggerNumber(firstNumber, secondNumber) {
    if (typeof firstNumber != 'number' && typeof secondNumber != 'number') {
        console.log("These are not numbers!"); }

    else if (typeof firstNumber != 'number' || typeof secondNumber != 'number') {
            console.log("One of these is not a number!");
        }

    else if (typeof firstNumber == 'number' && typeof secondNumber == 'number') {
    
        if (firstNumber > secondNumber) {
            console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
        }
        else if (secondNumber > firstNumber) {
            console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
        }

        else if (firstNumber == secondNumber) {
            console.log(`Both numbers are ${firstNumber}`);
        }
    }

}

biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);
biggerNumber("two","three");
biggerNumber("yellow","green");
biggerNumber("blue",5);