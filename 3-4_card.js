function addCard(){
    const cardList=document.getElementById("cardList")

    const card =document.createElement("div");
    card.className="card";

    card.innerHTML="追加したカード要素";

    cardList.appendChild(card);
}