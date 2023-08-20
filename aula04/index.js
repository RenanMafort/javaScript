//Tipos de functions

//Function Declaration
function movie() {
    console.log("Fast and Furious 3");
}

movie(); // call


//Function Expression

const car = function (printTheNameCar) {
    console.log("The car is :" + printTheNameCar);
}

car("Tesla Model X");

// Utilizando os Agumentos em funções

function sum() {
    let total = 0;
    for (let value of arguments){
        total += value;
    }
    return total;
}

console.log(sum(10,20,30,40,50,60));

//configurando parametros default
function defautlParam(name="Renan",old=24) {
    console.log(name,old);
}
