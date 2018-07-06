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
]

function showGames() {
    for (let i = 0; i < games.length; i++) {
        console.log(`Name: ${games[i]['name']}`);
        console.log(`Price: ${games[i]['price']}`);
        console.log(`Sold: ${games[i]['sold']}`);
        console.log(`Console: ${games[i]['console']}`);
        console.log("\n");
    }
}

showGames();