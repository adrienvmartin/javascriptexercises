function checkLongestWord(string) {
    let strSplit = string.split(" ");
    let counter = 0;
    let longestWord = null;
    for (i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > counter) {
            longestWord = strSplit[i];
        }
    }
    console.log(`The longest word is: ${longestWord}`);
}

checkLongestWord("This is a test of the string length checker");

/* Old non-working version
function longestWord(string) {
    let characters = Array.from(string);
    let newString = [];
    let counter = 0;
    function validate(strValue) {
        let objRegExp = /^[a-z]+$/;
        return objRegExp.test(strValue);
    }
    function wordCounter() {
        for (let i = 0; i < characters.length; i++) {
            if (validate(string) == true) {
                newString[counter].push(characters[i]);
            }
            else {
                counter++;
                wordCounter();
            }
        }
    }

    console.log(characters);

}

longestWord("Hey this is a string"); */