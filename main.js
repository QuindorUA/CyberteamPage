getE("player1").onclick = function () {
    createPlayerCard("quindor");
}
getE("player2").onclick = function () {
    createPlayerCard("d3nn1");
}
getE("player3").onclick = function () {
    createPlayerCard("l0ner");
}
getE("player4").onclick = function () {
    createPlayerCard("dencool");
}
getE("player5").onclick = function () {
    createPlayerCard("bankai");
}


function createPlayerCard(nickname) {
    let pad = getE("roster");
    pad.style.padding = "1px";
    let playerHolder = getE("playerInfoHolder");
    playerHolder.innerHTML = "";
    playerHolder.style.display = "flex";

    let imageWrap = createEl("div");
    imageWrap.className = "image-wrapper";
    let image = createEl("img")
    switch (nickname) {
        case "quindor": image.src = "images/quindor.jpg";
            break;
        case "d3nn1": image.src = "images/d3nn1.jpg";
            break;
        case "l0ner": image.src = "images/l0ner.jpg";
            break;
        case "dencool": image.src = "images/dencool.jpg";
            break;
        case "bankai": image.src = "images/bankai.jpg";
            break;
    }

    imageWrap.appendChild(image);
    playerHolder.appendChild(imageWrap);
}


function createEl(element) {
    return document.createElement(element);
}
function  createTe(text) {
    return document.createTextNode(text);
}
function getE(id) {
    return document.getElementById(id);
}