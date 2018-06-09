const letterButtons = document.getElementById('letter-buttons');
var hints = [{
                pic: 'assets/images/futaba.png',
                hint: 'Change people\'s hearts!'
            }, 
            {
                pic:"assets/images/wowchar.png",
                hint:'LEEROYYYY JENKINSSSSSS'
            },
            {
                pic:"assets/images/novayis.png",
                hint:'Two aliens races and the humans try to conquer each other.'
            },
            {
                pic:"assets/images/cloudguy.png",
                hint:'Man runs around eating mushrooms, and jumping on people\'s heads.'
            },
            {
                pic:"assets/images/tinytina.png",
                hint:'Tiny Tina'
            },
            {
                pic:"assets/images/skyrtroll.png",
                hint:'Game where you mod, admire, then don\'t even start, or get an arrow to the knee.'
            },
            {
                pic:"assets/images/doom.png",
                hint:'BLOW THINGS UP!'
            },
            {
                pic:"assets/images/witcher.png",
                hint:'Ballet with a sword.'
            },
            {
                pic:"assets/images/farcry.jpg",
                hint:'Rhinos will end you.'
            },
            {
                pic:"assets/images/bioshock.jpg",
                hint:'Friendly little girls with a needle.'
            }];
var randomNum;
var winCondCheck;
//guesses to start with
//variable to store clicked letter
var clickedItem
var guessesLeft;
var allowedGuesses;
var wins = 0;
var losses = 0;
var choice;
//List of games to be used in hangman game. 
const gameList = ["PERSONA", "WORLD OF WARCRAFT", "STARCRAFT", "SUPER MARIO", "BORDERLANDS", "THE ELDER SCROLLS", "DOOM", "WITCHER", "FARCRY", "BIOSHOCK"];
var underscores = [];
var lettersGuessed = [];
var blanks;
//Store the game that was chosen
var gameChosen;
var gameLetters;
//Letters to be used for buttons. 
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var hasLetterButtons = false;
var wonGame = true;

//Actions to start the game
function gameStart(){
    
    if(!hasLetterButtons){
       wonGame = false;
        printButtons();
        randNum = Math.floor(Math.random() * gameList.length);
        gameChosen = gameList[randNum];
        gameLetters = gameChosen.split('');
        guessesLeft = gameChosen.length;
        blanks = gameChosen.length;
        underscores = [];
        

        for(let i = 0; i < blanks; i ++){
            if(gameLetters[i] === " "){
                underscores.push('&nbsp;');
            }else{
                underscores.push("_");
            }
            
        }

        document.getElementById('guess-area').innerHTML = underscores.join(' ');
        document.getElementById('guess-count').textContent = `Guesses Left: ${guessesLeft}`;
        document.getElementById('letter-picked').textContent = ` `;
        document.getElementById('wins').textContent = `Wins: ${wins}`;
        document.getElementById('lose').textContent = `Losses: ${losses}`;
        document.getElementById('game-image').src = hints[randNum].pic;
        document.getElementById('hint').innerHTML = `Hint: ${hints[randNum].hint}`;

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
            button.classList.add('btn', 'button-css', 'bttn-margin');
            button.textContent = letters[i];
            letterButtons.appendChild(button);
            
        }
    
        //test
        //console.log(letters[i]);
        // console.log(button);
        
    
}

function clickLetterButton(e) {
    if(!wonGame){
        clickedItem = e.target;
        
        choice = clickedItem.dataset.letter;
        if(clickedItem.nodeName !== 'DIV'){
            choiceCheck(choice);
            document.getElementById("wrong-buttons").appendChild(clickedItem);
        }
    }
}

function choiceCheck(letter) {
    var letterFound=false;

    for(let i = 0; i < blanks; i++){
        if(gameLetters[i] === letter){
            letterFound = true;
        }
    }
    if(letterFound){

        for (let i = 0; i < blanks; i++){
            if (underscores[i] === " "){
                underscores[i] = "&nbsp;";
            } else {
                underscores[i] = underscores[i];
            }
        }

        for(let i = 0; i < blanks; i ++) {
            if(gameLetters[i] === letter){
                underscores[i] = letter;
                document.getElementById('guess-area').innerHTML = underscores.join(' ');
                clickedItem.style.visibility = "hidden";
            }
        }
    }
        else {
            guessesLeft--;
            document.getElementById('guess-count').textContent = `Guesses Left: ${guessesLeft}`;
        }
        winCheck();
    
}

function winCheck(){

    winCondCheck = underscores;
    for (let i = 0; i < blanks; i++){
        if (underscores[i] === "&nbsp;"){
            winCondCheck[i] = " ";
        } else {
            winCondCheck[i] = underscores[i];
        }
    }
   
    if(winCondCheck.toString() === gameLetters.toString()){
        alert('You Win!')
        wins++;
        document.getElementById('wins').textContent = `Wins: ${wins}`;
    } else if (guessesLeft === 0){
        losses++;
        document.getElementById('lose').textContent = `Losses: ${losses}`;
        wonGame = true;
    }
}



document.querySelector(".start-game").addEventListener("click", function() {
    gameStart();
    
    
    document.querySelector("#letter-buttons").addEventListener("click", clickLetterButton);
    
    
});

document.querySelector(".reset-game").addEventListener("click", function() {
    guessesLeft = 0;
    wins = 0;
    losses = 0;
    wonGame = false;
    hasLetterButtons = false;
    document.querySelector("#letter-buttons").innerHTML = "";
    document.querySelector("#wrong-buttons").innerHTML = "";
    document.getElementById('guess-area').textContent = '_ _ _ _ _ _'; 
    document.getElementById('guess-count').textContent = `Guesses Left: ${guessesLeft}`;
    document.getElementById('letter-picked').textContent = ` `;
    document.getElementById('wins').textContent = `Wins: ${wins}`;
    document.getElementById('lose').textContent = `Losses: ${losses}`;
    document.getElementById('game-image').src = "";
    document.getElementById('hint').innerHTML = "";
    
    
});

