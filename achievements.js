function tournamentCard() {
    for(let i=0; i<achievements.length; i++){
        let mainWrapper = getE("tournament-wrapper");

        let tournamentCard = createEl("div");
        tournamentCard.className = "tournament-card";
        tournamentCard.id = i;


        let mainSection = createEl("div");
        mainSection.className = "main-section";

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
        tournamentInfo.style.display = "none"

        mainSection.onclick = function(){
            if(tournamentInfo.style.display === "none"){
                tournamentInfo.style.display = "block";
            }else{
                tournamentInfo.style.display = "none";
            }
        }

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
