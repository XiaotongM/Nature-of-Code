import themidibus.*;
MidiBus myBus;

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
int channel = 0;
int pitch = 40;
int velocity = 127;


Walker w;

void setup() {
  background(255);
  size(400, 300);
  // Create a walker object
  w = new Walker();
  frameRate(random(40));
  myBus = new MidiBus(this, 0, 1);
}

void draw() {

  // Run the walker object
  w.step();
  w.render();
}
