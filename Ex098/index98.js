function sumAdd() {

    let result = 0;

    for (i = 0; i < 1000; i++) {
        result += i;

        if (result > 400) {
            break;
        }
    }

    console.log(result);
}

sumAdd();