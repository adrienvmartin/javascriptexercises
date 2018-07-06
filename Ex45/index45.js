let playerName = "Patrick Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg Jets, & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, go Winnipeg!";

let playerResult = playerName.slice(0,16);
let teamsResult = teams.slice(46,50);
let messageResult = message.slice(12,20);
let messageResult2 = message.slice(34,38);

let template = `${playerResult} ${messageResult} ${teamsResult} player${messageResult2} ${teamsResult}!`;

console.log(template);