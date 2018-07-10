const user = {
    username: 'batman',
    password: 'ALFRED1960ROCKS!',
};

function shouldBatCaveOpen(username, password) {
    if (username == 'batman' && password == 'ALFRED1960ROCKS!') {
        return true;
    }
    else {
        return false;
    }
}

if (shouldBatCaveOpen(user.username, user.password) == true) {
    console.log("Welcome back, Batman!");
}
else {
    console.log("Sorry, you can't access the Batcave, try again");
}