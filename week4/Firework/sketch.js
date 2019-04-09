let fireworks = [];
let gravity;


function setup() {
  createCanvas(600, 600);
  gravity = createVector(0, 0.2);
  fireworks.push(new Firework());
}

function draw() {
  blendMode(ADD);
  clear();

  background(0);
  if(random(1) < 0.1){
    fireworks.push(new Firework());
  }

  for(let i = 0; i < fireworks.length; i++){
    fireworks[i].update();
    fireworks[i].show();
  }
}
