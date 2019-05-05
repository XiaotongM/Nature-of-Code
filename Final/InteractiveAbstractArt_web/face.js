// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

class Face {
  constructor(dna_, x_, y_) {
    this.rolloverOn = false; // Are we rolling over this face?
    this.dna = dna_; // Face's DNA
    this.x = x_; // Position on screen
    this.y = y_;
    this.wh = 120; // Size of square enclosing face
    this.fitness = 1; // How good is this face?
    this.r = new Rectangle(15 + this.x, 295, this.wh, this.wh);

    this.image_resolution = this.wh;
    this.network_size = 12;//R.randi(12, 24);
    this.network_depth = 24 - this.network_size;

    this.color_mode;
    this.alpha_mode;

    this.canvas;// = document.getElementById('netart_canvas');
    this.ctx;// = this.canvas.getContext('2d');
    this.z1;
    this.z2;
    this.model;
    this.img;

  }

  display() {
    let genes = this.dna.genes;

    this.ctx = canvas.getContext('2d');
    // this.color_mode = genes[0];
    this.alpha_mode = 2;
    this.z1 = 0.5;//Math.round(R.randf(-1.0, 1.0) * 1000) / 1000;
    this.z2 = 0.5;//Math.round(R.randf(-1.0, 1.0) * 1000) / 1000;

    this.network_size = genes[1];//R.randi(12, 24);
    // this.network_depth = 24 - this.network_size;

    //put
    this.model = this.dna.model;
    //this.model = NetArt.createModel(this.network_size, this.network_depth, this.color_mode);
    this.img = NetArt.genImage(this.model, this.image_resolution, this.image_resolution, this.z1, this.z2, this.alpha_mode);
    console.log(this.img);

    this.ctx.putImageData(this.img.getCanvasImage(this.ctx), this.x, this.y, 0, 0, this.wh, this.wh);
  }

  showNumber() {
    this.ctx = canvas.getContext('2d');
    this.ctx.fill();
    this.ctx.fillStyle = "grey";
    this.ctx.font = "10px Gotham";
    this.ctx.fillText(""+ floor(this.fitness),this.x + 60,this.y + 140);
  }

  clear(){
      this.ctx = canvas.getContext('2d');
      this.ctx.fill();
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center"; 
      this.ctx.font = "10px Gotham";
      this.ctx.fillText(""+ floor(this.fitness - 1),this.x + 60,this.y + 140);
  }

  getFitness() {
    console.log("get fitness")
    return this.fitness;
  }

  getDNA() {
    return this.dna;
  }

  // Increment fitness if mouse is rolling over face
  rollover(mx, my) {
    if (this.r.contains(mx, my)) {
      console.log('contain')
      this.rolloverOn = true;
      this.fitness += 1;
    } else {
      this.rolloverOn = false;
    }
  }
}
