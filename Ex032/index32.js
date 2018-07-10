let height = 10;
let base = 4;

let perimeter = 2 * (height + base);
let area = height * base;

let perMessage = `The perimeter is 2 * height + base, or 2 * ${height} + ${base}, for a total of ${perimeter}`;
let areaMessage = `The area is height times base, or ${height} * ${base}, for a total of ${area}`;

console.log(perMessage + "\n" + areaMessage);