const canvas=document.getElementById("stage");
const ctx=canvas.getContext("2d");
const info=document.getElementById("info");

let x=40;
let last=performance.now();

function update(){
    x=x+2;
}

function draw(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    ctx.fillStyle="#7aa2ff";
    ctx.fillRect(x,160,40,40);
}

function loop(now){
    const dt=(now-last)/1000;
    last=now;

    info.textContent="dt:"+dt.toFixed(4)+"秒/1秒に約"+(1/dt).toFixed(0)+"回";

    update();
    draw();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);