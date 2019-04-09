class Attractor {
  float mass;         
  PVector position;   
  float g;

  Attractor() {
    position = new PVector(mouseX, mouseY);
    mass = 20;
    g = 0.4;
  }

  PVector attract(Mover m) {
    PVector force = PVector.sub(position,m.position);             // Calculate direction of force
    float distance = force.mag();                                 // Distance between objects
    distance = constrain(distance,5.0,25.0);                             // Limiting the distance to eliminate "extreme" results for very close or very far objects
    force.normalize();                                            // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    float strength = (g * mass * m.mass) / (distance * distance); // Calculate gravitional force magnitude
    force.mult(strength);                                         // Get force vector --> magnitude * direction
    return force;
  }


  void display() {
    stroke(255);
    noFill();
    pushMatrix();
    translate(position.x,position.y,position.z);
    stroke(255, 0, 0);
    strokeWeight(5);
    point(position.x, position.y, position.z);
    //sphere(mass*2);
    popMatrix();
  }
}
