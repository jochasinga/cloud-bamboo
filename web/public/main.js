window.addEventListener("load", function() {
    "use strict"

    var socket = io();

    var Engine = famous.core.Engine;
    var Surface = famous.core.Surface;
    var GridLayout = famous.views.GridLayout;

    var mainContext = Engine.createContext();

    var grid = new GridLayout({
	dimensions: [4, 2]
    });

    var surfaces = [];
    var notes = ["C", "D", "E","F", "G", "A", "B", "C^"];

    grid.sequenceFrom(surfaces);

    for(var i=0; i<8; i++) {
	surfaces.push(new Surface({
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
	dim(i, notes[i]);
	back(i, notes[i])

    }

    function dim(surfaceIndex, note) {
	surfaces[surfaceIndex].on("touchstart", function() {

	    this.setProperties({
		opacity: 0.5
	    });

	    socket.emit(note);
	    console.log("socket emitted %s!", note);
	});
    }

    function back(surfaceIndex, note) {
	surfaces[surfaceIndex].on("touchend", function() {
	    this.setProperties({
		opacity: 1
	    });

	    socket.emit("lifted");
	});
    }

    mainContext.add(grid);

});





