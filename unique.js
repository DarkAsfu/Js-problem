function unique(num){
    const uniqueArray = [];
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(uniqueArray.includes(element) != true){
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}
const arr = [5, 10, 2, 2, 85, 96, 10, 5, 74, 85, 74];
const result = unique(arr);
console.log(result);