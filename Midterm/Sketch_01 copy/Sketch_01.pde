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
int velocity = 127;

float depth = 900;
float widthOffset;
float heightOffset;
float depthOffset;
PVector mouseClick = new PVector();
PVector posStart = new PVector();
PVector rotStart = new PVector();
PVector cameraPos = new PVector();
PVector cameraRot = new PVector();
float cameraZoom = -800;

void setup() {
  myBus = new MidiBus(this, 0, 1);

  fullScreen(P3D);
  img = loadImage("texture.png");
  smooth();
  
  widthOffset = width/2;
  heightOffset = height/2;
  depthOffset = depth/2;
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
    particles.add(p); 
    println(velocity);
  }
}

void mousePressed() {
  if (mouseButton == LEFT) {
    rotStart.set(cameraRot.x, cameraRot.y);
  } else if (mouseButton == CENTER) {
    posStart.set(cameraPos.x, cameraPos.y);
  } else {
    zoomStart = cameraZoom;
  }
  mouseClick.set(mouseX, mouseY);
}


// Camera controls
void mouseDragged() {
  if (mouseButton == LEFT) {
    cameraRot.x = rotStart.x+(mouseX-mouseClick.x);
    cameraRot.y = rotStart.y+(mouseY-mouseClick.y);
  } else if (mouseButton == CENTER) {
    cameraPos.x = posStart.x+(mouseX-mouseClick.x);
    cameraPos.y = posStart.y+(mouseY-mouseClick.y);
  } else if (mouseButton == RIGHT) {
    cameraZoom = zoomStart+(mouseX-mouseClick.x)-(mouseY-mouseClick.y);
  }
}
