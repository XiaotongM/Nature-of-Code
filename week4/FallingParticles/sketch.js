let particles = [];

function setup() {
  createCanvas(500, 600);
  fill(240);
  noStroke();
}

function draw() {
  background(0);

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }

  for (let p of particles) {
    p.update();
    p.display();
    p.borders();
  }
}
