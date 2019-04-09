let attractor;
let particles = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(300, 300));
  }
  attractor = createVector(300, 300);

}

function draw() {
  stroke(0);
  strokeWeight(1);
  point(attractor.x, attractor.y);

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.attracted(attractor); //any given particle can be attracted by attractor
    particle.update();
    particle.show();
  }
}
