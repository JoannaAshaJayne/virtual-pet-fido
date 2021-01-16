const MAXIMUM_FITNESS = 10;

function pet(name, age){
    this.name = name,
    this.age = age,
    this.hunger = 0,
    this.fitness = 10,
    this.walk = 4,
}


pet.prototype = {
    growUp() {
    this.age += 1;
};

petHungry(hungerIncrease) {

    if (pet.growUp === true) 
    this.hunger.push(5);
    } else {
    this.hunger.push()
    };

lessFit() {
    if (pet.growUp === true)
    this.fitness -= 3;
    } else {
    this.walk 

};

walkFit() {
 if ((pet.this.fitness + 4) <= 10 ) {
this.fitness += 4;
} else {
this.fitness = 10;
    }
      }
};

feedPet() {
    if ((pet.this.feedPet <= 10 ) {
    this.feedPet += 3;
    } else {
    this.feedPet = 0;
};

checkUp() {
    if (this.pet.fitness === 3 && this.pet.fitness <= 3) {
        return 'I need a walk';
    } 
    if (this.pet.hunger === 5 && this.pet.hunger <= 5) {
        return 'I am hungry'
    } if (this.fitness && this.hunger === true) {
        return 'I am hungry AND I need a walk'
    } else {
        return 'I feel great!'
    } 
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
          }
      }
    
isAlive() 
 return this.age < 30 && this.hunger < 10 && this.fitness > 0;
 }
};


module.exports = {pet};