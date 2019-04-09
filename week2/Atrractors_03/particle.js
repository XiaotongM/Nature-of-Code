class Particle{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D(); //control how particles move
    this.acc = createVector();
  }

  show(){
    stroke(255, 40);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }

  attracted(target){
    //direction from the position to the target
    let force = p5.Vector.sub(target, this.pos);
    let dsquared = force.magSq(); //Calculates the squared magnitude of the vector
    dsquared = constrain(dsquared, 25, 500);
    let G = 100;
    let strength = G / dsquared;
    force.setMag(strength); //keep direction, set the length to the same as target
    this.acc = force;
  }

  update(){
    this.pos.add(this.vel); //add velocity to position
    this.vel.add(this.acc);
  }

}
