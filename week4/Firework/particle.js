class Particle {
  constructor(x, y, firework) {
    this.pos = createVector(x, y);
    this.radius = random(0, 5);
    this.firework = firework;
    this.lifespan = 255;
    this.incr = 0.001;
    this.theta;

    if (this.firework) {
      this.vel = createVector(0, random(-10, -15));
      this.acc = createVector(random(0, 1, 1.5), 0);
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
    }
    this.acc = createVector(0, 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.firework) {
      this.vel.mult(0.8);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    if (!this.firework) {
      fill(255, this.lifespan);
      noStroke();
    } else {
      fill(255);
      noStroke();
    }

    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }

}
