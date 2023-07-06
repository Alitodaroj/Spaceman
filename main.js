/*----- constants -----*/
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const resetGameButton = document.getElementById("reset");

alphabet.forEach((letter, index) => {
    let letter1 = document.getElementById(`${letter}`);
    
    letter1.innerHTML = letter;
    console.log(letter, index);
})
const guess = document.querySelectorAll(".alphabet div");
guess.forEach((letter) => {
    letter.addEventListener("click", evt => {
        letter.innerHTML = " ";
        console.log(letter)
    })
})


/*----- app's state (variables) -----*/
let guesses;

let win;



/*----- cached element references -----*/
const words = ["elephant","conditional", "helicopter", "octupus"]


/*----- event listeners -----*/
// function handleCellClick(event) {
//     let cell =event.target;
//     if 
// }


/*----- functions -----*/
// init()
function getRandomItem(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const item = words[randomIndex];
    return item;
}

const result = getRandomItem(words);


console.log(result)

document.getElementById("reset").addEventListener("click", handleResetButton);

function handleResetButton(event) {
    const reset = document.querySelectorAll(".alphabet div");
    reset.forEach((letter, index) => {
        letter.innerHTML = alphabet[index]
        console.log(letter)
    })
}



// function render() {

// }