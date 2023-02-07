/*function factorial(num){
    var fact = 1;
    for(var i = num; i>=1; i--){
        fact = fact*i;
    }
    return fact
}
var number = 5;
var factorialResult = factorial(number);
console.log('Factorial of ', number, factorialResult);*/
// 8 7 6 5 4 3 2 1

// Using while loop

function factorial(num){
    var fact = 1;
    var i = 1;
    while(i <= num){
        fact*=i;
        console.log(i,fact);
        i++;
    }
    return fact
}
var number = 12;
var factorialResult = factorial(number);
console.log('Factorial of ', number, factorialResult);