var fs = require('fs');
var data = fs.readFileSync('words.json');
var players = JSON.parse(data);
console.log(players);


console.log("server is starting");

var express = require('express');

var app = express();

var server = app.listen(3000, listening);
// app.get("/toppings", function(req, res) {
//     res.json({message: "hello from the server"});
// });
function listening() {
    console.log("listening...");
}

app.use(express.static('website'));

app.get('/add/:player/:number', addPlayer);

function addPlayer(request, response) {
    var data = request.params;
    var player = data.player;
    var number = Number(data.number);
    var reply;
    if (!number) {
        reply = {
            msg: "Number is required."
        }
    } else {
        players[player] = number;
        var data = JSON.stringify(players, null, 2);
        fs.writeFile('words.json', data, finished);
        function finished(err) {
        console.log('all set.');
        }
    reply = {
        msg: "Thank you for your word."
    }
}

    response.send(reply);
    // response.send("I love " + data.flower + " too");
}

app.get('/all', sendAll);

function sendAll(request, response) {
    response.send(players);
}

app.get('/search/:word/', searchPlayer);

function searchPlayer(request, response) {
    var player = request.params.player;
    var reply;
    if (players[player]) {
        reply = {
        status: "found",
        player: player,
        number: players[player]
    }
} else {
    reply = {
        status: "not found",
        player: player,
        number: players[player]
    }
}

response.send(reply);
}