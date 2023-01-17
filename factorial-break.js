let num = 10;
let factorial = 1;
let i = 1;

while(true){
    if(i>num){
        break;
    }
    factorial *= i;
    i++
}
console.log(factorial)