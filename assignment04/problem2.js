function  evenOdd(name){
    // this condition use for detect input type
    // if input type isn't string then it's return error message
    if(typeof name !== 'string'){
        return 'Please enter string'
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

const inputName = 'chatgpt';
const result = evenOdd(inputName);
console.log(result);