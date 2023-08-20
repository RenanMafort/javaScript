console.log("Hello Word!");

let firstName = "Renan"; // por convenção let tomou o lugar do 'var'
let lastName = "Sereia";

console.log(firstName + lastName);

const price = 30; //const é imutavel
// price = 20;
console.log(price);


// ----------------------------
console.log("---------------------")

let itemName = "Name"; //String
let itemPrice ; //undefined or 'let itemPrice' = undefined
let itemNumber= 22; //Number
let itemBoolean= true ; //boolean
let itemNull = null ; //null

console.log(typeof itemBoolean);
console.log(typeof itemNull);

console.log(itemName);
console.log(itemPrice);
console.log(itemNumber);
console.log(itemBoolean);
console.log(itemNull);


//Criando Objetos (objects)
console.log("---------------------")
let objeto = {
    itemName: "Renan",
    itemOld: 24,
    relationship: true
};

let objetoTwo = {
    itemName: "Marc",
    itemOld: 22,
    relationship: false
};

console.log(objeto)
console.log(objeto.itemName)
//trocando o valor da variavel do objeto

objeto.itemName = "Renan Sereia";
console.log(objeto.itemName);

//Lista de Objetos (objects)
let listObjct = [objeto, objetoTwo];
console.log(listObjct);
console.log(listObjct[1].itemName);

listObjct.forEach(print => console.log(print)) // => LAMBDA, EM JAVA É ->


//Funcitons

function saleStatus(status) {
    console.log("Transaction " + status);
};

saleStatus("Approved");


function somar(value1, value2) {
    return value1 + value2;
}

console.log(somar(1,8));

//Operadores

let number = 2;
console.log(2 ** 3); //exponencial
console.log(++number); //incremento
console.log(--number); //decremento
console.log(number++); //incremento
console.log(number--); //decremento

console.log(number+=3); //atribuicao
console.log(number-=3); //atribuicao
console.log(number*=3); //atribuicao


//Operadores comparação

let num1 = 4;
console.log(num1 > 1);
console.log(num1 < 1);
console.log(num1 >= 1);
console.log(num1 <= 1);
console.log(num1 === 1);//verifica o tipo do valor e o valor
console.log(num1 == 1);// verifica apenas o valor
console.log(num1 !== 1);

let ternario = "Renan" === "Sereia" ? true : false;
console.log("Ternario = ", ternario);


//Operadores Lógicos
let valor1 = true;
let valor2 = false;

console.log("Operador lógico = ",valor1 && valor2);
console.log("Operador lógico = ",valor1 || valor2);
console.log("Operador lógico = ",valor1 && !valor2);


let corCliente = "red";
let corEstoque = "white";
let corVendida = corCliente && corEstoque
console.log(corVendida)


//IF ELSE
let speed = 100;
if (speed >= 100) {
    console.log("Dentro do IF")
}else {
    console.log("Dentro do ELSE")
}

//SWITCH CASE
switch (speed) {
    case 100:
        console.log("CASE 100")
        break;
    case 50:
        console.log("CASE 50")
    default:
        console.log("DEFAULT")
        break;
}

//FOR
for (let index = 0; index < 2; index++) {
    console.log(index);   
}

//WHILE
i = 1
while (i <= 40) {
    i++;
    console.log("2")
}


//DO WHILE
do {
    console.log("Numero ", i)
    i++
} while (i < 5);


//FOR IN
const myCar = {
    model:"BWM",
    year: 2023
}
for (let i in myCar) {
    console.log(i, myCar[i])
}

//FOR OF
const friends = ["RENAN","BEAA","CARLOS"]
for (const iterator of friends) {
    console.log(iterator)
}

friends.forEach(value => console.log(value));