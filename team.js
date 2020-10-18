getE("first-player").onclick = function () {
    playerInfoBlock(1, "images/blackwolf.png");
}
getE("second-player").onclick = function () {
    playerInfoBlock(2, "images/muhlik.png");
}
getE("third-player").onclick = function () {
    playerInfoBlock(0, "images/romanov.png");
}
getE("forth-player").onclick = function () {
    playerInfoBlock(3, "images/rebel.png");
}
getE("fifth-player").onclick = function () {
    playerInfoBlock(4, "images/rezan.png");
}


let playerInfoBlock = function (id, img) {
    let modelContainer = getE("current-roster");
    modelContainer.style.display = "none";

    let playerBlock = getE("player-info");
    playerBlock.style.display = "flex";
    playerBlock.innerHTML = "";

    let modelBlock = createEl("div");
    modelBlock.className = "model-block";
    modelBlock.onclick = function(){
        playerBlock.style.display = "none";
        getE("current-roster").style.display = "flex";
    }
    let modelImage = createEl("img");
    modelImage.src = img;


    modelBlock.appendChild(modelImage)
    playerBlock.appendChild(modelBlock);

    let infoBlock = createEl("div");
    infoBlock.className = "info-block";


    let nameWrap = createEl("p");
    nameWrap.className = "player-bio";
    let nameText = createTe("Ім'я: "+playersBIO[id].fullName);

    nameWrap.appendChild(nameText);
    infoBlock.appendChild(nameWrap);

    let nicknameWrap = createEl("p");
    nicknameWrap.className = "player-bio";
    let nicknameText = createTe("Нікнейм: "+playersBIO[id].nickname);

    nicknameWrap.appendChild(nicknameText);
    infoBlock.appendChild(nicknameWrap);

    let ageWrap = createEl("p");
    ageWrap.className = "player-bio";
    let ageText = createTe("Вік: "+playersBIO[id].age);

    ageWrap.appendChild(ageText);
    infoBlock.appendChild(ageWrap);

    let countryWrap = createEl("p");
    countryWrap.className = "player-bio";
    let countryText = createTe("Країна: "+playersBIO[id].country);

    countryWrap.appendChild(countryText);
    infoBlock.appendChild(countryWrap);

    let townWrap = createEl("p");
    townWrap.className = "player-bio";
    let townText = createTe("Місто: "+playersBIO[id].town);

    townWrap.appendChild(townText);
    infoBlock.appendChild(townWrap);

    let roleWrap = createEl("p");
    roleWrap.className = "player-bio";
    let roleText = createTe("Ігрова роль: "+playersBIO[id].gameRole);

    roleWrap.appendChild(roleText);
    infoBlock.appendChild(roleWrap);

    playerBlock.appendChild(infoBlock);
}