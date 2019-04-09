let attractors = [];
let particles = [];


function setup() {
  createCanvas(640, 640);
  background(255);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(200, 200));
  }
}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  stroke(0);
  strokeWeight(3);

  for (let i = 0; i < attractors.length; i++) {
    // point(attractors[i].x, attractors[i].y);
  }

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    for (let j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j]); //any given particle can be attracted by attractor
    }
    particle.update();
    particle.show();
  }
}
