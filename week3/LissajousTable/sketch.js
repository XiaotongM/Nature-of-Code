function make2DArray(rows, cols) {
  var arr = new Array(rows); //make array of rows
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols); //make array of cols
  }
  return arr;
}

let angle = 0;
let w = 80; //the size of each box
let cols;
let rows;
let curves;

function setup() {
  createCanvas(800, 800);
  cols = width / w - 1;
  rows = height / w - 1;
  curves = make2DArray(rows,cols);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i] = new Curve();
    }
  }
}

function draw() {
  background(0);
  let d = w - 10; //diameter
  let r = d / 2; //radius

  noFill();
  for (i = 0; i < cols; i++) {
    cx = w + i * w + w / 2;
    cy = w / 2;
    strokeWeight(1);
    stroke(255);
    ellipse(cx, cy, d, d);
    let x = r * cos(angle * (i + 1) - HALF_PI);
    let y = r * sin(angle * (i + 1) - HALF_PI);

    strokeWeight(8);
    point(cx + x, cy + y);

    stroke(255, 50);
    strokeWeight(1);
    line(cx + x, 0, cx + x, height);
    for (let j = 0; j < rows; j++) {
      curves[j][i].setX(cx + x);
    }
  }

  noFill();
  for (j = 0; j < rows; j++) {
    cx = w / 2;
    cy = w + j * w + w / 2;
    strokeWeight(1);
    stroke(255);
    ellipse(cx, cy, d, d);
    let x = r * cos(angle * (j + 1) - HALF_PI);
    let y = r * sin(angle * (j + 1) - HALF_PI);

    strokeWeight(8);
    point(cx + x, cy + y);

    stroke(255, 50);
    strokeWeight(1);
    line(0, cy + y, width, cy + y);
    for (let i = 0; i < cols; i++) {
      curves[j][i].setY(cy + y);
    }
  }

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      curves[j][i].addPoint();
      curves[j][i].show();
    }
  }

  angle += 0.01;



}
