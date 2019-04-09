
let particles = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);

  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
  }

}
