const canvas=document.getElementById("stage");
const ctx=canvas.getContext("2d");
const info=document.getElementById("info");

let x=100;
let y=80;
let vx=180;
let vy=140;
const r=24;
let last=performance.now();
const img=new Image();
img.src="5-5_player.png";

function update(dt){
    x=x+vx*dt;
    y=y+vy*dt;

    if(x+r>canvas.width){
        x=canvas.width-r;
        vx=-vx
    }

    if(x-r<0){
        x=r;
        vx=-vx;
    }
    if(y+r>canvas.height){
        y=canvas.height-r;
        vy=-vy;
    }
    if(y-r<0){
        y=r;
        vy=-vy;
    }
}

function draw(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
    ctx.drawImage(img,x-r,y-r,r*2,r*2);
}

function loop(now){
    const dt=(now-last)/1000;
    last=now;

    info.textContent="dt:"+dt.toFixed(4)+"秒/1秒に約"+(1/dt).toFixed(0)+"回";

    update(dt);
    draw();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);