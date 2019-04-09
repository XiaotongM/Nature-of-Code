let ps;

let imgs = [];

function preload() {
  imgs[0] = loadImage("reflection.png");
}

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem(imgs);
}


function draw() {
  // Try additive blending!
  blendMode(ADD);
  clear();

  background(0);

  // Additive blending!
  ps.addParticle(mouseX, mouseY);


  let up = createVector(0, -0.2);
  ps.applyForce(up);

  ps.update();
}
