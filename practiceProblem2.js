function findLeapYear(arr, sz){
    var leapYear = [];
    for(var i = 0, j =0; i < sz; i++){
        if((arr[i]%400 == 0) ||(arr[i]%100 != 0 && arr[i]%4 == 0)){
            leapYear[j] = arr[i]; 
            j++;
        }
    }
    return leapYear;
}
var year = [2023, 2024, 2025, 2028, 2030];
var n = year.length;
var getLeapYear = findLeapYear(year, n);
console.log(getLeapYear);

