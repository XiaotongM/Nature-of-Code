class Particle{

  constructor(){
    this.posX = 0;
    this.posY = random(-50, 0);
    this.size = random(0.5, 1);
    this.incr = 0.001;
  }

  update(){
    this.incr += 0.0002;
    //noise(x, [y], [z])
    let n = noise(this.posX * 0.005, this.posY * 0.01, this.incr);
    let PRLN = n * TWO_PI / 1.4;

    this.posX += random(-0.2, 0.2) * cos(PRLN);
    this.posY += 1.5 * sin(PRLN);
  }

  display(){
    ellipse(this.posX, this.posY, this.size);
  }

  borders() {
    if (this.posX < 135) {
      this.posX = random(135, width-135);
    }
    if (this.posX > width-135 ) {
      this.posX = random(135, width-135);
    }
    if (this.posY < 105 ) {
      this.posY = random(105, height-105);
    }
    if (this.posY > height-105) {
      this.posY = random(105, height-105);
    }
  }

}
