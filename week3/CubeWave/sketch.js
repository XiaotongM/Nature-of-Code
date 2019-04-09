let angle = 0;
let w = 48;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(cos(QUARTER_PI)); //values are returned in the range -PI/2 to PI/2.
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0);
  //ortho([left], [right], [bottom], [top], [near], [far])
  ortho(-300, 300, 300, -300, 0, 1000);
  rotateX(-ma);
  rotateY(-QUARTER_PI);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 200, 400));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w, h, w);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
  }

  angle -= 0.1;
}
