function findingBadData(numbers){
    // check if input is an array
    if (!Array.isArray(numbers)) {
        return "Error: Input is not an array.";
    }
    // initialize negative number in array
    let count = 0;
    // loop continue until i value is i < number.length
    for(let i = 0; i < numbers.length; i++){
        // check if the element is a number
        if (typeof numbers[i] !== 'number') {
            return "Error: Array element is not a number.";
        }
        // if number is less than zero then count increase by 1
        if(numbers[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [ -4, 9, -5, -33, 55 ];
const badData = findingBadData(arr);
// console.log(badData);
