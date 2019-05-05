// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

let population;
let info;

let canvas = document.getElementById('netart_canvas');
canvas.height = 300;
canvas.width = 1450;

var ctx = canvas.getContext("2d");
download_img = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};

let x;
let y;

model = NetArt.createModel(24, 12, 2);

function setup() {
  let popmax = 10;
  let mutationRate = 0.05; // A pretty high mutation rate here, our population is rather small we need to enforce variety
  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(mutationRate, popmax);
  // button = createButton("evolve new generation");
  // button.mousePressed(nextGen);
  // button.position(10, 400);
  info = createDiv('');
  info.position(10, 425);
  background(255);
  population.display();

}

function draw() {
  population.rollover(x, y);
  // info.html("Generation:" + population.getGenerations());
  population.showNumber();
}

document.getElementById("generateBtn").addEventListener("click", function nextGen() {
  population.selection();
  population.reproduction();
  population.display();
});

let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  // screenLog.innerText = `
  //   Screen X/Y: ${e.screenX}, ${e.screenY}
  //   Client X/Y: ${e.clientX}, ${e.clientY}`;
  x = e.screenX;
  y = e.screenY;
  // console.log(x, y);
}
