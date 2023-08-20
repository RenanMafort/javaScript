function outcome() {
    let inputOne = Number(document.getElementById("num-one").value);
    let inputTwo = Number(document.getElementById("num-two").value);
    let total = 0;
    



    if (document.getElementById("box1").checked) {
        total = inputOne + inputTwo;
    }else if (document.getElementById("box2").checked){
        total = inputOne - inputTwo;
    }else if (document.getElementById("box3").checked){
        total = inputOne * inputTwo;
    }else{
        total = inputOne / inputTwo;
    }

    document.getElementById("resultArea").innerHTML = `O resultado é: ${total}`;
}