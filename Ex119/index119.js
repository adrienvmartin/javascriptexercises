const data = [
    42, 
    true, 
    function() { console.log('The meaning of life is: ') }
];

const message = data[2];
const number = data[0];

if (data[1] == true) {
    console.log(message);
    console.log(number);
}