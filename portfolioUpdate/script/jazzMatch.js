var players = [
    {
        name: "Karl Malone",
        number: 32,
        difficulty: "bw",
        src: '/images/KarlMalone.jpg',
    },
    {
        name: "John Stockton",
        number: 12,
        difficulty: "bw",
        src: '/images/JohnStockton.jpg',
    },
    {
        name: "Rudy Gobert",
        number: 27,
        difficulty: "bw",
        src: '/images/RudyGobert.jpg',
    },
    {
        name: "Ricky Rubio",
        number: 3,
        difficulty: "bw",
        src: '/images/RickyRubio.jpg',
    },
    {
        name: "Kyle Korver",
        number: 26,
        difficulty: "bw",
        src: '/images/KyleKorver.jpg',
    },
    {
        name: "Joe Ingles",
        number: 2,
        difficulty: "bw",
        src: '/images/JoeIngles.jpg',
    },
    {
        name: "Donovan Mitchell",
        number: 45,
        difficulty: "bw",
        src: '/images/DonovanMitchell.jpg',
    },
    {
        name: "Andrei Kirilenko",
        number: 47,
        difficulty: "ca",
        src: '/images/AndreiKirilenko.jpg',
    },
    {
        name: "Paul Millsap",
        number: 24,
        difficulty: "ca",
        src: '/images/PaulMillsap.jpg',
    },
    {
        name: "Jae Crowder",
        number: 99,
        difficulty: "ca",
        src: '/images/JaeCrowder.jpg',
    },
    {
        name: "Matt Harpring",
        number: 15,
        difficulty: "ca",
        src: '/images/MattHarpring.jpg',
    },
    {
        name: "Mark Eaton",
        number: 53,
        difficulty: "ca",
        src: '/images/MarkEaton.jpg',
    },
    {
        name: "Deron Williams",
        number: 8,
        difficulty: "ca",
        src: '/images/DeronWilliams.jpg'
    },
    {
        name: "Derrick Favors",
        number: 15,
        difficulty: "ca",
        src: '/images/DerrickFavors.jpg',
    },
    {
        name: "Carlos Boozer",
        number: 5,
        difficulty: "ca",
        src: '/images/CarlosBoozer.jpg',
    },
    {
        name: "Alec Burks",
        number: 10,
        difficulty: "as",
        src: '/images/AlecBurks.jpg',
    },
    {
        name: "Adam Keefe",
        number: 31,
        difficulty: "as",
        src: '/images/AdamKeefe.jpg',
    },
    {
        name: "Trevor Booker",
        number: 33,
        difficulty: "as",
        src: '/images/TrevorBooker.jpg',
    },
    {
        name: "Thurl Bailey",
        number: 41,
        difficulty: "as",
        src: '/images/ThurlBailey.jpg',
    },
    {
        name: "Greg Ostertag",
        number: 00,
        difficulty: "as",
        src: '/images/GregOstertag.jpg',
    },
    {
        name: "Mehmet Okur",
        number: 13,
        difficulty: "as",
        src: '/images/MehmetOkur.jpg',
    },
    {
        name: "Jeremy Evans",
        number: 40,
        difficulty: "as",
        src: '/images/JeremyEvans.jpg',
    },
    {
        name: "Jeff Hornacek",
        number: 14,
        difficulty: "as",
        src: '/images/JeffHornacek.jpg',
    },
    {
        name: "CJ Miles",
        number: 34,
        difficulty: "as",
        src: '/images/CJMiles.jpg',
    },
    {
        name: "Bryon Russell",
        number: 3,
        difficulty: "as",
        src: '/images/BryonRussell.jpg',
    },
    {
        name: "Antoine Carr",
        number: 55,
        difficulty: "as",
        src: '/images/AntoineCarr.jpg',
    },
    {
        name: "David Benoit",
        number: 21,
        difficulty: "sf",
        src: '/images/DavidBenoit.jpg',
    },
    {
        name: "Sundiata Gaines",
        number: 15,
        difficulty: "sf",
        src: '/images/SundiataGaines.jpg',
    },
    {
        name: "Shandon Anderson",
        number: 30,
        difficulty: "sf",
        src: '/images/ShandonAnderson.jpg',
    },
    {
        name: "Ronnie Brewer",
        number: 9,
        difficulty: "sf",
        src: '/images/RonnieBrewer.jpg',
    },
    {
        name: "John Crotty",
        number: 25,
        difficulty: "sf",
        src: '/images/JohnCrotty.jpg',
    },
    {
        name: "Jeff Malone",
        number: 24,
        difficulty: "sf",
        src: '/images/JeffMalone.jpg',
    },
    {
        name: "Jarron Collins",
        number: 31,
        difficulty: "sf",
        src: '/images/JarronCollins.jpg',
    },
    {
        name: "Jacque Vaughn",
        number: 11,
        difficulty: "sf",
        src: '/images/JacqueVaughn.jpg',
    },
    {
        name: "Howard Eisley",
        number: 10,
        difficulty: "sf",
        src: '/images/HowardEisley.jpg',
    },
    {
        name: "Darrell Griffith",
        number: 35,
        difficulty: "sf",
        src: '/images/Darrell Griffith.jpg',
    },
    {
        name: "Adrian Dantley",
        number: 4,
        difficulty: "sf",
        src: '/images/AdrianDantley.jpg',
    },
    {
        name: "Blue Edwards",
        number: 30,
        difficulty: "sf",
        src: '/images/BlueEdwards.jpg',
    },
]
var display = [];
var skillBtn = document.querySelectorAll(".skill");
var go = document.getElementById("go");
var skill;
var matchBtn = document.querySelectorAll(".matchButtons");
var playerDisplay;
var message = document.querySelector(".message");
var scoreDisplay = document.getElementById("score");
var score = 0;
var scorePossible;
var guessCounter = 0;
var isMatch = false;
var card = document.querySelector(".card");
var welcome = document.querySelector("#welcome");
var reset = document.getElementById("reset");

start();
go.addEventListener("click", function(){
    game();
})

function start(){
    for(var i = 0; i < matchBtn.length; i++){
        matchBtn[i].classList.add("hide");
    }
}

//Skill level selection
for (var i = 0; i < skillBtn.length; i++){
    skillBtn[i].addEventListener("click", function(){
        skillBtn[0].classList.remove("selected");
        skillBtn[1].classList.remove("selected");
        skillBtn[2].classList.remove("selected");
        skillBtn[3].classList.remove("selected");
        this.classList.add("selected");
        var skill = this.textContent;
        display = [];
        setCards(skill);
    });
}

//set initial array for desired skill level
function setCards(skill){
    if(skill === "Bandwagon"){
        scorePossible = 5;
        bandWagon();
    }
    else if(skill === "Casual"){
        scorePossible = 10;
        bandWagon();
        casual();
    }
    else if(skill === "All-Star"){
        scorePossible = 20;
        bandWagon();
        casual();
        allStar();
    }
    else{
        scorePossible = players.length - 1;
        display = players;
    }
    go.classList.remove("hide");
    shuffleDisplay(display);
}
//pick out all players for "Bandwagon" level
function bandWagon(){
    for(var i = 0; i < players.length; i++){
        if (players[i].difficulty === "bw"){
            display.push(players[i]);
        }
    }
}
//pick out all players for "Casual" level
function casual(){
    for(var i = 0; i < players.length; i++){
        if (players[i].difficulty === "ca"){
            display.push(players[i]);
        }
    }
}
//pick out all players for "All-star level
function allStar(){
    for(var i = 0; i < players.length; i++){
        if (players[i].difficulty === "as"){
            display.push(players[i]);
        }
    }
}
//shuffle order of display array
function shuffleDisplay(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function game(){
    setup();
    if(isMatch){
        score++;
    }
    if (guessCounter < scorePossible){
        checkMatch();
    }else{
        gameOver();
        
    }
}

function showButtons(){
    for (var i = 0; i < matchBtn.length; i++){
        matchBtn[i].classList.remove("hide");
    }
}

function hideButtons(){
    for (var i = 0; i < matchBtn.length; i++){
        matchBtn[i].classList.add("hide");
    }
}

function checkMatch(){
    for(var i = 0; i < matchBtn.length; i++){
        matchBtn[i].addEventListener("click", function(){
            if(this.textContent === playerDisplay){
                console.log("match");
                message.textContent = "Correct!";
                this.classList.add("hide");
                isMatch = true;
            }else{
                console.log("no match");
                message.textContent = "Incorrect";
                isMatch = false;
            }
            go.classList.remove("hide");
            go.textContent= "Next";
            hideButtons();
        })
    }
    guessCounter++;
}

function setup(){
    skillBtn[0].disabled = true;
        skillBtn[1].disabled = true;
        skillBtn[2].disabled = true;
        skillBtn[3].disabled = true;
    card.classList.add("show");
    message.classList.remove("hide");
    scoreDisplay.classList.remove("hide");
    welcome.classList.add("hide");
    showButtons();
    go.classList.add("hide");
    playerDisplay = display[guessCounter].name;
    document.playerPhoto.src = display[guessCounter].src;
    scoreDisplay.textContent = guessCounter + 1 + " / " + scorePossible; 
    message.textContent = "";
}

function gameOver() {
    document.playerPhoto.src = "";
    card.classList.remove("show");
    welcome.classList.remove("hide");
    message.textContent = "";
    go.classList.add("hide");
    scoreDisplay.classList.add("hide");
    reset.classList.remove("hide");
    hideButtons();
    reset.addEventListener("click", function(){
        window.location.reload(false);
    })
    var finalScore = score / scorePossible;
    if (finalScore <= .2){
        welcome.textContent = "You got " +  score + " out of " + scorePossible + "..." + " Let's just pretend that didn't happen. Click reset to try again.";
    }
    else if(finalScore > .2 && finalScore <= .5){
        welcome.textContent = "You got " +  score + " out of " + scorePossible + "." + " I'm not mad, just disappointed. Click reset to try again.";
    }
    else if (finalScore > .5 && finalScore < .7){
        welcome.textContent = "You got " +  score + " out of " + scorePossible + "." + " I think you can do better than that. Click reset to try again.";
    }
    else if (finalScore >= .7 && finalScore < .999){
        welcome.textContent = "You got " +  score + " out of " + scorePossible + "!" + " Someone really knows their Jazz-men! Click reset to try again.";
    }
    else if (finalScore === 1){
        welcome.textContent = "You got " +  score + " out of " + scorePossible + "!" + " Look at you with the Jazz player match-a-bility! Click reset to play again.";
    }
}

