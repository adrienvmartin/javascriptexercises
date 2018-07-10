const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
    capitalize: function (string) {
        let newstring = string.charAt(0).toUpperCase() + string.slice(1);
        return newstring;
    }
};

console.log(user.capitalize(user.username));
console.log(user.password.replace(/1960/, " "));