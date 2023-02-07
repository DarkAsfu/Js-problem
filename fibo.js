const fibo = [0, 1];
// fibo[0] = 0;
// fibo[1] = 1;
for(let i = 2 ; i <= 12; i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
    
}

for(let i =0 ; i <= 12; i++){
    console.log(fibo[i]);
}
console.log(fibo)