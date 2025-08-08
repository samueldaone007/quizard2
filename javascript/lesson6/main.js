// const person = {
//     firstName: "Alice",
//     lastName: "Johnson",
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// };
// console.log(person.fullName());

// const animal = {
//     name: "Tiger",
//     sound: "Roar",
//     size: "Big",
//     charbel(){
//         return `The name of the animal is ${this.name}s\nit is a very ${this.size}. It ${this.sound}'s when its hungry`
//     }
// }
// console.log(animal.charbel());

// const propName = "color"
// const car = {
//     brand: "Ford",
//     [propName]: "blue"
// };
// console.log(car)

// const student ={
//     name: 'Daniel',
//     age: 22,
//     major: "Computer Science"
// };

// const {name, age, major} = student;

// console.log(name, age, major)

// class Animal{
//     constructor(name, sound){
//         this.name =  name;
//         this.sound = sound;
//     }

//     speak(){
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }

// const dog = new Animal("Dog", "woof")
// dog.speak();

// class Dog extends Animal{
//     constructor(name, breed){
//         super(name, "woof")
//         this.breed = breed;
//     }
//     displayBreed(){
//         console.log(`${this.name} is a ${this.breed}`);
//     }
// }
// const myDog = new Dog("Buddy", "Golden Retriever")
// myDog.speak()
// myDog.displayBreed()

// class Calculator{
//     static add(a,b){
//         return a+b
//     }
// }
// console.log(Calculator.add(5,3));

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     get area(){
//         return this.width*this.height;
//     }
//     set area(value){
//         this.width = value / this.height;
//     }
// }

// const rect = new Rectangle(10,5);
// console.log(rect.area);
// rect.area =  100;
// console.log(rect.width);

//private fields

class Citizen{
    #NIN;
    constructor(name, NIN){
        this.name = name;
        this.#NIN = NIN
    }

getNIN(){
    return this.#NIN;
    }
}
const citizen = new Citizen("Samuel","123-456-78-334-2");
console.log(citizen.getNIN())

//console.log(person.#NIN)

class User{
    #username;
    #password;

    constructor(username, password){
        this.#username = username;
        this.#password = password;
    }
    get username(){
        return this.#username;
    }
    set password(newPassword){
        if (newPassword.length<6){
            console.log("Password must be atleast six characters")
            return;
        }
        this.#password= newPassword
    }

    checkPassword(inputPassword){
        return this.#password === inputPassword;
    }
}

const user1 = new User("john1", "secure123")

console.log(user1.username);

//console.log(user1.#password)

user1.password = "123";

user1.password = "newSecurePass123"