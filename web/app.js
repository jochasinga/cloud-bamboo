var osc = require("osc"),
    express = require("express");

var app = express();
var server = require("http").createServer(app);

server.listen(8000, function() {
    console.log("Server listening on port 8000");
});

app.use(express.static(__dirname + "/public"));

// Create osc.js UDP Port listening on 57121
/*
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121
});

// Listen for incoming OSC bundles
udpPort.on("bundle", function (oscBundle) {
    console.log("An OSC bundle just arrived!", oscBundle);
});

// Open the socket
udpPort.open();

// Send OSC message to, say, Chuck
udpPort.send({
    address: "/s_new",
    args: ["default", 100]
}, "127.0.0.1", 57110);
*/




