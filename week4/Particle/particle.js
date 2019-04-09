class Particle {
  constructor() {

    this.x = width / 2 + random(-1, 1);
    this.y = height / 2 + random(-1, 1);
    this.vx = random(-1, 1);
    this.vy = random(-5, 1);
    this.minX = Number.MIN_VALUE || minX; //the smallest positive numeric value
    this.maxX = Number.MAX_VALUE || maxX; //the maximum numeric value
    this.minY = Number.MIN_VALUE || minY;
    this.maxY = Number.MAX_VALUE || maxY;

    this.alpha = 255;
  }

  show() {
    fill(255, this.alpha);
    noStroke();
    ellipse(this.x, this.y, 16);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;


    if (this.x < this.minX) {
      this.x = this.minX - (this.x - this.minX);
      this.vx = -this.vx;
    }

    if (this.x > this.maxX) {
      this.x = this.maxX - (this.x - this.maxX);
      this.vx = -this.vx;
    }

    if (this.y < this.minY) {
      this.y = this.minY - (this.y - this.minY);
      this.vy = -this.vy;
    }

    if (this.y > this.maxY) {
      this.y = this.maxY - (this.y - this.maxY);
      this.vy = -this.vy;
    }

    this.alpha--;
  }

}
