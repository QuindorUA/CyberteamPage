getE("first-player").onclick = function () {
    playerInfoBlock(0);
}
getE("second-player").onclick = function () {
    playerInfoBlock(1);
}
getE("third-player").onclick = function () {
    playerInfoBlock(2);
}
getE("forth-player").onclick = function () {
    playerInfoBlock(3);
}
getE("fifth-player").onclick = function () {
    playerInfoBlock(4);
}


let playerInfoBlock = function (id) {
    let modelContainer = getE("current-roster");
    modelContainer.style.display = "none";

    let playerBlock = getE("player-info");
    playerBlock.style.display = "flex";
    playerBlock.innerHTML = "";

    let leftArrow = createEl("div");
    leftArrow.className = "arrow";
    leftArrow.id = "previous";
    let leftArrowText = createTe("<");

    leftArrow.appendChild(leftArrowText);
    playerBlock.appendChild(leftArrow);

    let mainBlock = createEl("div");
    mainBlock.className = "main-block";

    playerBlock.appendChild(mainBlock);

    let modelBlock = createEl("div");
    modelBlock.className = "model-block";
    modelBlock.onclick = function(){
        playerBlock.style.display = "none";
        getE("current-roster").style.display = "flex";
    }

    let modelImage = createEl("img");
    switch (id) {
        case 0 : modelImage.src = "images/blackwolf.png";
            break;
        case 1 : modelImage.src = "images/muhlik.png";
            break
        case 2 : modelImage.src = "images/romanov.png";
            break
        case 3 : modelImage.src = "images/rebel.png";
            break
        case 4 : modelImage.src = "images/rezan.png";
            break
    }


    modelBlock.appendChild(modelImage);
    mainBlock.appendChild(modelBlock);
    playerBlock.appendChild(mainBlock);

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

    mainBlock.appendChild(infoBlock);
    playerBlock.appendChild(mainBlock);

    let rightArrow = createEl("div");
    rightArrow.className = "arrow";
    rightArrow.id = "next";
    let rightArrowText = createTe(">");

    rightArrow.appendChild(rightArrowText);
    playerBlock.appendChild(rightArrow);


    getE("previous").onclick = function () {
        if (id===0){
            id = 4;
            playerInfoBlock(id);
        }else{
            id --;
            playerInfoBlock(id);
        }
    }

    getE("next").onclick = function () {
        if (id===4){
            id = 0;
            playerInfoBlock(id);
        }else{
            id ++;
            playerInfoBlock(id);
        }
    }

}