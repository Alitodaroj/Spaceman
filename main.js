/*----- constants -----*/
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const resetGameButton = document.getElementById("reset");

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
let maxAttempts = 6;



/*----- cached element references -----*/
const words = ["elephant","conditional", "helicopter", "octupus"]


/*----- event listeners -----*/



/*----- functions -----*/
// init()
let solving = function(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const item = words[randomIndex];
    return item;
}

const wordToGuess = solving(words);
console.log(wordToGuess)


const wordArray = wordToGuess.split("");
const blankWordArray = wordArray.map(() => "_");
console.log(blankWordArray);
let guessEl = document.querySelector("#guesses")
blankWordArray.forEach(dash => {
    let selectedWord = document.createElement("div");
    selectedWord.innerHTML = dash;
    selectedWord.classList.add("dash");
    guessEl.appendChild(selectedWord);
})

let hiddenWord = document.querySelectorAll(".dash");

document.getElementById("reset").addEventListener("click", handleResetButton);

function handleResetButton(event) {
    const reset = document.querySelectorAll(".alphabet div");
    reset.forEach((letter, index) => {
        letter.innerHTML = alphabet[index]
        console.log(letter)
    })
}

function displayWord() {
    console.log(blankWordArray.join(""));
}

function checkLetter(guessEl) {
    if (guesses.includes(guessEl.innerHTML)) {
        console.log("this letter has been guessed")
    } else {
        guesses.push(guessEl.innerHTML);
            if (wordToGuess.includes(guessEl.innerHTML.toLowerCase())) {
                for(let i = 0; i < wordToGuess.length; i++) {
                    if (wordToGuess.charAt(i) === guessEl.innerHTML.toLowerCase()) {
                        hiddenWord[i].innerText = wordToGuess.charAt(i);
                    }  else {

                    }
                }
            } else {
                console.log("this letter is not part of the word")
            }
    }
}

guesses.push(guessEl);

// function render() {

// }