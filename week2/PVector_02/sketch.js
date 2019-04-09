function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);
  noFill();

  translate(width / 2, height / 2);
  ellipse(0, 0, 4, 4);

  mouse = createVector(mouseX, mouseY);
  center = createVector(width / 2, height / 2);
  mouse.sub(center);
  line(0, 0, mouse.x, mouse.y);


//same function
  mouse.normalize();
  mouse.mult(50);

  mouse.setMag(50);
}
