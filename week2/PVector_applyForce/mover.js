class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  // applyForce(Vector force){
  //   acceleration = force;
  // }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(5);
  }

  display() {
    noStroke();
    fill(200);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

}
