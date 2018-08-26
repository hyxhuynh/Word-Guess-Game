var mainInfo = [
    {
        singer: "Mariah Carey",
        song: "Vision of Love",
        image: "assets/images/Mariah_Carey.jpeg",
    },
    {
        singer: "U2 ",
        song: "One",
        image: "assets/images/U2.jpg",
    },
    {
        singer: "Backstreet Boys",
        song: "I Want It That Way",
        image: "assets/images/Backstreet_Boys.jpg",
    },
    {
        singer: "Whitney Houston",
        song: "I Will Always Love You",
        image: "assets/images/Whitney_Houston.jpg",
    },
    {
        singer: "Madonna",
        song: "Vogue",
        image: "assets/images/Madonna.jpg",
    },
    {
        singer: "Britney Spears",
        song: "Baby One More Time",
        image: "assets/images/Britney_Spears.jpg",
    },
    {
        singer: "TLC",
        song: "Waterfalls",
        image: "assets/images/TLC.jpg",
    },
    {
        singer: "R.E.M.",
        song: "Losing My Religion",
        image: "assets/images/REM.jpg",
    },
    {
        singer: "Destiny's Child",
        song: "Say My Name",
        image: "assets/images/Destiny's_Child.jpg",
    },
    {
        singer: "Celine Dion",
        song: "My Heart Will Go On",
        image: "assets/images/Celine_Dion.png",
    },
    {
        singer: "Natalie Imbruglia",
        song: "Torn",
        image: "assets/images/Natalie_Imbruglia.png",
    },
    {
        singer: "Spice Girls",
        song: "Wannabe",
        image: "assets/images/Spice_Girls.png",
    }
   
]

//Variables
var letters;
var guessesRemaining;
var wins;
var losses;
var underscores;
var guessedLetters;
var individualMainInfo;
var randomSong;
var songImage;

var songName;
var singerName;
var connector;
var instruction;
var directionsText;

var pauseWin;

//Events
window.onload = function () {
    
    wins = 0;
    losses = 0;
    pauseWin = false;

    reset();

}

document.onkeyup = function (event) {
    var userGuess = event.key;
    directionsText = document.getElementById("directions-text");
    directionsText.textContent = "";

    if(pauseWin){
        reset();
        pauseWin = false;
        instruction = "";

        document.getElementById("instructionHTML").innerHTML = instruction;
        return;
    }
    


    if (userGuess.match(/[a-z]/i)) {

        if (guessedLetters.indexOf(userGuess) === -1) {
            guessedLetters.push(userGuess);
            guessesRemaining--;
        }
        
        for (var i = 0; i < letters.length; i++) {
            if (userGuess.toLowerCase() === letters[i].toLowerCase()) {
                underscores[i] = letters[i];
            }
        }

        if (underscores.toString() === letters.toString()) {
            songImage = individualMainInfo.image;
            document.getElementById("imageHTML").setAttribute("src", songImage);

            songName = individualMainInfo.song;
            document.getElementById("songNameHTML").innerHTML = songName;

            singerName = individualMainInfo.singer;
            document.getElementById("singerHTML").innerHTML = singerName;

            connector = "by";
            document.getElementById("connectorHTML").innerHTML = connector;

            instruction = "Press Any Key to Continue";
            document.getElementById("instructionHTML").innerHTML = instruction;
           
            wins++;
            
            pauseWin = true;

            updateFields();
        } else if (guessesRemaining === 0) {
            losses++;
            reset();
        } else {
            updateFields()
        }
    } 
}

function updateFields() {
    document.getElementById("displayUnderscoresHTML").innerHTML = underscores.join("&nbsp;");
    document.getElementById("winsHTML").innerHTML = wins;
    document.getElementById("lossesHTML").innerHTML = losses;
    document.getElementById("guessesRemainingHTML").innerHTML = guessesRemaining;
    document.getElementById("guessedLettersHTML").innerHTML = guessedLetters;
    
}

function reset () {
    // Display underscores according to the randomly chosen word
    individualMainInfo = mainInfo[Math.floor(Math.random() * 12)];
    randomSong = individualMainInfo.song;
    
    letters = randomSong.split("");
    
    underscores = letters.slice();
    for (var i = 0; i < underscores.length; i++) {
        var character = underscores[i];
        if (character.match(/[a-z]/i)) {
            underscores[i] = "_";
        }
    }

    
    guessesRemaining = 15;
    guessedLetters = [];


    updateFields()
}