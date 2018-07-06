let gconsole = "PS4";

let budget = null;

let games = [
    {
        name: "Crash Bandicoot N. Sane Trilogy",
        price: 1060,
        sold: 20,
        console: "PS4",
    },
    {
        name: "Lego Marvel Superheroes",
        price: 700,
        sold: 25,
        console: "XBOX",
    },
    {
        name: "Grand Theft Auto V",
        price: 1449,
        sold: 30,
        console: "PS4",
    },
    {
        name: "Mortal Kombat XL",
        price: 1190,
        sold: 34,
        console: "PS4"
    },
    {
        name: "FIFA 2017",
        price: 890,
        sold: 15,
        console: "PS4",
    },
];

function showGames() {
    for (let i = 0; i < games.length; i++) {
        if (games[i].console == gconsole) {
        console.log(`Name: ${games[i].name}`);
        console.log(`Price: ${games[i].price}`);
        console.log(`Sold: ${games[i].sold}`);
        console.log(`Console: ${games[i].console}`);
        console.log("\n"); 
        budget += games[i].price;
    }
       
    }
    console.log(`I need ${budget} CAD to buy all these great PS4 games!`);
}

let gameNames = [
    games[0].name,
    games[1].name,
    games[2].name,
    games[3].name,
    games[4].name,
];

let gamePrices = [
    games[0].price,
    games[1].price,
    games[2].price,
    games[3].price,
    games[4].price,
];

showGames();

console.log(gameNames);
console.log(gamePrices);