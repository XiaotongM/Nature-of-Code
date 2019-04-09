let m;

function setup() {
  createCanvas(640, 320);
  m = new Mover();
}

function draw() {
  background(255);

  // m.applyForce(f);

  m.update();
  m.edges();
  m.display();
}
