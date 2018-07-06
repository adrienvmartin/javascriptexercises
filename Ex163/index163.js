function add() {
    let counter = 0;
        for (let i = 0; i < arguments.length; i++) {
            counter += arguments[i];
        }
        console.log(counter);
}

add(4,2);