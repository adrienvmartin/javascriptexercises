function showNumbers(startNumber, endNumber) {

    let counter = startNumber;
    let stopNumberUp = (endNumber - 1);
    let stopNumberDown = (endNumber + 1);

    if (typeof startNumber == "number" && typeof endNumber == "number") {
        if (counter < endNumber) {
            while (counter < endNumber) {
                counter++;
                console.log(counter);
                if (counter == stopNumberUp) {
                    break;
                }
            }
        }

        else if (counter > endNumber) {
            while (counter > endNumber) {
                counter--;
                console.log(counter);
                if (counter == stopNumberDown) {
                    break;
                }
            }
        }

        else if (counter == endNumber) {
            console.log(counter);
        }

    }

    else {
        console.log("Error with your input");
    }
}

showNumbers(17, 4);