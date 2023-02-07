function oddSum(num , n){
    sum = 0;
    for(var i = 0; i < n; i++){
        if(num[i] % 2 != 0){
            sum+=num[i];
        }
    }
    return sum;
}
var arr = [5, 7, 8, 10, 45, 30]
var sz = arr.length;
var getSum = oddSum(arr, sz);
console.log(getSum);