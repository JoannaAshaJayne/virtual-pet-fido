
const { pet } = require("./virtual-pet-fido");

    describe('constructor', () => {

        it('sets the name property.', () => {
          const pet = new Pet('Fido');
      
          expect(pet.name).toBe('Fido');
        });
      });
      
        it('has a initial age of 0.', () => {
          const pet = new Pet('Fido');
      
          expect(pet.age).toEqual(0);
        });

      describe('growUp', () => {
        it('increments the age by 1.', () => {
          const pet = new Pet('Fido');
      
          pet.growUp();
      
          expect(pet.age).toEqual(1);
        });

        it('Fido has initial hunger of 0.'), () => {
          const pet = new Pet ('Fido');
          
          pet.petHungry();

          expect(pet.hunger).toEqual(0)
        };
        
        it('Fido gets hungry as he grows up, increasing hunger to 5.'), () => {
          const pet = new Pet ('Fido');
          pet.petHungry();

          expect(pet.hunger).toEqual(5)
        };

        it('Fido has initial fitness of 10.'), () => {
          const pet = new Pet ('Fido');
          
          pet.lessFit();

          expect(pet.fitness).toEqual(10)
        };

        it('Fidos fitness decreases by 3 with growUp.'), () => {
          const pet = new Pet ('Fido');

          pet.lessFit();

          expect(pet.fitness).toEqual(3)
        };

        it('Calling walk should increase the Pets fitness level by 4.'), () => {
        
          const pet = new Pet ('Fido');

          pet.lessFit();

          expect(pet.fitness).toEqual(4)
        };

        it('increases fitness to a maximum of 10.', () => {
          const pet = new Pet('Fido');
      
          pet.fitness = 8;
          pet.walk();
      
          expect(pet.fitness).toEqual(10);
        });

        it('feed pet and hunger will decrease by 3.', () => {
          const pet = new Pet('Fido');
      
          pet.feedPet;
      
          expect(pet.feedPet).toEqual(3);
        });

        it('Fidos hunger level should never go below 0.', () => {
          const pet = new Pet('Fido');
      
          pet.feedPet;
      
          expect(pet.feedPet).toEqual(0);
        });

        it('if fitness is 3 or less return I need a walk', () => {
          const pet = new Pet('Fido');
      
          pet.checkUp;
      
          expect(pet.checkUp).toBe('I need a walk');
        });

        it('if hunger level is 5 or more return I am hungry.', () => {
          const pet = new Pet('Fido');
      
          pet.checkUp;
      
          expect(pet.checkUp).toBe('I am hungry.');
        });

        it('if fitness and hunger level are true, I am hungry AND I need a walk!', () => {
          const pet = new Pet('Fido');
      
          pet.checkUp;
      
          expect(pet.checkUp).toBe('I am hungry AND I need a walk!');
        });

        it('if fitness and hunger level are NOT true return, I feel great!', () => {
          const pet = new Pet('Fido');
      
          pet.checkUp;
      
          expect(pet.checkUp).toBe('I feel great!');
        });


        it('If the pets fitness is 0 or less, it should return false.', () => {
          const pet = new Pet('Fido');
  
          pet.isAlive;
    
          expect(pet.isAlive).toBe("false");
        });

        it('If the pets hunger is 10 or more, it should return false.', () => {
          const pet = new Pet('Fido');
  
          pet.isAlive;
    
          expect(pet.isAlive).toBe("false");
        });

        it('If the pets age is 30 or more, it should return false.', () => {
          const pet = new Pet('Fido');
  
          pet.isAlive;
    
          expect(pet.isAlive).toBe("false");
        });

        it('Otherwise it should return true.', () => {
          const pet = new Pet('Fido');
  
          pet.isAlive;
    
          expect(pet.isAlive).toBe("true");
        });

        it('throws an error if the pet is not alive', () => {
          const pet = new Pet('Fido');
    
          pet.age = 30;
          pet.checkUp;
          pet.isAlive;
    
          expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
      });