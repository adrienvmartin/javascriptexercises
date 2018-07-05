let fibonacci = function () {
    let n = 50;
    let f = 0;
    let increment1 = -1;
    let increment2 = 1;

    while (f < n) {
        f = increment1 + increment2;
        increment1 = increment2;
        increment2 = f;
        console.log(f);
    }
}

fibonacci();