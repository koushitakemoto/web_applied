const canvas=document.getElementById("stage");
const ctx =canvas.getContext("2d");

ctx.fillStyle="#7aa2ff"
ctx.fillRect(40,40,40,40)

ctx.fillStyle="#ef476f";
ctx.fillRect(160,120,80,40);

ctx.fillStyle="#ffb166";
ctx.beginPath();
ctx.arc(400,200,30,0,Math.PI*2);
ctx.fill();