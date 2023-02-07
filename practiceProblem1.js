function getMinute(hour){
    var minute = hour*60;
    return minute
}
var hour = 4;
console.log('Hour to Minute', hour , getMinute(hour));