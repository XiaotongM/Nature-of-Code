import themidibus.*;
MidiBus myBus;


Mover[] movers = new Mover[20];
Attractor a;

float angle = 0;

float depth = 1000;
float widthOffset;
float heightOffset;
float depthOffset;
PVector mouseClick = new PVector();
PVector posStart = new PVector();
PVector rotStart = new PVector();
float zoomStart = 0;
PVector cameraPos = new PVector();
PVector cameraRot = new PVector();
float cameraZoom = -800;

int channel = 0;
int pitch = 40;
int soundVelocity = 127;

void setup() {
  myBus = new MidiBus(this, 0, 1);
  size(720, 360, P3D);
  smooth();
  widthOffset = width/2;
  heightOffset = height/2;
  depthOffset = depth/2;

  background(255);
  for (int i = 0; i < movers.length; i++) {
    movers[i] = new Mover(random(0.1, 2), random(-width/2, width/2), random(-height/2, height/2), random(-100, 100));
  }
  a = new Attractor();
}

void draw() {
  background(0);
  //sphereDetail(8);
  lights();

  pushMatrix();
  translate(width/2, height/2, depth/2);
  translate(cameraPos.x, cameraPos.y, cameraZoom);
  rotateY(radians(cameraRot.x));
  rotateX(radians(-cameraRot.y));
  a.display();

  for (int i = 0; i < movers.length; i++) {
    PVector force = a.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
  }
  popMatrix();
}

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
  
  //pitch = int(random(40,81));
  float pitch = map(mouseX, 0, width, 40, 100);
  myBus.sendNoteOn(channel, int(pitch), soundVelocity);
  
  //pitch = int(random(40,81));
  //myBus.sendNoteOn(channel, 60, soundVelocity);

}

void mousepressed(){
}
