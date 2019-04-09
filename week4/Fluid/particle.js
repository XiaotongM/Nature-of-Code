class Particle{
  constructor(){
    this.posX = 0;
    this.posY = 0;
    this.incr = 0.001;
    this.theta = 0.001;
  }

  update(){
    this.incr += 0.008;
    this.theta = noise(this.posX * 0.006, this.posY * 0.004, this.incr) * TWO_PI;
    this.posX += 2 * cos(this.theta);
    this.posY += 2 * sin(this.theta);

  }

  show() {
  fill(255, 0, 0);
  ellipse(this.posX, this.posY, 5, 5);
}

  wrap(){
    if (this.posX < 0) this.posX = width;
    if (this.posX > width ) this.posX =  0;
    if (this.posY < 0 ) this.posY = height;
    if (this.posY > height) this.posY =  0;
  }

}
