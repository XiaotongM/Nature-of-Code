let a = 0;
let r = 30;
let aVel = 0.01;
let aAcc = 0.001;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {

  translate(width / 2, height / 2);
  let x = r * cos(a);
  let y = r * sin(a);
  fill(255);
  stroke(255, 30);
  line(0, 0, x, y);
  ellipse(x, y, 1, 1);

  r += 1;
  a += aVel;
  aVel += aAcc;
}
