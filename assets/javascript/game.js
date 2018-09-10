// Create a library of singers' names, songnames, and images of singers
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
// create a variable to pause the screen after winning and wait for user to click for the next game
var pauseWinLoss;



// By default, it is fired when the entire page loads, including its content (images, css, scripts, etc.)
window.onload = function () {
    // Wins and Losses start at 0
    wins = 0;
    losses = 0;
    // When the page is load, the screen doesn't need to pause at winning
    pauseWinLoss = false;
    
    reset();

}

// Event listeners: when user clicks anywhere on the page, functions below executes
document.onkeyup = function (event) {
    // userGuess stores the key that is being clicked.
    var userGuess = event.key;

    directionsText = document.getElementById("directions-text");
    directionsText.textContent = "";

    // pauseWinLoss is true when the screen pauses to wait for user's input (click) for the next game
    // .onkeyup triggers pauseWinLoss
    if(pauseWinLoss){
        // check if pauseWinLoss is true
        // if true, start a new game 
        reset();

        // set pauseWinLoss to false so that user can continue playing game
        // if pauseWinLoss is true, user will start a new game for every key pressed.
        pauseWinLoss = false;

        // to hide the instruction after the game starts
        instruction = "";
        document.getElementById("instructionHTML").innerHTML = instruction;

        // exit out of the function
        // or else without 'return', it will continue with the code below
        // which means if the user click any key it will register to the next game
        return;
    }
    

    // check if userGuess is an alphabet
    // /i means case insensitive
    if (userGuess.match(/[a-z]/i)) {
        // guessedLetters is an array containing strings
        // index of -1 means that if userGuess does not match any letter in guessedLetter
        if (guessedLetters.indexOf(userGuess) === -1) {
            // if the letter is not already there in guessedLetter, add userGuess's letter into the array 
            // this is also to prevent the same letter being recorded twice 
            guessedLetters.push(userGuess);
            // guessRemaining reduces by one
            guessesRemaining--;
        }
        
        // if 'userGuess' equals to 'letters' at index i, assign 'letters' at index i to 'underscore' at the same location
        // to replace 'underscore' at index i with the correct character
        for (var i = 0; i < letters.length; i++) {
            if (userGuess.toLowerCase() === letters[i].toLowerCase()) {
                underscores[i] = letters[i];
            }
        }

        // if user guesses the song correctly
        if (underscores.toString() === letters.toString()) {
            // display song image
            songImage = individualMainInfo.image;
            document.getElementById("imageHTML").setAttribute("src", songImage);

            // display song's name
            songName = individualMainInfo.song;
            document.getElementById("songNameHTML").innerHTML = songName;
            
            // display singer's name
            singerName = individualMainInfo.singer;
            document.getElementById("singerHTML").innerHTML = singerName;

            // display the word 'by'
            connector = "by";
            document.getElementById("connectorHTML").innerHTML = connector;

            // display the instruction below
            instruction = "Press Any Key to Continue";
            document.getElementById("instructionHTML").innerHTML = instruction;
            
            // increment win by 1
            wins++;
            
            // pause the screen
            // wait for user's input to trigger reset
            pauseWinLoss = true;

            // update HTML elements for the user to see
            updateFields();
        
            // if guessesRemaining  === 0 before the word is correctly guessed
        } else if (guessesRemaining === 0) {
            // the following display commands/code is to show the answer to the user when lost
            // display song image
            songImage = individualMainInfo.image;
            document.getElementById("imageHTML").setAttribute("src", songImage);

            // display song's name
            songName = individualMainInfo.song;
            document.getElementById("songNameHTML").innerHTML = songName;
            
            // display singer's name
            singerName = individualMainInfo.singer;
            document.getElementById("singerHTML").innerHTML = singerName;

            // display the word 'by'
            connector = "by";
            document.getElementById("connectorHTML").innerHTML = connector;

            // display the instruction below
            instruction = "Press Any Key to Continue";
            document.getElementById("instructionHTML").innerHTML = instruction;

            // increment losses by 1
            losses++;

            // pause the screen
            // wait for user's input to trigger reset
            pauseWinLoss = true;

            // update HTML elements for the user to see
            updateFields();

            // if start a new game
            //reset();

            // have not won or lost 
            // update fields so that the user can see
            // e.g. the Letter Already Guessed
        } else {
            updateFields()
        }
    } 
}

// to update HTML elements on the screen so that the user can see them
// for example:  if the user wins, wins will increase by 1, and this function updates the field on the HTML for the user to see. 
function updateFields() {
    // "&nbsp;" is a space 
    // .join: character in underscore array seperated a by space
    document.getElementById("displayUnderscoresHTML").innerHTML = underscores.join("&nbsp;");
    document.getElementById("winsHTML").innerHTML = wins;
    document.getElementById("lossesHTML").innerHTML = losses;
    document.getElementById("guessesRemainingHTML").innerHTML = guessesRemaining;
    document.getElementById("guessedLettersHTML").innerHTML = guessedLetters;
    
}


// to start a new game
function reset () {
    // mainInfo.length = the number of songs in the library
    // Math.floor * mainInfo.length: song index from 0 to (main.Info.length - 1)
    individualMainInfo = mainInfo[Math.floor(Math.random() * mainInfo.length)];

    // song's name for the random song
    randomSong = individualMainInfo.song;
    
    // split the song name into letter
    letters = randomSong.split(""); // empty string ""
    
    // .slice creates a copy of var letters under var underscores at different location in memory aka two separate locations for two var's. 
    //The original array (var letters) will not be modified when var underscores is modified. 
    underscores = letters.slice();

    // Change the character in underscores array into underscore "_"
    for (var i = 0; i < underscores.length; i++) {
        var character = underscores[i];

        // Check if the character is an alphabet 
        // if true, replace character at index i with underscore "_"
        if (character.match(/[a-z]/i)) {
            underscores[i] = "_";
        }
    }


    guessesRemaining = 15;

    // start with empty array
    guessedLetters = [];

    updateFields();

    // reset song image
    songImage = individualMainInfo.image;
    document.getElementById("imageHTML").setAttribute("src", "assets/images/question.gif");

    // erase song's name
    songName = "";
    document.getElementById("songNameHTML").innerHTML = songName;
    
    // erase singer's name
    singerName = "";
    document.getElementById("singerHTML").innerHTML = singerName;

    // erase the word 'by'
    connector = "";
    document.getElementById("connectorHTML").innerHTML = connector;
}