let mutants = [
    "Professor X",
"Cyclops",
"Iceman",
"Angel",
"Magneto",
"Beast",
"Phoenix",
"Logan",
"Gambit",
];

let newMutants = [];

mutants.forEach(function(mutant) {
    if (mutant == "Iceman" || mutant == "Logan" || mutant == "Phoenix") {
        newMutants.push(mutant);
    }
});

/* Old version 

mutants.forEach(function(mutant) {
    if (mutant == "Iceman") {
        newMutants.push(mutant);
    }
    else if (mutant == "Logan") {
        newMutants.push(mutant);
    }

    else if (mutant == "Phoenix") {
        newMutants.push(mutant);
    }
}); */

// newMutants.join();
console.log(newMutants.toString());