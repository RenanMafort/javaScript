//Arrays
const list = [1,2,5,7,8];
console.log(list);

list.push(9,10);
list.unshift(0)
list.splice(2,0,3,4)
console.log(list);


console.log(list.indexOf(8));//localizar items
console.log(list.includes(2));//localizar items

//Localizando itens em um array de referencia
const movies = [
    {id:1, movieName:"Dejavu"},
     {id:2, movieName:"Fast and Furious"},
     {id:3, movieName:"Sei lá"}
]
console.log(movies);
console.log(movies.find(search => search.movieName === "Dejavu"));

//Excluindo itens de um array
console.log("---------Removendo itens de um array---------");
const number = [1,2,3,4,5,6,7];

console.log(number);

console.log(number.pop());
console.log(number.shift());

console.log(number.splice(2,3));

//Esvaziando Arrays
console.log("---------Esvaziando um array---------");
const clearArray = [1,2,3,4,5,6,7];

// clearArray = [];
// clearArray.length = 0;
clearArray.splice(0,clearArray.length);
console.log(clearArray);

//Concatenando arrayss
let numbers = [1,2,3,4,5,6,7];
let letters = ["A","B","C","D","E"];

let all = numbers.concat(letters);
console.log(all);
let half = all.slice(4,6)
console.log(half);

//utilizando joins in arrayss
let clients = ["March","August","Cezar"]
console.log(clients.join(", "));

//revertendo um array
let reverts = ["March","August","Cezar"]
console.log(reverts.sort());//ordenaa
console.log(reverts.reverse());//inverte

//verificando elementos na array
const tempLondon = [18,13,8,2 ,-1, "a"]
const temNegative = tempLondon.every(t => t >= 0);
console.log(temNegative);

const temNegativeFilter = tempLondon.filter(t => t <= 0);
console.log(temNegativeFilter);


