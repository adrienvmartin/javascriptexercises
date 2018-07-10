function add() {
    let counter = 0;
        for (let i = 0; i < arguments.length; i++) {
            counter += arguments[i];
        }
        console.log(counter);
}

add(4,2,5,8,12);
add(3,2,1);
add(9,12,57,44,32,11,5,0,4,1);