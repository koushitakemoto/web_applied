const ranking=[
    { name: "ゆうき", score: 950 },
    { name: "さくら", score: 870 },
    { name: "はると", score: 600 },
    { name: "あおい", score: 700 }
];

function showRanking(){
    const list = document.getElementById("rankingList");
    list.innerHTML="";

    for(let i = 0; i<ranking.length;i++){
        const item = ranking[i];
        const li = document.createElement("li");
        li.innerText=`${item.name}:${item.score}点`;
        list.appendChild(li);
    }
}

showRanking();

function addScore(){
    const name=document.getElementById("nameInput").value;
    const score=Number(document.getElementById("scoreInput").value);

    ranking.push({name:name,score:score});
    showRanking();
}