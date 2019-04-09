let xp1, xp2, xp3;
let yp1, yp2, yp3;
let offset1 = 0.0;
let offset2 = 0.0;
let offset3 = 0.0;
let angle1;
let angle2;
let angle3;
let count = 0;

function setup() {
  createCanvas(600, 600);
  background(0);
  noFill();
  xp1 = width * 0.4;
  yp1 = width * 0.4;
  xp2 = width * random(0.4);
  yp2 = height * random(0.4);
  xp3 = width * random(0.4);
  yp3 = height * random(0.4);
}

function draw() {
  if (count <= 3000){
  translate(width / 2, height / 2);

  if (count % int(random(50, 100)) == 0){
      stroke(255, random(50));
    }

  // stroke(255, 20);
  bezier(0, 0, xp3 * cos(radians(angle3)), yp3 * sin(radians(angle3)), xp2 * cos(radians(angle2)), yp2 * sin(radians(angle2)), xp1 * cos(radians(angle1)), yp1 * sin(radians(angle1)));
  // bezier(0, 0, xp3 * cos(angle3), yp3 * sin(angle3), xp2 * cos(angle2), yp2 * sin(angle2), xp1 * cos(angle1), yp1 * sin(angle1));

  let inc1 = random(0.0085);
  let inc2 = random(0.0085);
  let inc3 = random(0.0015);

  angle1 = noise(offset1) * width;
  offset1 += inc1;
  angle2 = noise(offset2) * width;
  offset2 += inc2;
  angle3 = noise(offset3) * width;
  offset3 += inc3;
  translate(- width / 2, 0);
  count++;
}
}
