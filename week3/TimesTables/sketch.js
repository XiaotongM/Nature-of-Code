let r;
let factor = 99;//2, 34, 51, 99

function setup() {
  createCanvas(600, 600);
  r = height / 2 - 86;
}

//getVector for any given index
function getVector(index, total) {
  let angle = map(index % total, 0, total, 0, TWO_PI); //index%total
  //Calculates and returns a new 2D unit vector from the specified angle value (in radians).
  let v = p5.Vector.fromAngle(angle + PI);
  v.mult(r); //scale v by multiply the radius
  return v;
}

function draw() {
  background(0);
  // const total = int(map(mouseX, 0, width, 0, 200));
  const total = 200;
  factor += 0.004;

  translate(width / 2, height / 2);
  stroke(255, 90);
  noFill();
  ellipse(0, 0, r * 2);

  for (i = 0; i < total; i++) {
    //from point a to point b
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x, a.y, b.x, b.y);
  }
}
