
const { pet } = require("./virtual-pet-fido");

    describe('constructor', () => {

        it('sets the name property', () => {
          const pet = new Pet('Fido');
      
          expect(pet.name).toEqual('Fido');
        });
      });
      
        it('has a initial age of 0', () => {
          const pet = new Pet('Fido');
      
          expect(pet.age).toEqual(0);
        });
      });

      describe('growUp', () => {
        it('increments the age by 1', () => {
          const pet = new Pet('Fido');
      
          pet.growUp();
      
          expect(pet.age).toEqual(1);
        });

        it('Fido has initial hungar of 0'), () => {
          const pet = new Pet ('Fido');
          
          pet.petHungry();

          expect(pet.hunger).toBe(0)
        };
        
        it('Fido gets hungry as he grows up, increasing hunger to 5'), () => {
          const pet = new Pet ('Fido');
          pet.petHungry();

          expect(pet.hunger).toBe(5)
        }

        it('Fido has initial fitness of 10'), () => {
          const pet = new Pet ('Fido');
          
          pet.lessFit();

          expect(pet.fitness).toBe(10)
        }
        it('Fidos fitness decreases by 3 with growUp'), () => {
          const pet = new Pet ('Fido');

          pet.lessFit();

          expect(pet.fitness).toEqual(3)
        }

        it('increases fitness by to a maximum of 10', () => {
          const pet = new Pet('fido');
      
          pet.fitness = 8;
          pet.walk();
      
          expect(pet.fitness).toEqual(10);
        });

        it('feed pet and hunger will decrease by 3', () => {
          const pet = new Pet('fido');
      
          pet.feedPet;
      
          expect(pet.feedPet).toEqual(3);
        });

        it('if fitness is 3 or less return I need a walk', () => {
          const pet = new Pet('fido');
      
          pet.checkUp;
      
          expect(pet.checkUp).toBe('I need a walk');
        });

        it('if hunger level is 5 or more return I am hungry', () => {
          const pet = new Pet('fido');
      
          pet.checkUp;
      
          expect(pet.checkUp).toBe('I am hungry');
        });

        it('find out how Fido is feeling', () => {
          const pet = new Pet('fido');
      
          pet.isAlive;
      
          expect(pet.isAlive).toBe('');
        });


        it('throws an error if the pet is not alive', () => {
          const pet = new Pet('Fido');
    
          pet.age = 30;
          pet.checkUp;
    
          expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
      });
    });
       






















      });
    

      });