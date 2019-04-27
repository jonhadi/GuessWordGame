var library = [
    "King",
    "Overlord",
    "Emperor",
]  

function openCurtain() {
    document.getElementById("curtain").className = "open-curtain";
}

//event listener for pressing down buttons a-z is 65-90

document.addEventListener('keydown', function(event) {
    if(event.keyCode <= 90 && event.keyCode >= 65) {
        countRem();
        console.log();
    } else {
        alert("Wrong Input. Only letters are valid inputs");
    }
});

function gameRestart () {
    var libNum = (Math.floor(Math.random() * 10))%3;
    
    //Grabbing the word from library
    document.getElementById("theWord").innerHTML = library[libNum];

    //Giving guests remaining based off length of word 
    // if I have time i want to add also letter dupicity
    document.getElementById("gRem").innerHTML = library[libNum].length + 5;
}



function countRem() {
    guessRem --;
  }