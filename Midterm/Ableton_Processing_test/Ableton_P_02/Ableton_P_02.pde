import themidibus.*;
MidiBus myBus;

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
float x = 100;
float y = 100;
float xspeed = 2.5;
float yspeed = 2;

int channel = 0;
int pitch = 40;
int velocity = 127;

void setup() {
  size(800, 200);
  smooth();
  
  myBus = new MidiBus(this, 0, 1);
}

void draw() {
  background(255);


  // Add the current speed to the position.
  x = x + xspeed;
  y = y + yspeed;
  
  pitch = int(random(40,81));

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
    myBus.sendNoteOn(channel, pitch, velocity);
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
    myBus.sendNoteOn(channel, pitch, velocity);
  }


  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, y, 48, 48);
}


void noteOn(int channel, int pitch, int velocity) {
  println();
  println("Note On:" + " Channel: "+channel + " Pitch: "+pitch + " Velocity: "+velocity);
  println("--------");
  
}

void noteOff(int channel, int pitch, int velocity) {
  
}
