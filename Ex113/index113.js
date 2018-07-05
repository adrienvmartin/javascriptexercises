function getShapePerimeter(base, height) {
    let perimeter = null;
    if (base == height) {
        perimeter = 4 * base;
    }

    else if (base != height) {
        perimeter = 2 * (base + height);
    }

    if (perimeter > 100) {
        console.log("Your perimeter is too big");
    }

    else {
        console.log(`The shape perimeter is ${perimeter}`);
    }
}

getShapePerimeter(5,5);