// Create an OscRecv object
OscRecv recv;

// Tell the OscRecv object the port
6449 => recv.port;

// Tell the OscRecv object to start listening on given port
recv.listen();

recv.event("my/note") @=> OscEvent c;

Wurley inst => dac;	 
Std.mtof( 60 ) => inst.freq; // set the note to middle-C	

while ( true ) {

      c => now; // wait for events to arrive

      <<<"received">>>;	   
    
      // connect an instrument to the sound card

      inst.noteOn( 1 );
      1::second => now;
}
