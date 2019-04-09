//activation
int sign(float n){
  if(n >= 0){
    return 1;
  }else{
    return -1;
  }
}

class Perceptron{
  float[] weights = new float[2];
  //learning rate
  float lr = 0.1; 
  
  //constructor
  Perceptron(){
    for(int i = 0; i < weights.length; i++){
      weights[i] = random(-1, 1);
    }
  }
  
  //return an interger, function guess, receive inputs
  int guess(float [] inputs){
    float sum = 0;
    for(int i = 0; i < weights.length; i++){
      //multiple all inputs by the weights
      sum += inputs[i]*weights[i];
    }
    int output = sign(sum);
    return output;
  }
  
  //receive the input and the answer
  void train(float[] inputs, int target){
    int guess = guess(inputs);
    int error = target - guess;
    
    for(int i = 0; i < weights.length; i++){
      weights[i] += error * inputs[i] * lr;
    }
  }
  
}
