//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //5 --> 4
const object2 = object1; //5 --> 4
const object3 = object2; //5 --> 4
const object4 = { a: 5}; //5 --> 5
object1.a = 4;//4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

class mammal extends animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log( "cow" ? `mooooooo my name is ${this.name} and I am a ${this.type} and my color is ${this.color}.`:`I don't know`);
    }
}

const cow = new mammal("cow","mammal","white");
cow.sound();