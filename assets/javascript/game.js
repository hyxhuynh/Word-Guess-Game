
var mainInfo = [
    {
        singer: "Mariah Carey",
        song: "Vision of Love",
        image: "../images/Mariah Carey",
    },
    {
        singer: "U2 ",
        song: "One",
        image: "../images/U2",
    },
    {
        singer: "Backstreet Boys",
        song: "I Want It That Way",
        image: "../images/Backstreet Boys",
    },
    {
        singer: "Whitney Houston",
        song: "I Will Always Love You",
        image: "../images/Whitney Houston",
    },
    {
        singer: "Madonna",
        song: "Vogue",
        image: "../images/Madonna",
    },
    {
        singer: "Britney Spears",
        song: "Baby One More Time",
        image: "../images/Britney Spears",
    },
    {
        singer: "TLC",
        song: "Waterfalls",
        image: "../images/TLC",
    },
    {
        singer: "R.E.M.",
        song: "Losing My Religion",
        image: "../images/REM",
    },
    {
        singer: "Destiny's Child",
        song: "Say My Name",
        image: "../images/Destiny's Child",
    },
    {
        singer: "Celine Dion",
        song: "My Heart Will Go On",
        image: "../images/Celine Dion",
    },
    {
        singer: "Natalie Imbruglia",
        song: "Torn",
        image: "../images/Natalie Imbruglia",
    },
    {
        singer: "Spice Girls",
        song: "Wannabe",
        image: "../images/Spice Girls",
    }
   
]

//Variables
var letters;
var guessesRemaining;
var wins;
var losses;
var underscores;
var guessedLetters;

//Events
window.onload = function () {
    
    wins = 0;
    losses = 0;

    reset();

}

document.onkeyup = function (event) {
    var userGuess = event.key;
    
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
            wins++;
            reset();
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
    var randomSong = mainInfo[Math.floor(Math.random() * 12)].song;
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