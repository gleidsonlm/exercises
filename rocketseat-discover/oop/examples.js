// Inherit example
class Car {
    tires = 4;

    move(direction){}
    turn(direction){}
}

class Bike extends Car {
    constructor(){
        super() // pull attributes and methods from parent class
        this.tires = 2
    }
}

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
        } else if (this.weight <= 50) {
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
        } else if (this.weight <= 60) {
            this.category = 'lightweight';
        } else if (this.weight <= 75) {
            this.category = 'middleweight';
        } else {
            this.category = 'disclassified';
        }
    }
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
        } else if (this.weight <= 52) {
            this.category = 'flyweight';
        } else if (this.weight <= 56) {
            this.category = 'bantamweight';
        } else if (this.weight <= 60) {
            this.category = 'lightweight';
        } else if (this.weight <= 64) {
            this.category = 'light welterweight';
        } else if (this.weight <= 69) {
            this.category = 'welterweight';
        } else if (this.weight <= 75) {
            this.category = 'middleweight';
        } else if (this.weight <= 81) {
            this.category = 'light heavyweight';
        } else if (this.weight <= 91) {
            this.category = 'heavyweight';
        } else {
            this.category = 'super heavyweight';
        }
    }        
}


//Abstract superclass for Drive Types
class Bolt {
    constructor() {
    if (this.constructor === Bolt)
        throw new Error("Abstract superclass cannot be constructed");
    }

    get drive() { 
    throw new Error("Method is not implemented");
    }
}

//Class Phillips
class PHBolt extends Bolt {
    constructor() { super() } // inherited from Bolt
    get drive() { return 'Phillips' }
}

// Class Slotted
class SLBolt extends Bolt {
    constructor() { super() } // inherited from Bolt
    get drive() { return 'Slotted' }
}

// Class Slotted
class SQBolt extends Bolt {}

// Instances
// new Bolt(); // Abstract superclass cannot be constructed
let ph = new PHBolt();
let sl = new SLBolt();
let sq = new SQBolt();

//Testing
try {
    console.log(ph.drive,sl.drive) //get drive() implemented in child.
    console.log(sq.drive)  //get drive() inherited from parent, not implemented.
} catch (error) {
    console.log(error)
}