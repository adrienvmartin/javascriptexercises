let firstPerson = [
    "John",
    "Smith",
    "123 Main Street",
    28
];

let secondPerson = [
    "Jane",
    "Doe",
    "543 Other Street",
    29

];

let resultOne = firstPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

let resultTwo = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

if (resultOne == resultTwo) {
    console.log("They are the same person");
}

else {
    console.log("They are not the same person");
}