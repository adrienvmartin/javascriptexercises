let games = [
    game1 = {
        name: "Crash Bandicoot N. Sane Trilogy",
        price: 1060,
        sold: 20,
        gconsole: "PS4",
        showDetail: function() {
            console.log(`Name: ${game1.name}`);
            console.log(`Price: ${game1.price}`);
            console.log(`Sold: ${game1.sold}`);
            console.log(`Console: ${game1.gconsole}`);
        },
    },
    game2 = {
        name: "Lego Marvel Superheroes",
        price: 700,
        sold: 25,
        console: "XBOX",
        showDetail: function() {
            console.log(`Name: ${game2.name}`);
            console.log(`Price: ${game2.price}`);
            console.log(`Sold: ${game2.sold}`);
            console.log(`Console: ${game2.console}`);
        }
    },
    game3 = {
        name: "Grand Theft Auto V",
        price: 1449,
        sold: 30,
        console: "PS4",
        showDetail: function() {
            console.log(`Name: ${game3.name}`);
            console.log(`Price: ${game3.price}`);
            console.log(`Sold: ${game3.sold}`);
            console.log(`Console: ${game3.console}`);
        }
    },
    game4 = {
        name: "Mortal Kombat XL",
        price: 1190,
        sold: 34,
        console: "PS4",
        showDetail: function() {
            console.log(`Name: ${game4.name}`);
            console.log(`Price: ${game4.price}`);
            console.log(`Sold: ${game4.sold}`);
            console.log(`Console: ${game4.console}`);
        }
    },
    game5 = {
        name: "FIFA 2017",
        price: 890,
        sold: 15,
        console: "PS4",
        showDetail: function() {
            console.log(`Name: ${game5.name}`);
            console.log(`Price: ${game5.price}`);
            console.log(`Sold: ${game5.sold}`);
            console.log(`Console: ${game5.console}`);
        }
    },
]

function showGame(games) {
    console.log(`Name: ${games.name}`);
    console.log(`Price: ${games.price}`);
    console.log(`Sold: ${games.sold}`);
    console.log(`Console: ${games.console}`);
}

games[3].showDetail();