/*----- constants -----*/
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

alphabet.forEach((letter, index) => {
    let letter1 = document.getElementById(`${letter}`);
    
    letter1.innerHTML = letter;
})

const guess = document.querySelectorAll(".alphabet div");
guess.forEach((letter) => {
    letter.addEventListener("click", evt => {
        checkLetter(letter) 
        console.log(letter)
    })
})


/*----- app's state (variables) -----*/
let guesses = [];
let win;
let lives = 6;




/*----- cached element references -----*/
const words = ["elephant","conditional", "helicopter", "octupus"]
const showLives = document.getElementById("mylives");

/*----- event listeners -----*/



/*----- functions -----*/
// init()
let solving = function(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const item = words[randomIndex];
    return item;
}
let wordToGuess;

let reset1 = function() {
    wordToGuess = solving(words);
    console.log(wordToGuess)
    const wordArray = wordToGuess.split("");
    const blankWordArray = wordArray.map(() => "_");
    let selectedGuess = document.querySelector("#guesses");
    selectedGuess.innerHTML = "";

    blankWordArray.forEach(dash => {
        let selectedWord = document.createElement("div");
        selectedWord.innerHTML = dash;
        selectedWord.classList.add("dash");
        selectedGuess.appendChild(selectedWord);
        })
}

reset1()

let hiddenWord = document.querySelectorAll(".dash");

document.getElementById("reset").addEventListener("click", handleResetButton);

function handleResetButton(event) {
    let guessEl = document.querySelector("#guesses")
    while (guessEl.firstChild) {
        guessEl.removeChild(guessEl.firstChild);
        }
        lives = 6;
        let myLives = document.querySelector("#mylives");
        myLives.innerHTML = "You have " + lives + " lives"; 
    guesses = [];
        reset1();
    };



function displayWord() {
    console.log(blankWordArray.join(""));
}

function checkLetter(selectedGuess) {
    if (guesses.includes(selectedGuess.innerHTML)) {
        console.log("this letter has been guessed");
    } else {
        guesses.push(selectedGuess.innerHTML);
        console.log(guesses);
        console.log(wordToGuess);
            if (wordToGuess.includes(selectedGuess.innerHTML.toLowerCase())) {
                for(let i = 0; i < wordToGuess.length; i++) {
                    if (wordToGuess.charAt(i) === selectedGuess.innerHTML.toLowerCase()) {
                        let hiddenWord = document.querySelectorAll(".dash");
                        hiddenWord[i].innerHTML = wordToGuess.charAt(i);
                        console.log("correct");
                        console.log(hiddenWord);
                    }  else {
                        
                    }
                }
            } else {
                console.log("this letter is not part of the word")
                lives--;
                
            }
        comments();
    }
}

function comments () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    else if (hiddenWord.length === wordToGuess.length) {
        let hiddenWordString = Array.from(hiddenWord).map(blankLine => blankLine.innerHTML).join("");
        if (hiddenWordString === wordToGuess) {
            showLives.innerHTML = "You Win!";
        }
    }
};
  