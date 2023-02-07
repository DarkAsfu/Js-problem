function isLGSeven(num){
    // this condition use for detect input type
    // if input type isn't number then it's return error message
    if(typeof num != 'number'){
        return 'Please enter number'
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
//console.log(isLGSeven(6));