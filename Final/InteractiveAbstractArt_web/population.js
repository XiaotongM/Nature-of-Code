// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Interactive Selection
// http://www.genarts.com/karl/papers/siggraph91.html

// Create the population
class Population {
  constructor(m, num) {
    this.mutationRate = m; // Mutation rate
    this.population = []; // array to hold the current population
    this.matingPool = [];
    this.generations = 0; // Number of generations
    for (let i = 0; i < num; i++) {
      this.population[i] = new Face(new DNA(), 40 + i * 135, 60);
    }
  }

  // Display all faces
  display() {
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].clear();
      this.population[i].display();
    }
  }

  showNumber() {
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].clear();
      this.population[i].showNumber();
    }
  }

  // Are we rolling over any of the faces?
  rollover(mx, my) {
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].rollover(mx, my);
    }
  }

  // Generate a mating pool
  selection() {
    // Clear the ArrayList
    this.matingPool = [];

    // Calculate total fitness of whole population
    let maxFitness = this.getMaxFitness();

    // Calculate fitness for each member of the population (scaled to value between 0 and 1)
    // Based on fitness, each member will get added to the mating pool a certain number of times
    // A higher fitness = more entries to mating pool = more likely to be picked as a parent
    // A lower fitness = fewer entries to mating pool = less likely to be picked as a parent
    for (let i = 0; i < this.population.length; i++) {
      // let fitnessNormal = map(this.population[i].getFitness(), 0, maxFitness, 0, 1);
      // let n = floor(fitnessNormal * 100); // Arbitrary multiplier
      //
      // for (let j = 0; j < n; j++) {
      //   this.matingPool.push(this.population[i]);
      // }

      //binary tournament
      let n1 = floor(random(0, this.population.length));
      let n2 = floor(random(0, this.population.length));
      while (n1 == n2){
        n2 = floor(random(0, this.population.length));
      }
      console.log(n1, n2);
      if ((this.population[n1].getFitness()) > (this.population[n2].getFitness())){
          this.matingPool.push(this.population[n1]);
      }
      else {
        this.matingPool.push(this.population[n2]);
      }

    }
  }

  // Making the next generation
  reproduction() {
    canvas.height = 300;
    canvas.width = 1720;
    // Refill the population with children from the mating pool
    for (let i = 0; i < this.population.length; i++) {
      // Sping the wheel of fortune to pick two parents
      let m = floor(random(this.matingPool.length));
      let d = floor(random(this.matingPool.length));
      // Pick two parents
      let mom = this.matingPool[m];
      let dad = this.matingPool[d];
      // Get their genes
      let momgenes = mom.getDNA();
      let dadgenes = dad.getDNA();
      // Mate their genes
      let child = momgenes.crossover(dadgenes);
      // Mutate their genes
      child.mutate(this.mutationRate);
      // Fill the new population with the new child
      this.population[i] = new Face(child, 40 + i * 135, 60);
    }
    this.generations++;
  }

  getGenerations() {
    return this.generations;
  }

  // Find highest fitness for the population
  getMaxFitness() {
    let record = 0;
    let index = 0;
    for (let i = 0; i < this.population.length; i++) {
      if (this.population[i].getFitness() > record) {
        record = this.population[i].getFitness();
        index = i;
      }
    }
    console.log(this.population[index].getFitness());
    return record;
  }
}
