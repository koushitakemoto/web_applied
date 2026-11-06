const canvas=document.getElementById("stage");
const ctx=canvas.getContext("2d");

let x=40;
let y=40;

function update(){
    x=x+2;
    y=y+1;
}

function draw(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    ctx.fillStyle="#7aa2ff";
    ctx.fillRect(x,y,40,40);
}

function loop(){
    update();
    draw();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);