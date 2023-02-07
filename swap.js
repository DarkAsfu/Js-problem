let a = 10;
let b = 20;
let temp;
// Approach 01
// temp = a;
// a = b;
// b = temp;

// Approach 02 ---- destructing
//[a, b] = [b, a];
// Approach 03 --- for numeric number
a = a+b
b = a-b
a = a-b
console.log(a, b);