let playersBIO = [
    {
        fullName: "Роман Гульоватий",
        nickname: "Quindor",
        image: "images/quindor.jpg",
        age: 21,
        country: "Україна",
        town: "Тернопіль",
        gameRole: "Captain",
        steam: "https://steamcommunity.com/profiles/76561198091757733",
        faceit: "https://www.faceit.com/en/players/Quindor_UA"
    },
    {
        fullName: "Денис Папуша",
        nickname: "d3nn1",
        image: "images/d3nn1.jpg",
        age: 14,
        country: "Україна",
        town: "Тернопіль",
        gameRole: "Rifler",
        steam: "https://steamcommunity.com/profiles/76561198352076109",
        faceit: "https://www.faceit.com/en/players/-d3nn1"
    },
    {
        fullName: "Олександр Абрамов",
        nickname: "L0nEr",
        image: "images/l0ner.jpg",
        age: 15,
        country: "Україна",
        town: "Івано-Франківськ",
        gameRole: "2nd Sniper",
        steam: "https://steamcommunity.com/profiles/76561198395100620",
        faceit: "https://www.faceit.com/en/players/-d3nn1"
    },
    {
        fullName: "Денис Коваленко",
        nickname: "DenCool",
        image: "images/dencool.jpg",
        age: 17,
        country: "Україна",
        town: "Тернопіль",
        gameRole: "Sniper",
        steam: "https://steamcommunity.com/profiles/76561198210846523",
        faceit: "https://www.faceit.com/en/players/DenCooL05"
    },
    {
        fullName: "Олег Парух",
        nickname: "Bankai",
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

function createEl(element) {
    return document.createElement(element);
}
function  createTe(text) {
    return document.createTextNode(text);
}
function getE(id) {
    return document.getElementById(id);
}