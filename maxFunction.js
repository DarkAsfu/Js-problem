// using if else 
function getMax(num1, num2, num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }else if(num2>=num1 && num2>=num3){
        return num2;
    }else{
        return num3;
    }
}

let a, b, c;
a = 18;
b = 23;
c = 82;
let max = getMax(a, b, c);
console.log(max);
// min use Math.min function

function getMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(getMin(-45, 2, 6));

