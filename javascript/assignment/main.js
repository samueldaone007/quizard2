let attendance = 4

if(attendance === 4){
    console.log('You were present throughout the week')
}
else if(attendance === 3){
    console.log('You were absent for one day')
}
else if(attendance === 2){
    console.log('You were absent for two day')
}
else if(attendance === 1){
    console.log('You were absent for almost the whole week')
}
else{
    console.log('Wow you missed the whole class')
}

console.log(Math.trunc(Math.random()*20)+1)