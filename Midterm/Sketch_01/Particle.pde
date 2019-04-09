class Particle {
  PVector location, vel, acceleration;
  float G, mass, size, lifespan, radius;

  Particle() {
    location = new PVector(mouseX, mouseY);
    vel = new PVector(0, 0);
    acceleration = new PVector(0, 0);
    
    G = 0.6;
    mass = random(10, 30);
    size = mass;
    lifespan = 255.0;
  }

  void applyForce(PVector force) {
    PVector f = PVector.div(force, mass); //store in vector f
    acceleration.add(f);
  }

  void update() {
    vel.add(acceleration);
    vel.limit(3);
    location.add(vel);
    acceleration.mult(0);
    lifespan -= 0.1;
  }

  boolean isDead() {
    if (lifespan <= 0) {
      return true;
    } else {
      return false;
    }
  }

  //void render() {
  //  imageMode(CENTER);
  //  tint(lifespan);
  //  image(img, location.x, location.y, size / 4, size / 4);
  //}

  void show() {
    fill(145, 138, 206, 40);
    ellipse(location.x, location.y, size, size);

    stroke(234, 109, 75, 10);
    strokeWeight(1);
    fill(234, 109, 75, 6);
    for (int k = 0; k < 20; k++) {
      bezier(location.x, location.y, 
        location.x + random(-40, 40), location.y + random(-40, 40), 
        location.x + random(-40, 40), location.y + random(-40, 40), 
        location.x, location.y);
    }
  }

  void connect(Particle p) {
    strokeWeight(random(1, 2));
    stroke(234, 109, 75, 10);
    PVector dist = PVector.sub(p.location, location);
    if (dist.mag() < 100) {
      line(location.x, location.y, p.location.x, p.location.y);
    }
  }

  //attract function receive a mover object, return a PVector
  PVector attract(Particle p) {
    PVector force = PVector.sub(location, p.location);
    float distance = force.mag();
    //distance * distance can be large, constrain
    distance = constrain(distance, 20, 25);
    force.normalize();
    float strength = (G * mass * p.mass)/(distance * distance);
    force.mult(strength);
    return force;
  }

  void checkEdges() {
    if (dist(location.x, location.y, width / 2, height / 2) > 100) {
      vel.x *= -1;
      vel.y *= -1;
    }
  }

  void dragged() {
    if (location.x<size/2) {
      location.x=size/2;
      vel.x*=-1;
    } else if (location.x>width-size/2) {
      location.x=width-size/2;
      vel.x*=-1;
    }

    if (location.y<size/2) {
      location.y=size/2;
      vel.y*=-1;
    } else if (location.y>height-size/2) {
      location.y=height-size/2;
      vel.y*=-1;
    }
  }
}
