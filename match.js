const numbers = [45, 585, 56, 78, 12];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    //console.log(number);
}

// simplefied version ' for of loop '
for (const number of numbers){
    //console.log(number);
}
//-------------------------------------------
// search er smy duita k lower case kore dibo
function matchProducts(products, search, money){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase()) && product.price <= money){
            matched.push(product);
        }
    }
    return matched;
}

const products = [
    {id: 1, name: 'Walton Phone', price: 19000},
    {id: 2, name: 'iPhone', price: 170000},
    {id: 3, name: 'xiaomi laptop', price: 55000},
    {id: 4, name: 'Samsung Phone', price: 180000},
    {id: 5, name: 'Google Pixel', price: 75000},
    {id: 6, name: 'phone & laptop', price: 60000},
    {id: 7, name: 'Mackbook pro Laptop m1 Chip', price: 260000},
];
const result = matchProducts(products, 'laptop' , 60000);

console.log(result);