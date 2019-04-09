let b;

function setup() {
  createCanvas(640, 360);
  b = new Ball();
}

function draw() {
  background(255);
  b.update();
  b.display();
}
