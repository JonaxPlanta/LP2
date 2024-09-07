// Introductory Class

// ============================================

// Class
// creating a class named Retangle
class Retangle {
    constructor (height, length) {
        this.height = height;
        this.length = length;
    }
}

// creating an object using the class Retangle
let retangle = new Retangle(4, 5);
// showing the object 
console.log(retangle);

// ============================================

// Objects 
// creating an object named myCar
let myCar = new Object();

// assigning attributes to the object myCar
myCar.manufacturing = "Ford";
myCar.model = "Mustang";
myCar.year = "1969";

// showing the object attributes
console.log(myCar);

// ============================================

// Attributes
// creating the object person with attributes
const person = {
    name: "John",
    age: 30,
    profession: "Engenheiro"
};

// showing the object attributes
console.log(person);

// ============================================

// Method
// creating an object with a method
const personTwo = {
    name: "Heisenberg",
    sayMyName: function() {
        console.log(`${personTwo.name}!`);
    }
}

// showing person's name
personTwo.sayMyName();

// ============================================

// Inheritance
// creating a class Square that extends the Reatangle atributtes
class Square extends Retangle {
    constructor(length) {
        // when the super is called, all attributes of the extended class are being called
        // that is the reason we use length twice, to fill height and length from Retangle class
        super(length, length);
    }
};

// creating an object using the class Square
let square = new Square(4, 4);

// showing Square attributes
console.log(square);


// ============================================

// Polymorphism
// creating a class named MathOperation
class MathOperation {
    constructor(numberI, numberII) {
        this.numberI = numberI;
        this.numberII = numberII; 
    }
    
    calculate() {
        console.log(`${this.numberI}, ${this.numberII}`);
    }
}

// creating a class named Sum that extends class MathOperation
class SumOperation extends MathOperation {
    constructor(numberI, numberII) {
        super(numberI, numberII)
    }

    calculate() {
        console.log(`${this.numberI} + ${this.numberII} = ${this.numberI + this.numberII}`);
    }
}

// creating an object using the class MathOperation
let testOperation = new MathOperation(2, 6);

// creating an object using the class SumOperation
let sumOperation = new SumOperation(2, 6);

// polymorphism shows that methods may change when inserted into different classes
testOperation.calculate();
sumOperation.calculate();

// Binding
// creating a function using the "this"
// "this" refears to the object personThree
const personThree = {
    name: "James",
    sayHello() {
        console.log(`Hello ${this.name}!`)
    }
}

// evoking function
personThree.sayHello();

  