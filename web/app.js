var osc = require("node-osc");
var express = require("express");

var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var port = process.env.PORT || 8080;
var oscPort = process.env.OSCPORT || 3333;

var client = new osc.Client('127.0.0.1', oscPort);

server.listen(port, function() {
    console.log("Server listening on port %d", port);
});

app.use(express.static(__dirname + "/public"));

io.on("connection", function(socket) {

    console.log("Connected!");

    socket.on("C", function() {
	client.send("my/note", 60);
	console.log("Sent [%s] to Chuck on port %d", "C", oscPort);
    });

    socket.on("D", function() {
        client.send("my/note", 62);
        console.log("Sent [%s] to Chuck on port %d", "D", oscPort);
    });

    socket.on("E", function() {
        client.send("my/note", 64);
        console.log("Sent [%s] to Chuck on port %d", "E", oscPort);
    });

    socket.on("F", function() {
        client.send("my/note", 65);
        console.log("Sent [%s] to Chuck on port %d", "F", oscPort);
    });

    socket.on("G", function() {
        client.send("my/note", 67);
        console.log("Sent [%s] to Chuck on port %d", "G", oscPort);
    });

    socket.on("A", function() {
        client.send("my/note", 69);
        console.log("Sent [%s] to Chuck on port %d", "A", oscPort);
    });

    socket.on("B", function() {
        client.send("my/note", 71);
        console.log("Sent [%s] to Chuck on port %d", "B", oscPort);
    });

    socket.on("C^", function() {
        client.send("my/note", 72);
        console.log("Sent [%s] to Chuck on port %d", "C^", oscPort);
    });

});







