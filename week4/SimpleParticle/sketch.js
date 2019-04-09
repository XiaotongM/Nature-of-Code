let particles = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);
  for(i = 0; i < particles.length; i++){
    particles[i].show();
    particles[i].update();
    if (particles[i].finished()){
      particles.splice(i, 1); //splice(list, value, position)
    }
  }
}

class Particle{
  constructor(){
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);//velocity
    this.vy = random(-5, 1);
    this.alpha = 255;
  }

  show(){
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  finished(){
    this.alpha < 0;
  }
}
