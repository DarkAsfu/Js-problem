function leapYear(year){
    if((year%400 == 0) || (year%100 != 0 && year%4 == 0)){
        return true;
    }else{
        return false;
    }
}
var isLeapYear = leapYear(2024);
console.log(isLeapYear);