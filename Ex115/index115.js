function getLongerText(string1, string2) {
    if (string1 > string2) {
        console.log(string1);
    }

    else if (string2 > string1) {
        console.log(string2);
    }

    else if (string1 == string2) {
        console.log("Both strings are the same length");
    }

    else {
        console.log("Error with your input");
    }
}

getLongerText("this is a very long string");