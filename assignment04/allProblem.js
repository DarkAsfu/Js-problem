// problem 01

// mindGame function uses for 
// 1st multiply by 3 then add 10 then divide by 2 
// and finally minus 5 then return the final result 
function mindGame(num){
    // this condition use for detect input type
    // if input type isn't number then it's return error message
    if(typeof num != 'number'){
        return 'Error: Input is not a number.'
    }
    let multiplyByThree = num*3;
    let addTen = multiplyByThree + 10;
    let divideByTwo = addTen/2;
    let substractionFive = divideByTwo - 5;
    let finalResult = substractionFive;
    return finalResult;
}
//console.log(mindGame(5))
// problem 02
// this function use for find the string length is even or odd
function  evenOdd(name){
    // this condition use for detect input type
    // if input type isn't string then it's return error message
    if(typeof name !== 'string'){
        return 'Error: Input is not a string.'
    }
    const nameLength = name.length;
    // this condition use for find the even of odd number... 
    //if remainder value is zero this is even otherwise odd 
    if(nameLength % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
}
//console.log(evenOdd(67))
// problem 03

function isLGSeven(num){
    // this condition use for detect input type
    // if input type isn't number then it's return error message
    if(typeof num != 'number'){
        return 'Error: Input is not a number.'
    }
    // find difference between input and 7
    const difference = num - 7;
    // if difference is less than 7 than return it
    if(difference < 7){
        return difference;
    }
    // if difference more than 7 than return the double of input number
    else{
        return num*2;
    }
}
//console.log(isLGSeven(52))
// problem 04

// this function use find the number of negative data
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
//console.log(findingBadData([4, 4, -85, -96]))
// problem 05

function gemsToDiamond(gemsFdOne, gemsFdTwo, gemsFdThree){
    // Check if any of the input parameters is missing
    if (gemsFdOne === undefined || gemsFdTwo === undefined || gemsFdThree === undefined) {
        return "Error: One or more input parameters are missing.";
    }
    // Check if the input parameters are numbers
    if (typeof gemsFdOne !== 'number' || typeof gemsFdTwo !== 'number' || typeof gemsFdThree !== 'number') {
        return "Error: Input parameter is not a number.";
    }
    // The gems power each friend has
    const powerOfGemsFdOne = 21;
    const powerOfGemsFdTwo = 32;
    const powerOfGemsFdThree = 43;
    
    // Calculate the number of diamonds each friend has
    const fdOneDiamond = powerOfGemsFdOne * gemsFdOne;  
    const fdTwoDiamond = powerOfGemsFdTwo * gemsFdTwo;  
    const fdThreeDiamond = powerOfGemsFdThree * gemsFdThree;  
    
    // Calculate the total number of diamonds
    const totalDiamond = fdOneDiamond + fdTwoDiamond + fdThreeDiamond;
    
    // If the total number of diamonds is greater than or equal to 2000, deduct 2000 from the total
    if ( totalDiamond >= 1000*2){
        const finalDiamond = totalDiamond -2000;
        return finalDiamond;
    }
    // If the total number of diamonds is less than 2000, return the total
    else{
        return totalDiamond;
    }
    
}
//console.log(gemsToDiamond(1,1,1));