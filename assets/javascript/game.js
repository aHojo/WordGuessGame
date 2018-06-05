const letterButtons = document.getElementById('letter-buttons');
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var hasLetterButtons = false;
//function to display all of the letters
function printButtons() {
    if(!hasLetterButtons){
        for(let i = 0; i < letters.length; i++){
            var button = document.createElement('button');
            button.setAttribute('data-letter', letters[i]);
            button.classList.add('btn', 'btn-danger', 'bttn-margin');
            button.textContent = letters[i];
            letterButtons.appendChild(button);
        }
    hasLetterButtons = true;
        //test
        //console.log(letters[i]);
        console.log(button);
    }
}

document.querySelector(".start-game").addEventListener("click", function() {
    printButtons();
});
    