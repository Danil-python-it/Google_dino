const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown",function(event){
    jump();
});

function jump() {
    if(dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    },400)
}

let isAleve = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).top);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).left);
    if(dinoTop >= -200 && cactusLeft < 175 && cactusLeft > 125){
        alert("game over!!!!!!!!!!!!!")
    }

}, 10)