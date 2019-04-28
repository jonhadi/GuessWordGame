var library = [
    'KING',
    'OVERLORD',
    'HAPPY',
    'FIANCE',
    'EMPEROR',
    'SWAGGING',
    'LIZARD',
    'DRAGON',
    'NIGHT',
    'MOON',
    'NATURE',
    'CANOE'
]  

var libIndex
var gameState = false

function guessGame(event) {
    // game cover
    document.getElementById("curtain").className = "open-curtain";
    //game start
    if (!gameState) {
        libIndex = gameRestart();
    }
    //checks valid input and appends to letters guessed so player can keep track of what letters they used and doesn't allow for duplicates
    validInput(event);
    //check if you win or lose
    checkwinlose();
}

function validInput(input) {
    // Captures the key press, converts it to uppercase, and saves it to a variable.
    var letter = input.key.toUpperCase();
    //captures key code to check for correct input
    var letNum = input.keyCode;
    //checks if it is the right key pressed on keyboard
    if (65 <= letNum && letNum <= 90) {
        var find;
        //loops for amount of guessed letters
        for (var i = 0; i < document.getElementById('guessed').innerHTML.length; i++) {
            //loops through guessed letters checking for duplicates
            if (letter == document.getElementById('guessed').innerHTML.charAt(i)) {
                find = true;
                break;
            }
        }
        if (!find) {
            //appends to guessed
            document.getElementById("guessed").append(letter);
            //lower count
            countRem();
            //refresh current game
            refreshWord();
        }
    }
}

function checkwinlose() {
    //win state
    if (document.getElementById("guess-word").innerHTML == library[libIndex]) {
        document.getElementById("wins").innerHTML++;
        setTimeout(function(){ alert("YOU WIN!"); }, 500); //set timer so it would wait
        setTimeout(function(){ if (confirm('Do you want to play again?')) {
            libIndex = gameRestart();
            refreshWord();
        } else {
            alert('Thanks for playing!');
            gameState = false;
        }
        }, 500);
    }
    //lose state
    else if (document.getElementById("guess-rem").innerHTML == 0) {
        document.getElementById("losses").innerHTML++;
        setTimeout(function(){ alert("You are a LOSER!"); }, 500);
        setTimeout(function(){ if (confirm('Do you want to play again?')) {
            libIndex = gameRestart();
            refreshWord();
        } else {
            alert('Thanks for playing!');
            gameState = false;
        }
        }, 500);   
    }
}

//prints current game
function refreshWord() {
    document.getElementById("guess-word").innerHTML = "";
    //looping for length of word
    for (var i = 0; i < library[libIndex].length; i++) {
        var find;
        //looping for amount of guesses
        for (var j = 0; j < document.getElementById("guessed").innerHTML.length; j++) {
            //if at position i of word is the j guessed set find to true and break out of loop
            if (library[libIndex].charAt(i) == document.getElementById("guessed").innerHTML.charAt(j)) {
                find = true;
                break;
            } else { // didnt find
                find = false;
            }
        }
        if (find) { //append letter at the i
            document.getElementById("guess-word").append(library[libIndex].charAt(i));
        } else { //else print underscore
            document.getElementById("guess-word").append("_ ");
        }
    }
}

//function for restarting game state
function gameRestart() {
    //number generator for length of library
    var libNum = (Math.floor(Math.random() * 10))%library.length;

    //Giving guests remaining based off length of word 
    //if I have time i want to add also letter dupicity changing
    document.getElementById("guess-rem").innerHTML = 10;
    //library[libNum].length + 5;

    //resets letters guess for each game
    document.getElementById("guessed").innerHTML = "";

    //turns on game state
    gameState = true;

    //sends back the library index of chosen word
    return libNum;
}

//function to lower remaining count to end game
function countRem() {
    //put current value in holder variable to lower by 1 then put back in html
    var guessRem = document.getElementById("guess-rem").innerHTML;
    guessRem--;
    document.getElementById("guess-rem").innerHTML = guessRem;
  }
