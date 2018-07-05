let counter = 1;
let result = null;

function sumOutput(firstNumber, lastNumber) {

    counter = firstNumber;

    while (counter < lastNumber) {
        result += counter;
        counter++;
    }

    console.log(result);
}

sumOutput(1,11);

/* Dan's version

function countUp() {
    inputNum = ;
}

while (inputNum <= 10) {
    if (inputNum % 2 === 0) {
        console.log(inputNum);
    }
    inputNum++;
}

countUp();
countUp();
countUp();

*/