function meaningOfLife() {
    return `The meaning of life is: `
}

const data = [42, true, meaningOfLife()];

if (data[1] == true) {
    console.log(data[2] + data[0]);
}