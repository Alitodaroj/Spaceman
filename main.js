/*----- constants -----*/
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

alphabet.forEach((letter, index) => {
    let letter1 = document.getElementById(`${letter}`);
    
    letter1.innerHTML = letter
    console.log(letter, index)
});
/*----- app's state (variables) -----*/
let guesses;

let win;


/*----- cached element references -----*/



/*----- event listeners -----*/
// function handleCellClick(event) {
//     let cell =event.target;
//     if 
// }


/*----- functions -----*/
init()