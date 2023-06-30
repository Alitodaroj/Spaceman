// const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

// function alphabet = 

// console.log("alphabet")


// let letter2 = document.getElementById("char2");

// letter2.innerHTML = "B"

// let letter3 = document.getElementById("char3");

// letter3.innerHTML = "C"

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

alphabet.forEach((letter, index) => {
    let letter1 = document.getElementById(`${letter}`);
    
    letter1.innerHTML = letter
    console.log(letter, index)
});
