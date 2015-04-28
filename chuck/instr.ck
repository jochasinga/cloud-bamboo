// Create an OscRecv object
OscRecv recv;

// Tell the OscRecv object the port
3333 => recv.port;

// Tell the OscRecv object to start listening on given port
recv.listen();

//recv.event("my/note, i") @=> OscEvent c;
recv.event("my/note, i") @=> OscEvent  c;

// connect an instrument to the sound card
Wurley inst => dac;	 
//Std.mtof( 60 ) => inst.freq; // set the note to middle-C		

<<<"Set up instrument">>>;

while ( true ) {

      c => now; // wait for events to arrive

      // grab the next message from the queue

      <<<"received">>>;	   
            
      c.nextMsg();
      c.getInt() => int note;

      Std.mtof( note ) => inst.freq;

      inst.noteOn( 0.5 );
      1::second => now;

}
