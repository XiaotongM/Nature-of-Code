let ranges = 100;

function setup() {
  createCanvas(600, 600);
  frameRate(20);
}

function draw() {
  background(0);
  noFill();
  strokeWeight(2);

  for (i = 0; i < ranges; i++) {
    let color = map(i, 0, ranges, 0, 255);
    stroke(color);

    beginShape();
    for (x = 0; x < width + 11; x += 10) {
      //noise(x, [y], [z])x-coordinate in noise space....y...z
      let n = noise(x * 0.001, i * 0.01, frameCount * 0.01);
      let y = map(n, 0, 1, 0, height);
      vertex(x, y);
    }
    endShape();
  }
}
