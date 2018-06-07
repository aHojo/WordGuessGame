const letterButtons = document.getElementById('letter-buttons');
//guesses to start with
//variable to store clicked letter
var clickedItem
var guessesLeft;
var wins = 0;
var losses = 0;
var choice;
//List of games to be used in hangman game. 
const gameList = ["WARCRAFT", "FALLOUT", "PERSONA", "STARCRAFT"];
var underscores = [];
var lettersGuessed = [];
var blanks;
//Store the game that was chosen
var gameChosen;
var gameLetters;
//Letters to be used for buttons. 
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var hasLetterButtons = false;

//Actions to start the game
function gameStart(){
    
    if(!hasLetterButtons){
        gameChosen = gameList[Math.floor(Math.random() * gameList.length)];
        gameLetters = gameChosen.split('');
        guessesLeft = gameChosen.length;
        blanks = gameChosen.length;
        underscores = [];
        

        for(let i = 0; i < blanks; i ++){
            underscores.push("_");
        }

        document.getElementById('guess-area').innerHTML = underscores.join(' ');
        document.getElementById('guess-count').textContent = `Guesses Left: ${guessesLeft}`;
        document.getElementById('letter-picked').textContent = ` `;
        document.getElementById('wins').textContent = `Wins: ${wins}`;
        document.getElementById('lose').textContent = `Losses: ${losses}`;

        // console.log(document.getElementById('letter-button').dataset.letter);
        console.log(gameLetters);
        console.log(underscores);
        hasLetterButtons = true;
    }
}

//function to display all of the letters
function printButtons() {
    
        for(let i = 0; i < letters.length; i++){
            var button = document.createElement('button');
            button.setAttribute('data-letter', letters[i]);
            button.setAttribute('id', "letter-button");
            button.classList.add('btn', 'btn-danger', 'bttn-margin');
            button.textContent = letters[i];
            letterButtons.appendChild(button);
            
        }
    
        //test
        //console.log(letters[i]);
        console.log(button);
        
    
}

function clickLetterButton(e) {
    clickedItem = e.target;
    choice = clickedItem.dataset.letter;
    choiceCheck(choice)
    console.log(clickedItem);
    console.log(choice);
}

function choiceCheck(letter) {
    for(let i = 0; i < blanks; i ++) {
        if(gameLetters[i] === letter){
            underscores[i] = letter;
            document.getElementById('guess-area').innerHTML = underscores.join(' ');
            console.log(clickedItem);
            clickedItem.style.visibility = "hidden";
            console.log(underscores); 
        }
        else {
            guessesLeft--;
        }
    }
}

document.querySelector(".start-game").addEventListener("click", function() {
    gameStart();
    printButtons();
    
    document.querySelector("#letter-buttons").addEventListener("click", clickLetterButton);
});
