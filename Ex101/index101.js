let name = null;
let age = null;
let phone = null;
let street = null;
let postal = null;
let married = null;

function showUser(name, age, phone, street, postal, married) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Phone Number: ${phone}`);
    console.log(`Address: ${street}`);
    console.log(`Postal code: ${postal}`);
    console.log(`Married: ${married}`);
}

showUser("Santa Claus", 150, "555-1234", "101 North Pole Lane", "H0H 0H0", true);