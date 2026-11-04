const enemies=[
    {name:"スライム",hp:5},
    {name:"ゴブリン",hp:9},
    {name:"ドラゴン",hp:20}
];

function showEnemies(){
    const list=document.getElementById("enemyList");
    list.innerHTML="";

    for(let i=0;i<enemies.length;i++){
        const enemy=enemies[i];
        const li=document.createElement("li");
        li.innerText=`${enemy.name}(HP:${enemy.hp})`;
        list.appendChild(li);
    }
}

function attack(){
    for(let i=0;i<enemies.length;i++){
        enemies[i].hp -=3;
        
         if(enemies[i].hp<0){
        enemies[i].hp=0;
    }
    }
   

        showEnemies();
}

showEnemies();