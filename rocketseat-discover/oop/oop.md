# Object-Oriented Programming annotations

Object has:
- proprieties and functions;
- state and behavior;
- attributes and methods.

Abstract objects may be hard to identify. Example: authentication and authorization.

Classes models the objects. In JavaScript:
- Syntactical sugar;
- Prototype.
    - Classes and Objects inherite all way up to the parent prototype.

Encapsulation
- Binds data with its functions and variables
- Increase the code security

Advantages from Structural programming
- More careful to implementation;
- Objets and Classes concepts;
- Encapsulation of variables and functions for security;
- Inheritance helps on reusing the code.

## Inheritance ##

Basics:
- Parent > Children
- Allow extended inheritance. Example:
        
        class Car {
            tires = 4;
        }
        move(direction){}
        turn(direction){}
        }
        class Bike extends Car {
            constructor(){
                super() // pull attributes and methods from parent class
                this.tires = 2
            }
        }

- Can be recursively inherited.

## Polymorphism ##

- When extending other object, you may need to rewrite its properties, attributes, methods, other.
- Example General < Female Boxer < Male Boxer :

        //Generally speaking, for both male and female.
        class General {
            weight;
            category;

            constructor(weight) {
                this.weight = weight
            }

            defineCategory() {
                if (this.weight <= 20) {
                    this.category = 'child';
                } else if (this.weight <= 50 {
                    this.category = 'young';
                } else {
                    this.category = 'adult';
                }
            }
        }

        //Olympic female boxing divisions
        class boxerFemale extends General {
            
            //Inherits weight from General
            constructor(weight){
                super(weight);
            }

            //Define female boxing division
            defineCategory() {
                if (this.weight <= 51) {
                    this.category = 'flyweight';
                } else if (this.weight <= 60 {
                    this.category = 'lightweight';
                } else if (this.weight <= 75 {
                    this.category = 'middleweight';
                } else {
                    this.category = 'disclassified';
            }

        //Olympic male boxing divisions
        class boxerMale extends boxerFemale {
            
            //Inherits weight from female boxing
            constructor(weight){
                super(weight);
            }

            //Defines male boxing division
            defineCategory() {
                if (this.weight <= 49) {
                    this.category = 'light flyweight';
                } else if (this.weight <= 52 {
                    this.category = 'flyweight';
                } else if (this.weight <= 56 {
                    this.category = 'bantamweight';
                } else if (this.weight <= 60 {
                    this.category = 'lightweight';
                } else if (this.weight <= 64 {
                    this.category = 'light welterweight';
                } else if (this.weight <= 69 {
                    this.category = 'welterweight';
                } else if (this.weight <= 75 {
                    this.category = 'middleweight';
                } else if (this.weight <= 81 {
                    this.category = 'light heavyweight';
                } else if (this.weight <= 91 {
                    this.category = 'heavyweight';
                } else {
                    this.category = 'super heavyweight';
                }
            }        
        }


## Abstraction ##

- To be implemented in the future its template, identity.
- Can contain attributes and methods, but...
- Its implementation must be done in the child class inheriting the abstraction.
- Example Drive is abstract superclass for drive type classes.

        //Abstract superclass for Drive Types
        class Drive {
            if (this.constructor === Bolt)
                throw new Error("Abstract superclass cannot be constructed");
            }

            get type() { 
            throw new Error("Method is not implemented for Bolt");
            }
        }

        //Class Phillips
        class PHBolt extends Bolt {
            constructor() { super() } // inherited from Bolt
            get type() { return 'Phillips' }
        }
        
        // Class Slotted
        class SLBolt extends Bolt {
            constructor() { super() } // inherited from Bolt
            get type() { return 'Slotted' }
        }

        // Class Slotted
        class ComboBolt extends Bolt {
            constructor() { super() } // inherited from Bolt
            get type() { return 'Combination' }
        }