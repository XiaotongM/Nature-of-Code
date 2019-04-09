import themidibus.*;
MidiBus myBus;

//array of particle can be delete and add
//arraylist of Particle object
//name is particles 
ArrayList<Particle> particles = new ArrayList<Particle>();
Particle p; 
PImage img;

int channel = 0;
int pitch = 40;
int soundVelocity = 127;

void setup() {
  myBus = new MidiBus(this, 0, 1);

  //fullScreen(P3D);
  size(720, 360, P3D);
  img = loadImage("texture.png");
  smooth();
}


void draw() {
  blendMode(ADD);
  background(0);

  for (int i = 0; i < particles.size(); i++) {
    for (int j = 0; j < particles.size(); j++) {
      if (i != j) {
        if (random(1) < 0.1) {
          PVector f = particles.get(j).attract(particles.get(i));
          particles.get(i).applyForce(f);
        }
        particles.get(i).connect(particles.get(j));
      }
    }
    particles.get(i).update();
    //particles.get(i).render();
    particles.get(i).show();
    particles.get(i).checkEdges();
    if (p.isDead()) {
      particles.remove(i);
    }
  }

  p = new Particle();
  if (random(1) < 0.01) {
    if (mouseX > 0 && mouseX < 200) {
      myBus.sendNoteOn(channel, 60, soundVelocity);
    } else if (mouseX >= 200 && mouseX < 400) {
      myBus.sendNoteOn(channel, 70, soundVelocity);
    } else if (mouseX >= 400 && mouseX < 600) {
      myBus.sendNoteOn(channel, 80, soundVelocity);
    }
    particles.add(p);
  }
}


void mousePressed(){
  
}
