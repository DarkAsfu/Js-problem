// 1.
function feetToInch(feet){
    const inch = 12 * feet;
    return inch;
}
//console.log(feetToInch(5))
// 2.
function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}
//console.log(centimeterToMeter(1))
// 3. 
function  paperRequirements(book1, book2, book3){
    const pagePerBook1 = 100;
    const pagePerBook2 = 200;
    const pagePerBook3 = 300;

    let totalPageBook1 = book1 * pagePerBook1;
    let totalPageBook2 = book2 * pagePerBook2;
    let totalPageBook3 = book3 * pagePerBook3;

    const total_page_of_all_books = totalPageBook1+totalPageBook2+totalPageBook3;
    return total_page_of_all_books;


}
const pageNumber = paperRequirements(2, 4, 1);
//console.log(pageNumber);

// 4.
function bestFriend(friends){
    let largestName = friends[0];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length > largestName.length){
            largestName = friends[i];
        }
    }
    return largestName;
}

let friendsList = ['Mardia', 'Farhan', 'Tauhidul', 'Bushra', 'Soha', 'DipaIslam'];

let bigName = bestFriend(friendsList);
//console.log(bigName, typeof bigName);

// 5. 
function checkPositve(numbers){
    let positiveArray = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] >= 0){
            positiveArray.push(numbers[i]);
        }
        else{
            break;
        }
    }
    return positiveArray;
}

let arr = [12, 23, 32, -54, 23, -324];
let positiveNumber = checkPositve(arr);
console.log(positiveNumber);