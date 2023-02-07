function maxInArray(number){
    let tallest = number[0];
    for(let i = 0; i < number.length; i++){
        if(tallest < number[i]){
            tallest = number[i];
        }
    }
    return tallest;
}
function minInArray(number){
    let smallest = number[0];
    for(let i = 0; i < number.length; i++){
        if (number[i] < smallest){
            smallest = number[i];
        }
    }
    return smallest;
}
let height = [167, 190, 120, 165, 137];
let maxHeight = maxInArray(height);
let minHeight = minInArray(height);
console.log('max & min', maxHeight, minHeight);