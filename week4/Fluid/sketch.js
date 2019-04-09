let particles = [];
let alpha;

function setup() {
  createCanvas(600, 600);
  background(0);
  noStroke();

  let p = new Particle();
  particles.push(p);

  // setParticles();
}

function draw() {
  frameRate(20);
  alpha = map(mouseX, 0, width, 5, 35);
  fill(255, alpha);
  rect(0, 0, width, height);

  loadPixels();
  for (let particle of particles) {
    particle.update();
    particle.show();
    particle.wrap();
  }
  updatePixels();
}
