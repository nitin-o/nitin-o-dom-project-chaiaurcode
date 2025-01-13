const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let intervaid;

function rendamColor() {
    let colorHash="1234567890ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
         color += colorHash[Math.floor(Math.random()*16)];
        
    }

    document.body.style.backgroundColor = color;
    //return color;
}

function startColor() {
    if (!intervaid) {
        intervaid = setInterval(rendamColor, 1000);
    }
    
}

function stopColor() {

    if (intervaid) {
        clearInterval(intervaid);
        intervaid = null; 
    }
}

start.addEventListener("click",startColor);
stop.addEventListener("click",stopColor);
