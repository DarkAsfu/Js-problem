function sum(num){
    if(num == 1){
        return 1;
    }
    return num + sum(num - 1);
}
const result = sum(10);
//console.log(result);

function factorial(num){
    if(num === 1){
        return 1;
    }
    return num * factorial(num - 1);
}
const factorial_value = factorial(5);
console.log(factorial_value);