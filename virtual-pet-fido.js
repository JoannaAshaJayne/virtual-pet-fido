//Variables 

const HUNGRY_ANIMAL = 5;
const UNFIT_ANIMAL = 3;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name){
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10,
    this.walk = 4,
    this.isAlive = true,
    this.baby = name
};

Pet.prototype = {
    
    growUp() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    },

    walkFit() {
        if (this.fitness >= 7) {
            this.fitness = MAXIMUM_FITNESS;
        } else {
            this.fitness += 4;
        } 
        
        // if fitness is equal to 7 then the function should set fitness to 10
    },

    feedPet() {
        if (this.hunger > (MINIMUM_HUNGER + 3)){
            return this.hunger -= 3;
        }
        return this.hunger = MINIMUM_HUNGER
    }, 

    checkUp() {
        if ((UNFIT_ANIMAL <= 3) && (HUNGRY_ANIMAL >= 5)) {
            return ('I am hungry AND I need a walk!')
        }   if (UNFIT_ANIMAL >= 3) {
            return ('I need a walk.')
        }   if (HUNGRY_ANIMAL >=5) {
            return ('I am hungry.')
        }   else {
            return ('I feel great!')
        }
    },

    isAlive() {
        if ((this.fitness > 0 && this.hunger < 10 && this.age < 30)) {
            return ('false')
    }   else if (!this.isAlive)
            throw new Error ('Your pet is no longer alive :(')
    },

    adoptBaby() {
        this.baby.push(Meatball);
    },
   
};

module.exports = { Pet, UNFIT_ANIMAL, HUNGRY_ANIMAL, MAXIMUM_FITNESS, MINIMUM_HUNGER };