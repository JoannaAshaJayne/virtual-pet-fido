//Variables 

const HUNGRY_ANIMAL = 5;
const UNFIT_ANIMAL = 3;
const MAXIMUM_FITNESS = 10;

function Pet(name){
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10,
    this.walk = 4,
    this.isAlive = true,
    this.baby =[]
};

Pet.prototype = {
    
    growUp() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },

    walkFit() {
        this.fitness += 4;
    },

    feedPet() {
        this.hunger -= 3;
    }, 

    checkUp() {
        if (UNFIT_ANIMAL <= 3) {
            return ('I need a walk.')
    }   if (HUNGRY_ANIMAL >= 5) {
            return ('I am hungry.')
    }   if ((UNFIT_ANIMAL <= 3) && (HUNGRY_ANIMAL >=5)) {
            return ('I am hungry AND I need a walk!')
    }   else if ((!UNFIT_ANIMAL <= 3) && (!HUNGRY_ANIMAL >= 5)) {
            return ('I feel great!')
    },

    isAlive() {
        if ((this.fitness > 0 && this.hunger < 10 && this.age < 30)) {
            return ('false')
    }   else if (!this.isAlive)
            throw new Error ('Your pet is no longer alive :(')
    },

    adoptBaby() {
        this.baby.push(baby);
    },
   
};

module.exports = { Pet, UNFIT_ANIMAL, HUNGRY_ANIMAL, MAXIMUM_FITNESS };