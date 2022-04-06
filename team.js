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

    let buttonWrap = createEl("div");
    buttonWrap.className = "buttonWrap";
    let buttonLeft = createEl("button");
    buttonLeft.className = "buttonSwap";
    buttonLeft.id = "buttonLeft";
    let buttonRight = createEl("button");
    buttonRight.className = "buttonSwap";
    buttonRight.id = "buttonRight";

    buttonWrap.appendChild(buttonLeft);
    buttonWrap.appendChild(buttonRight);
    infoBlock.appendChild(buttonWrap);

    let playerBioWrap = createEl("div");
    playerBioWrap.id = "playerBioWrap";

    let nameWrap = createEl("p");
    nameWrap.className = "player-bio";
    let nameText = createTe("Ім'я: "+playersBIO[id].fullName);

    nameWrap.appendChild(nameText);
    playerBioWrap.appendChild(nameWrap);
    infoBlock.appendChild(playerBioWrap);

    let nicknameWrap = createEl("p");
    nicknameWrap.className = "player-bio";
    let nicknameText = createTe("Нікнейм: "+playersBIO[id].nickname);

    nicknameWrap.appendChild(nicknameText);
    playerBioWrap.appendChild(nicknameWrap);
    infoBlock.appendChild(playerBioWrap);

    let ageWrap = createEl("p");
    ageWrap.className = "player-bio";
    let monthDiff = Date.now() - playersBIO[id].age;
    let ageDate = new Date(monthDiff);
    let year = ageDate.getUTCFullYear();
    let age = Math.abs(year - 1970);
    let ageText = createTe("Вік: " + age);

    ageWrap.appendChild(ageText);
    playerBioWrap.appendChild(ageWrap);
    infoBlock.appendChild(playerBioWrap);

    let countryWrap = createEl("p");
    countryWrap.className = "player-bio";
    let countryText = createTe("Країна: "+playersBIO[id].country);

    countryWrap.appendChild(countryText);
    playerBioWrap.appendChild(countryWrap);
    infoBlock.appendChild(playerBioWrap);

    let townWrap = createEl("p");
    townWrap.className = "player-bio";
    let townText = createTe("Місто: "+playersBIO[id].town);

    townWrap.appendChild(townText);
    playerBioWrap.appendChild(townWrap);
    infoBlock.appendChild(playerBioWrap);

    let roleWrap = createEl("p");
    roleWrap.className = "player-bio";
    let roleText = createTe("Ігрова роль: "+playersBIO[id].gameRole);

    roleWrap.appendChild(roleText);
    playerBioWrap.appendChild(roleWrap);
    infoBlock.appendChild(playerBioWrap);

    let linkWrap = createEl("div");
    linkWrap.id = "linkWrap";

    let faceit = createEl("a");
    faceit.className = "linkInfo";
    faceit.href = playersBIO[id].faceit;
    faceit.target = "_blank";
    let faceitLogo = createEl("img");
    faceitLogo.src = "images/faceit.png";
    let faceitText = createEl("p");
    let faceitTextWrap = createTe(" Faceit");

    faceit.appendChild(faceitLogo);
    faceitText.appendChild(faceitTextWrap);
    faceit.appendChild(faceitText);
    linkWrap.appendChild(faceit);
    infoBlock.appendChild(linkWrap);

    let steam = createEl("a");
    steam.className = "linkInfo";
    steam.href = playersBIO[id].steam;
    steam.target = "_blank";
    let steamLogo = createEl("img");
    steamLogo.src = "images/steam.png";
    let steamText = createEl("p");
    let steamTextWrap = createTe(" Steam");

    steam.appendChild(steamLogo);
    steamText.appendChild(steamTextWrap);
    steam.appendChild(steamText);
    linkWrap.appendChild(steam);
    infoBlock.appendChild(linkWrap);


    mainBlock.appendChild(infoBlock);
    playerBlock.appendChild(mainBlock);

    let rightArrow = createEl("div");
    rightArrow.className = "arrow";
    rightArrow.id = "next";
    let rightArrowText = createTe(">");

    rightArrow.appendChild(rightArrowText);
    playerBlock.appendChild(rightArrow);


    getE("buttonLeft").onclick = function () {
        showBIO();
    }
    let showBIO = function (){
        let BIO = getE("playerBioWrap");
        BIO.style.display = "block";
        let link = getE("linkWrap");
        link.style.display = "none";
    }

    getE("buttonRight").onclick = function () {
        showLink();
    }
    let showLink = function () {
        let BIO = getE("playerBioWrap");
        BIO.style.display = "none";
        let link = getE("linkWrap");
        link.style.display = "block";
    }

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