// // for loop
// for (let i = 1; i<=5; i++){
//     console.log(i);
// }

// even numbers from 1 to 10

// for (let i = 2; i<=10; i+=2){
//     console.log(i);
// } 

// looping through an array
// let color = ['red', 'blue', 'green'];

// for (let i = 0; i < color.length; i++){
//     console.log(color[i]);
// }

// printing numberfs in reverse

// for(let i = 5; i >=1; i--){
//     console.log(i)
// }

// for(let i =1; i <= 12; i++){
//     console.log('3 x ' + i + " = " + (3*i))
// }

// while loop
// let flog = 1;

// while (flog<=5){
//     console.log(flog);
//     flog++;
// }

// let num = 1;
// while(num<10){
//     console.log(num)
//     num+=2;
// }

// let sum = 0;
// let num = 1;
// while(num<=10){
//     sum += num;
//     num++;
// }
// console.log("Sum: ", sum)

// let i = 6;

// do {
//     console.log(i);
//     i++;
// }while(i <= 5);

// let numba;
// do{
//     numba = prompt("Enter a Number greater than 10:");
// }while(numba <= 10)

// print even nuumbers
let x = 2;

do{
   console.log(x)
   x += 2; 
}while(x<=20)

let count = 10;
do{
   console.log(count)
   count--;
}while (count >= 1)

//Functions

// function greet(){
//    console.log("Hello World")
// }
// greet()

// function greetUser(name){
//    console.log("Hello" + name + "!")
// }
// greetUser("Mr love")

function add(a,b){
   return a+b;
}
console.log(add(2,5));

function isEven(nb){
   return nb % 2 === 0;
}