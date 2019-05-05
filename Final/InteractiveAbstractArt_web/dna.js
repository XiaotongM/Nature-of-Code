// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

//Constructor (makes a random DNA)
class DNA {
  constructor(newgenes, model_) {
    // DNA is random floating point values between 0 and 1 (!!)
    // The genetic sequence
    let len = 2; // Arbitrary length
    if (newgenes) {
      this.genes = newgenes;
      this.model = model_;
    } else {
      this.genes = new Array(len);
      this.genes[0] = 1; //floor(random(1,4));
      // this.genes[1] = floor(random(12,24));
      this.genes[1] = 12; //R.randi(12, 24);
      // for (let i = 0; i < this.genes.length; i++) {
      //   this.genes[i] = random(-1, 1);
      // }
      this.network_depth = 24 - this.genes[1];
      this.model = NetArt.createModel(this.genes[1], this.network_depth, this.genes[0]);
    }
  }

  // Creates new DNA sequence from two (this &
  crossover(partner) {
    let child = new Array(this.genes.length);
    // let crossover = floor(random(this.genes.length));
    for (let i = 0; i < this.genes.length; i++) {
      // if (i > crossover) child[i] = this.genes[i];
      child[i] = this.genes[i];
      // else child[i] = partner.genes[i];
    }

    let newModel = this.model;
    let nHidden = 12 || 8;
    let crossover = floor(random(nHidden));
    for (let i = 0; i < nHidden; i++) {
      if (random(0, 1) <= 0.5)
        newModel['w_'+i] = partner.model['w_'+i];
      else {
        newModel['w_'+i] = this.model['w_'+i];
      }
    }
    if (random(0, 1) <= 0.5)
    newModel.w_in = partner.model.w_in; // x, y, r, z1, z2, and bias
    if (random(0, 1) <= 0.5)
    newModel.w_out = partner.model.w_out; // output layer

    let newgenes = new DNA(child, newModel);
    return newgenes;
  }

  // Based on a mutation probability, picks a new random character in array spots
  mutate(m) {
    let randomSize = 1.0;
    let nHidden = 12 || 8;
    // console.log(nHidden);
    if (random(0, 1) <= 0.5)
      this.model.w_in = R.RandMat(12, 6, 0, randomSize); // x, y, r, z1, z2, and bias

    if (random(0, 1) <= 0.5)
      this.model.w_out = R.RandMat(5, 12, 0, randomSize); // output layer

        for (let i = 0; i < nHidden; i++) {
          // if (random(0, 1) <= 0.5)
          this.model['w_'+i] = R.RandMat(12, 12, 0, randomSize);
        }

  // return 0;
  //   for (let i = 0; i < this.genes.length; i++) {
  //     if (random(1) < m) {
  //       if (i == 0){
  //         this.genes[0] = floor(random(1,4));
  //       }
  //       if (i == 1){
  //         this.genes[1] = R.randi(12, 24);
  //       }
  //     }
  //   }
  // }
}
}
