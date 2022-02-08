const prompt = require('prompt-sync')();

const word = prompt("Please input 1 or 2 colors for construction or deconstruction: ")

//red blue yellow
// purple orange green

    //color contruction code
if(word.includes("red") && (word.includes("blue"))){
    console.log("You just made Purple.");
} else if(word.includes("red") && (word.includes("yellow"))) {
    console.log("You just made Orange.")
} else if(word.includes("blue") && (word.includes("yellow"))) {
    console.log("You just made Green.")
} else if(word.includes("purple")) {
    console.log("Red and Blue are made to make Purple.")
} else if(word.includes("orange")) {
    console.log("Red and Yellow are used to make Orange")
} else if(word.includes("green")) {
    console.log("Blue and Yellow are made to make Green")
}