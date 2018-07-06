let player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage) {
        player.energy -= damage;
        if (player.energy <= 0) {
            player.energy = 100;
            player.lives -= 1;
        }
        console.log(`The player ${player.name} has ${player.energy} energy and ${player.lives} lives.`);

    },
    recoverEnergy: function(energyUp) {
        player.energy += energyUp;
        if (player.energy >= 100) {
            player.energy = 100;
            player.lives += 1;
        }
        console.log(`The player ${player.name} has ${player.energy} energy and ${player.lives} lives.`);
    },
    loseLife: function() {
        player.lives--;
        console.log(`The player ${player.name} has ${player.energy} energy and ${player.lives} lives.`);
    },
    recoverLife: function() {
        player.lives++;
        if (player.lives >= 99) {
            player.lives = 99;
        }
        console.log(`The player ${player.name} has ${player.energy} energy and ${player.lives} lives.`);
    },
};

player.name = "Johnny";
player.loseLife();
player.loseEnergy(20);
player.recoverEnergy(15);
player.recoverLife();
player.loseLife();
player.loseEnergy(60);
player.loseEnergy(20);
player.loseEnergy(40);