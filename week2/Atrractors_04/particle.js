class Particle{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.prev = createVector(x, y);
    this.vel = p5.Vector.random2D(); //control how particles move
    // this.vel.setMag(random(2, 5));
    this.acc = createVector();
  }

  update(){
    this.pos.add(this.vel); //add velocity to position
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.acc.mult(0);
  }

  show(){
    stroke(0, 10);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  attracted(target){
    //direction from the position to the target
    let force = p5.Vector.sub(target, this.pos);
    let dsquared = force.magSq(); //Calculates the squared magnitude of the vector
    dsquared = constrain(dsquared, 1, 10);
    let G = 5;
    let strength = G / dsquared;
    force.setMag(strength); //keep direction, set the length to the same as target
    this.acc.add(force);
  }


}
