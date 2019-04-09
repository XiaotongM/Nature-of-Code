var playing = false;

function setup() {
  createCanvas(100, 100);

  wave = new p5.Oscillator();
  wave.setType('sine');

  button = createButton('play/pause');
  button.mousePressed(toggle);
}

function draw() {
  background(51);
}

function toggle() {
  if (!playing) {
    wave.start();
    wave.amp(1);
    wave.freq(300);
    playing = true;
  } else {
    wave.stop();
    playing = false;
  }
}
