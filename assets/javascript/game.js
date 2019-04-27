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

function guessGame() {
    // game cover
    console.log(libIndex);
    document.getElementById("curtain").className = "open-curtain";
    //game start
    if (!gameState) {
        libIndex = gameRestart();
    }
    //lose state
    if (document.getElementById("gRem").innerHTML == 0) {
        alert("YOU are a LOSER!")
        if (confirm('Do you want to play again?')) {
            libIndex = gameRestart();
        } else {
            alert('Thanks for playing!')
        }
    }
    //win state
    if (document.getElementById("guess-word").innerHTML == library[libIndex]) {
        alert("YOU WIN!");
        if (confirm('Do you want to play again?')) {
            libIndex = gameRestart();
        } else {
            alert('Thanks for playing!')
        }
    }
    //key pressed start here 
    document.onkeyup = function(event) {
        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = event.key.toUpperCase();
        //appends to letters guessed so player can keep track
        document.getElementById("guessed").append(letter);
    }
    //reset guessed word each time
    document.getElementById("guess-word").innerHTML = "";
    //looping for length of word
    for (var i = 0; i < library[libIndex].length; i++) {
        //looping for amount of guesses
        var find;
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
    countRem();
}

//function for restarting game state
function gameRestart() {
    //number generator for length of library
    var libNum = (Math.floor(Math.random() * 10))%library.length;
    
    //Grabbing the word from library just for checking
    //document.getElementById("the-word").innerHTML = library[libNum];

    //Giving guests remaining based off length of word 
    //if I have time i want to add also letter dupicity changing
    document.getElementById("gRem").innerHTML = library[libNum].length + 5;

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
    var guessRem = document.getElementById("gRem").innerHTML;
    guessRem--;
    document.getElementById("gRem").innerHTML = guessRem;
  }
