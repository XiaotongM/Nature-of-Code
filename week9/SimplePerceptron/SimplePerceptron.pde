Perceptron brain;

Point[] points = new Point[100];

int trainingIndex;

void setup() {
  size(800, 800);
  brain = new Perceptron();

  for (int i = 0; i < points.length; i++) {
    points[i] = new Point();
  }

  float[] inputs = {-1, 0.5};
  int guess = brain.guess(inputs);
  println(guess);
}

void draw() {
  background(255);
  stroke(0);
  line(0, 0, width, height);
  for (Point pt : points) {
    pt.show();
  }

  for (Point pt : points) {
    float[] inputs = {pt.x, pt.y};
    int target = pt.label;
    //brain.train(inputs, target);
    int guess = brain.guess(inputs);
    if (guess == target) {
      fill(146, 66, 244);
    } else {
      fill(244, 229, 65);
    }
    noStroke();
    ellipse(pt.x, pt.y, 16, 16);
  }
  
  Point training = points[trainingIndex];
  float[] inputs = {training.x, training.y};
  int target = training.label;
  brain.train(inputs, target);
  trainingIndex++;
  if (trainingIndex == points.length) {
    trainingIndex = 0;
  }
}

void mousePressed() {
  println("mouseClick");
  for (Point pt : points) {
    float[] inputs = {pt.x, pt.y};
    int target = pt.label;
    brain.train(inputs, target);
  }
}
