function formatarMoney(value) {
    let valueFormated = value.Math.ceil((value * 100 ) / 100);
    return "R$ " + valueFormated.toFixed(2);
}

function formatarSplit(value) {
    if (value == 1) {
        return value + " pessoa";
    }

    return value + " pessoas";
}

function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = Number(document.getElementById("splitInput").value);

    let tipValue = bill * (tipPercent / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    console.log(billEach);

    document.getElementById("tipPercent").innerHTML = tipPercent + " %";
    document.getElementById("tipValue").innerHTML = formatarMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatarMoney(billTotal);

    document.getElementById("billEach").innerHTML = formatarMoney(billEach);
    document.getElementById("splitValue").innerHTML = formatarSplit(split);
}