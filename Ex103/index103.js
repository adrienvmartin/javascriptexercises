let evenNumbers = function() {
    number = 1;
    while (number < 101) {
        if (number % 2 == 0)
        {
            console.log(number);
            number++;
        }
        else {
            number++;
        }
    }
}

evenNumbers();