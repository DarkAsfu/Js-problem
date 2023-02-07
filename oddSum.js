// without using function 
/*var arr = [5, 7, 8, 10, 45, 30];
var i = 0;
var sum = 0;
for(i = 0; i < arr.length; i++){
    if(arr[i]%2 != 0){
        sum+=arr[i];
    }
}
console.log(sum);*/
// Using Function
function oddSum(arr, sz){
    var sum = 0;
    for(var i = 0; i < sz; i++){
        if(arr[i]%2 != 0){
            sum+=arr[i];
        }
    }
    return sum;
}
var arr1 = [5, 7, 8, 10, 3, 45, 30];
var arr2 = [12, 23, 34, 34, 64, 43, 3, 5]
var n1 = arr1.length;
var n2 = arr2.length;
var result1 = oddSum(arr1, n1); 
var result2 = oddSum(arr2, n2); 

console.log(result1, result2);