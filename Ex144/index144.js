const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
};

console.log(user);

function capitalize(string) {
    let newstring = string.charAt(0).toUpperCase() + string.slice(1);
    return newstring;
}

// Alt version: console.log(user.username.slice(0,1).toUpperCase() + user.username.slice(1));

console.log(capitalize(user.username));
console.log(user.password.replace(/1960/, " "));