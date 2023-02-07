// mindGame function uses for 
// 1st multiply by 3 then add 10 then divide by 2 
// and finally minus 5 then return the final result 
function mindGame(num){
    // this condition use for detect input type
    // if input type isn't number then it's return error message
    if(typeof num != 'number'){
        return 'Please enter number'
    }
    let multiplyByThree = num*3;
    let addTen = multiplyByThree + 10;
    let divideByTwo = addTen/2;
    let substractionFive = divideByTwo - 5;
    let finalResult = substractionFive;
    return finalResult;
}

let num = 33;
const result = mindGame(num);
// console.log(result);