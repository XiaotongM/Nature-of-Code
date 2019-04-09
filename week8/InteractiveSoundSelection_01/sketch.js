// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

let population;
let info;
let playing = false;


function setup() {
  createCanvas(800, 124);
  colorMode(RGB, 1.0, 1.0, 1.0, 1.0);
  let popmax = 10;
  let mutationRate = 0.05; // A pretty high mutation rate here, our population is rather small we need to enforce variety
  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(mutationRate, popmax);
  // A simple button class
  button = createButton("evolve new generation");
  button.mousePressed(nextGen);
  button.position(24, 140);
  info = createDiv('');
  info.position(24, 175);
  soundinfo = createDiv('');
  soundinfo.position(100, 175);

  wave = new p5.Oscillator();
  wave.setType('sine');
  button = createButton("stop");
  button.mousePressed(toggle);
  button.position(160, 140);
}


function toggle() {
  if (!playing) {
    playing = true;
  } else {
    wave.stop();
    playing = false;
  }
}


function draw() {
  background(1);
  // Display the faces
  population.display();
  population.rollover(mouseX, mouseY);
  info.html("Generation:" + population.getGenerations());
}

// If the button is clicked, evolve next generation
function nextGen() {
  population.selection();
  population.reproduction();
  wave.start();
}
