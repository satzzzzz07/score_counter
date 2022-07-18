let scoreH =0;
let scoreG =0;

let scoreHome =document.getElementById("Home-sc")
let scoreGuest =document.getElementById("Guest-sc")


function addToHome(amount) {
    scoreH += amount;
    scoreHome.textContent=scoreH;
}

function addToGuest(amount) {
    scoreG += amount;
    scoreGuest.textContent=scoreG;
}

function newGame(){
    scoreH =0;
    scoreG =0;
    scoreGuest.textContent=scoreG;
    scoreHome.textContent=scoreH;
}
