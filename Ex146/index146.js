let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
};

function shouldOpenBatCave(username, password) {
    if (username == 'batman' && password == 'Alfred1960KPO!') {
        return true;
    }
    else {
        return false;
    }
}

if (shouldOpenBatCave == true) {
    console.log("Welcome back, Batman!");
}

else {
    console.log("Sorry, you can't enter the Batcave, try again");
}