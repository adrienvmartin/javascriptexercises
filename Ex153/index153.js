let arithmetic = {
    add: function (num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            console.log("Error!");
        }
        else {
            result = num1 + num2;
            console.log(result);
        }

    },
    subtract: function (num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            console.log("Error!");
        }
        else {
            result = num1 - num2;
            console.log(result);
        }
    },
    multiply: function (num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            console.log("Error!");
        }
        else {
            result = num1 * num2;
            console.log(result);
        }
    },
    divide: function (num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            console.log("Error!");
        }
        else {
            result = num1 / num2;
            console.log(result);
        }
    },
    remainder: function (num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            console.log("Error!");
        }
        else {
            result = num1 % num2;
            console.log(result);
        }
    }
};


arithmetic.add(2, 10);
arithmetic.subtract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);