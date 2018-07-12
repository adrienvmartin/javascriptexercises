function reverseString(str) {
    stringSlice = str.split("");
    reversedArray = stringSlice.reverse();
    newString = reversedArray.join("");
    console.log(newString);
}

reverseString("Hello, this is a test");