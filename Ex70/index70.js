let number = 1;
let result = null;

while (number < 1001) {
    if (number % 2 != 0)
        {
            result += number;
            number++;
        }
        else {
            number++;
        }
}

console.log(result);