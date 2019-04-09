class Firework {
  constructor() {
    this.firework = new Particle(random(width), height, true);
    this.exploded = false;
    this.particles = [];
  }

  update() {
    if (!this.exploded) { //if firework exists
      this.firework.applyForce(gravity);
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for(let i = this.particles.length - 1; i >= 0; i--){
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
    }
  }

  explode(){
    for(let i = 0; i < 100; i++){
      let p = new Particle(this.firework.pos.x, this.firework.pos.y);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }
    for(let i = 0; i < this.particles.length; i++){
      this.particles[i].show();
    }
  }
}
