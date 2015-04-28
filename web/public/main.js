window.addEventListener("load", function() {
    "use strict"

    // osc
    var oscPort = new osc.WebSocketPort({
	url: "ws://localhost:6449"
    });

    var Engine = famous.core.Engine;
    var Surface = famous.core.Surface;
    var GridLayout = famous.views.GridLayout;

    var mainContext = Engine.createContext();

    var grid = new GridLayout({
	dimensions: [4, 2]
    });

    var surfaces = [];
    var notes = ["C", "D", "F","E", "G", "A", "B", "C"];

    grid.sequenceFrom(surfaces);

    for(var i=0; i<8; i++) {
	surfaces.push(new Surface({
	    //content: "panel " + (i + 1),
	    content: notes[i],
	    size: [undefined, undefined],
	    properties: {
		backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
		color: "white",
		lineHeight: '200px',
		textAlign: 'center',
		fontFamily: "Helvetica"
	    }
	}));
	surfaces[i].setContent('<h1>' + notes[i] + '</h1>');
	dim(i);
	back(i);
    }

    function dim(surfaceIndex) {
	surfaces[surfaceIndex].on("mousedown", function() {
	    this.setProperties({
		opacity: 0.5
	    });
	    // send osc
	    oscPort.send({
		address: "my/note",
	    });
	    console.log("sent OSC!");
	});
    }

    function back(surfaceIndex) {
	surfaces[surfaceIndex].on("mouseup", function() {
	    this.setProperties({
		opacity: 1
	    });
	    // send osc
	    oscPort.send({
		address: "my/note",
	    });
	    console.log("sent OSC!");
	});
    }

    mainContext.add(grid);

});





