const canvas=document.getElementById("stage");
const ctx=canvas.getContext("2d");

const img=new Image();
img.src="5-5_player.png";

let x=100;
let y=160;
const size=48;
const speed=240;

const keys={};

document.addEventListener("keydown",(e)=>{
    keys[e.code]=true;
});
document.addEventListener("keyup",(e)=>{
    keys[e.code]=false;
});

function update(dt){
    if(keys["ArrowRight"]){
        x=x+speed*dt;
    }
    if(keys["ArrowLeft"]){
        x=x-speed*dt;
    }
    if(keys["ArrowDown"]){
        y=y+speed*dt;
    }
    if(keys["ArrowUp"]){
        y=y-speed*dt;
    }

    if(x<0){
        x=0;
    }
    if(x>canvas.width-size){
        x=canvas.width-size;
    }
    if(y<0){
        y=0;
    }
    if(y>canvas.height-size){
        y=canvas.height-size;
    }
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,x,y,size,size);
}

let last=performance.now();

function loop(now){
    const dt=(now-last)/1000;
    last=now;
    update(dt);
    draw();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);