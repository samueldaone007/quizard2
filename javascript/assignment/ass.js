// function multiply(a,b){
//     return a*b;
//  }
//  console.log(multiply(2,5));

// for(let i = 10; i>=1; i--){
//     console.log(i)
//     }
// for(let i = 1; i<=5; i++){
//     console.log("Product ",i," is ",i*5)
//     }
// function numcheck(a){
//     if(a > 0){
//         console.log("The number is positive")
//     }
//     else if(a < 0){
//         console.log("The number is negative")
//     }
//     else{
//         console.log("The number is zero")
//     }
// }
// console.log(numcheck(-2))
// 	while (ans != ‘exit’){
// const ans = prompt(“Do you wish to exit? Type exit")
// }
// 	Console.log(“Exited”)
//     do{
// const answer = prompt(“Enter a number: “)
// answer = parseInt(answer)
// 	}while(answer < 10){
// 	}

function isPrime(num){
    for(let  i = 2; i<num;i++){
        if(num%i ===0){
            console.log('not prime')
            break;
        }else{
    console.log('is prime')
    }
    }
}
console.log(isPrime(9))