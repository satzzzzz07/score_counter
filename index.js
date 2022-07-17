let scoreH =0;
let scoreG =0;

let scoreHome =document.getElementById("Home-sc")
let scoreGuest =document.getElementById("Guest-sc")


function addOneH(){
    scoreH+=1;
    scoreHome.textContent=scoreH;
}

function addTwoH(){
    scoreH+=2;
    scoreHome.textContent=scoreH;
}

function addThreeH(){
    scoreH+=3;
    scoreHome.textContent=scoreH;
}

function addOneG(){
    scoreG+=1;
    scoreGuest.textContent=scoreG;
}

function addTwoG(){
    scoreG+=2;
    scoreGuest.textContent=scoreG;
}

function addThreeG(){
    scoreG+=3;
    scoreGuest.textContent=scoreG;
}


function newGame(){
    scoreH =0;
    scoreG =0;
    scoreGuest.textContent=scoreG;
    scoreHome.textContent=scoreH;
}

if 