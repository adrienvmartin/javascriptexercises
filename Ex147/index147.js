let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
};

function shouldOpenBatCave(user) {
    if (user.username === 'batman' && user.password === 'Alfred1960KPO!') {
        return true;
    }
    else {
        return false;
    }
}

if (shouldOpenBatCave(user) === true) {
    console.log("Welcome back, Batman!");
}

else {
    console.log("Sorry, you can't enter the Batcave, try again");
}

shouldOpenBatCave(user);