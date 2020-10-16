let playersBIO = [
    {
        fullName: "Роман 'Quindor' Гульоватий",
        image: "images/quindor.jpg",
        age: 21,
        country: "Україна",
        town: "Тернопіль",
        gameRole: "Captain",
        steam: "https://steamcommunity.com/profiles/76561198091757733",
        faceit: "https://www.faceit.com/en/players/Quindor_UA"
    },
    {
        fullName: "Денис 'd3nn1' Папуша",
        image: "images/d3nn1.jpg",
        age: 14,
        country: "Україна",
        town: "Тернопіль",
        gameRole: "Rifler",
        steam: "https://steamcommunity.com/profiles/76561198352076109",
        faceit: "https://www.faceit.com/en/players/-d3nn1"
    },
    {
        fullName: "Олександр 'L0nEr' Абрамов",
        image: "images/l0ner.jpg",
        age: 15,
        country: "Україна",
        town: "Івано-Франківськ",
        gameRole: "2nd Sniper",
        steam: "https://steamcommunity.com/profiles/76561198395100620",
        faceit: "https://www.faceit.com/en/players/-d3nn1"
    },
    {
        fullName: "Денис 'DenCool' Коваленко",
        image: "images/dencool.jpg",
        age: 17,
        country: "Україна",
        town: "Тернопіль",
        gameRole: "Sniper",
        steam: "https://steamcommunity.com/profiles/76561198210846523",
        faceit: "https://www.faceit.com/en/players/DenCooL05"
    },
    {
        fullName: "Олег 'Bankai' Парух",
        image: "images/bankai.jpg",
        age: 17,
        country: "Україна",
        town: "Львів",
        gameRole: "Rifler",
        steam: "https://steamcommunity.com/profiles/76561198412603211",
        faceit: "https://www.faceit.com/en/players/OlegParuh"
    },
    ]
let achievements = [
    {
        name: "ЛАНЕТ CS:GO CHALLENGE",
        url: "https://www.faceit.com/en/csgo/tournament/c64b0917-9ac6-447e-9ddf-5fc54caf1a63",
        organization: "Ланет PLAY",
        type: "Online",
        poster: "images/lanet.jpg",
        date: "24.11.2018",
        place: "9th-16th",
        roster: {
            1:"Quindor",
            2:"Qvistor",
            3:"Rutland",
            4:"m1nicee",
            5:"d3nn1"
        }
    },
    {
        name: "TERNOPIL REGIONAL CS:GO QUALIFIER",
        url: "https://uesf.org.ua/tournaments/31",
        organization: "UESF",
        type: "LAN",
        poster: "images/uesf.jpg",
        date: "30.06.2019",
        place: "5th-6th",
        roster: {
            1: "Quindor",
            2: "Qvistor",
            3: "Rutland",
            4: "DenCool",
            5: "d3nn1"
        }
    },
    {
        name: "ASUS ROG AUTUMN CUP 2020 1st qualifier",
        url: "https://www.faceit.com/en/championship/724b35e3-8bc1-4a85-9334-3f8290d531d4/ASUS%20ROG%20AUTUMN%20CUP%202020%201st%20qualifer/standings/column",
        organization: "Asus",
        type: "Online",
        poster: "images/asus.jpg",
        date: "15.09.20",
        place: "17th-32th",
        roster: {
            1: "Quindor",
            2: "L0nEr",
            3: "Bankai",
            4: "DenCool",
            5: "d3nn1"
        }
    },
    {
        name: "Binance CS:GO Cup 2020",
        url: "https://gg.ua/ua/csgo/tournaments/2899",
        organization: "Binance",
        type: "Online",
        poster: "images/binance.jpg",
        date: "01.08.20",
        place: "65th-128th",
        roster: {
            1: "Quindor",
            2: "L0nEr",
            3: "Bankai",
            4: "DenCool",
            5: "d3nn1"
        }
    }
]

function loadButtons() {
    getE("player1").onclick = function () {
        createPlayerCard(0);
    }
    getE("player2").onclick = function () {
        createPlayerCard(1);
    }
    getE("player3").onclick = function () {
        createPlayerCard(2);
    }
    getE("player4").onclick = function () {
        createPlayerCard(3);
    }
    getE("player5").onclick = function () {
        createPlayerCard(4);
    }
}

function createPlayerCard(id) {
    let pad = getE("roster");
    pad.style.padding = "1px";
    let playerHolder = getE("playerInfoHolder");
    playerHolder.innerHTML = "";
    playerHolder.style.display = "flex";

    let imageWrap = createEl("div");
    imageWrap.className = "image-wrapper";
    let image = createEl("img");
    image.src = playersBIO[id].image;
    imageWrap.onclick = function(){
        playerHolder.style.display = "none";
        pad.style.padding = "84px 0";
    }

    imageWrap.appendChild(image);
    playerHolder.appendChild(imageWrap);

    let infoWrap = createEl("div");
    infoWrap.className = "player-info";

    let playerName = createEl("p");
    playerName.className = "player-name";
    let nameText = createTe(playersBIO[id].fullName);

    playerName.appendChild(nameText);
    infoWrap.appendChild(playerName);

    let playerLinks = createEl("div");
    playerLinks.className = "player-links";
    let steamLink = createEl("div");
    steamLink.className = "steam-button";
    let steamReDirect = createEl("a");
    steamReDirect.target = "_blank";
    steamReDirect.href = playersBIO[id].steam;
    let steamSpan = createEl("span");
    steamSpan.className = "hyperspan";
    let faceitLink = createEl("div");
    faceitLink.className = "faceit-button";
    let faceitReDirect = createEl("a");
    faceitReDirect.target = "_blank";
    faceitReDirect.href = playersBIO[id].faceit;
    let faceitSpan = createEl("span");
    faceitSpan.className = "hyperspan";
    let eseaLink = createEl("div");
    eseaLink.className = "esea-button";

    steamReDirect.appendChild(steamSpan);
    steamLink.appendChild(steamReDirect);
    playerLinks.appendChild(steamLink);

    faceitReDirect.appendChild(faceitSpan);
    faceitLink.appendChild(faceitReDirect);
    playerLinks.appendChild(faceitLink);

    playerLinks.appendChild(eseaLink);
    infoWrap.appendChild(playerLinks);
    playerHolder.appendChild(infoWrap);

    let ageWrap = createEl("p");
    ageWrap.className = "player-bio";
    let ageText = createTe("Вік: "+playersBIO[id].age);


    ageWrap.appendChild(ageText);
    infoWrap.appendChild(ageWrap);

    let countryWrap = createEl("p");
    countryWrap.className = "player-bio";
    let countryText = createTe("Країна: "+playersBIO[id].country);

    countryWrap.appendChild(countryText);
    infoWrap.appendChild(countryWrap);

    let townWrap = createEl("p");
    townWrap.className = "player-bio";
    let townText = createTe("Місто: "+playersBIO[id].town);

    townWrap.appendChild(townText);
    infoWrap.appendChild(townWrap);

    let roleWrap = createEl("p");
    roleWrap.className = "player-bio";
    let roleText = createTe("Ігрова роль: "+playersBIO[id].gameRole);

    roleWrap.appendChild(roleText);
    infoWrap.appendChild(roleWrap);

}

function tournamentCard() {
    for(let i=0; i<achievements.length; i++){
        let mainWrapper = getE("tournament-wrapper");

        let tournamentCard = createEl("div");
        tournamentCard.className = "tournament-card";
        tournamentCard.id = "tournament"+i;

        let mainSection = createEl("div");
        mainSection.className = "main-section";

        let tournamentURL = createEl("a");
        tournamentURL.target = "_blank";
        tournamentURL.href = achievements[i].url;

        mainSection.appendChild(tournamentURL);

        let poster = createEl("img");
        poster.className = "poster";
        poster.src = achievements[i].poster;

        let placement = createEl("p");
        placement.className = "placement-text";
        let cupWrap = createEl("i");
        cupWrap.className = "fa fa-trophy";
        placement.appendChild(cupWrap);
        let placementText = createTe(" "+achievements[i].place)

        mainSection.appendChild(poster);
        placement.appendChild(placementText);
        mainSection.appendChild(placement);
        tournamentCard.appendChild(mainSection);

        let tournamentInfo = createEl("div");
        tournamentInfo.className = "tournament-info";

        tournamentCard.appendChild(tournamentInfo);

        let tourName = createEl("p");
        tourName.className = "tournament-info-text";
        let tourNameHeadingWrap = createEl("span");
        let tourNameHeading = createTe("Назва: ")
        tourNameHeadingWrap.appendChild(tourNameHeading);
        let tourNameText = createTe(achievements[i].name);

        tourName.appendChild(tourNameHeadingWrap);
        tourName.appendChild(tourNameText);
        tournamentInfo.appendChild(tourName);

        let tourOrg = createEl("p");
        tourOrg.className = "tournament-info-text";
        let tourOrgHeadingWrap = createEl("span");
        let tourOrgHeading = createTe("Організатор: ")
        tourOrgHeadingWrap.appendChild(tourOrgHeading);
        let tourOrgText = createTe(achievements[i].organization);

        tourOrg.appendChild(tourOrgHeadingWrap);
        tourOrg.appendChild(tourOrgText);
        tournamentInfo.appendChild(tourOrg);

        let tourDate = createEl("p");
        tourDate.className = "tournament-info-text";
        let tourDateHeadingWrap = createEl("span");
        let tourDateHeading = createTe("Дата проведення: ")
        tourDateHeadingWrap.appendChild(tourDateHeading);
        let tourDateText = createTe(achievements[i].date);

        tourDate.appendChild(tourDateHeadingWrap);
        tourDate.appendChild(tourDateText);
        tournamentInfo.appendChild(tourDate);

        let tourType = createEl("p");
        tourType.className = "tournament-info-text";
        let tourTypeHeadingWrap = createEl("span");
        let tourTypeHeading = createTe("Тип турніру: ")
        tourTypeHeadingWrap.appendChild(tourTypeHeading);
        let tourTypeText = createTe(achievements[i].type);

        tourType.appendChild(tourTypeHeadingWrap);
        tourType.appendChild(tourTypeText);
        tournamentInfo.appendChild(tourType);

        let tourRoster = createEl("p");
        tourRoster.className = "tournament-info-text";
        let tourRosterHeadingWrap = createEl("span");
        let tourRosterHeading = createTe("Склад команди: ")
        tourRosterHeadingWrap.appendChild(tourRosterHeading);
        let tourRosterText = createTe(achievements[i].roster[1]+", "+achievements[i].roster[2]+", "+achievements[i].roster[3]+", "+achievements[i].roster[4]+", "+achievements[i].roster[5]);

        tourRoster.appendChild(tourRosterHeadingWrap);
        tourRoster.appendChild(tourRosterText);
        tournamentInfo.appendChild(tourRoster);

        mainWrapper.appendChild(tournamentCard);
    }
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