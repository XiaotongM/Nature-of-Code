var particles = [];

function setup() {
  createCanvas(1920, 1080);
  frameRate(30);
  background(255);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
  stroke(random(255));
}

function draw() {
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.history = [];
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);
    }
    var v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
  }
  show() {
    let pSize1 = 0;
    pSize1 += random(-20, 20);
    let pSize2 = 0;
    pSize2 += random(-30, 30);
    stroke(0, 30);
    noFill();
    ellipse(this.x, this.y, pSize1, pSize1);
    ellipse(this.x, this.y, pSize2, pSize2);
  }
}
