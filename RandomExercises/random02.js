function longestWord(string) {
    let characters = Array.from(string);
    let newString = [];
    let counter = 0;
    function validate(strValue) {
        let objRegExp  = /^[a-z]+$/;
        return objRegExp.test(strValue);
      }
    function wordCounter() {
        for (let i = 0; i < characters.length; i++) {
            if (validate == true) {
                newString[counter].push(characters[i]);
            }
            else {
                counter++;
                wordCounter();
            }
        }
    }
    console.log(letters);

}

longestWord("Hey this is a string");