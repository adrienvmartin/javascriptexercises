let user = {
    username: null,
    password: null,
    greet: function() {
        console.log(`Hello, I'm user ${username}`);
    },
    updateUsername: function(newuser) {
        username = newuser;
    },
    updatePassword: function(newpass) {
        password = newpass;
    }
}

user.updateUsername("batman");
user.updatePassword("jokersux");
user.greet();