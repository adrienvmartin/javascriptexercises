let tripExpenses = [
    50,
    100,
    20
];

let budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(budget);