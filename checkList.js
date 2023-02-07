//const str = ['ashraful', 'samin', 'farhan', 'tauhid'];
// 1.
const str2 = "Ashraful Islam"
console.log(typeof str2);
const isEven = true;
console.log(typeof isEven);
const pi = 3.1416;
console.log(typeof pi);
// 2.
let num = 0;
num = 2;
const gravity = 9.18;
//gravity = 9.12;
console.log(num , gravity);
// 3. yes
// 4. yes
// 5. yes
// 6. yes
// 7. yes
let i = 7;
while (i <= 19){
    if(i%2 != 0){
        console.log(i);
    }
    i++;
}
// 8. yes
// 9. yes
// 10. yes
let arr = [23, 42, 434, 78, 802, 38];
const arr2 = [];
for (let i = 0; i < arr.length; i++){
    const element = arr[i];
    if(element > 80){
        arr2.push(element);
    }
}
console.log(arr2);

// 11. yes
// 12. yes

let student = {
    Name: 'Ashraful Islam',
    Id: 221002403,
    Dept: "CSE" 
}
student.Dept = "Tex"
console.log(student.Dept);