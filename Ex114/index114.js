function revert(str) {
    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    console.log(joinArray);
}

revert("Hello, this is a string!");