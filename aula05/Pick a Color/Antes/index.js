const colors = ["#8B0000","#FF0000","#FF69B4","#C71585","#FFD700"];
const btn = document.getElementById("btn");
const colorButton = document.querySelector(".color");

btn.addEventListener("click",function () {
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomNumber]
    colorButton.textContent = colors[randomNumber];
})