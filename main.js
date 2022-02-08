const prompt = require('prompt-sync')();

let option = Number(prompt("Enter [1] for color construction or [2] for color deconstruction: "));

//red blue yellow
// purple orange green

if(option === 1) {
    //color contruction code
    let color1 = prompt("To construct, please input first color: ");
    let color2 = prompt("To construct, please input second color: ");
    
    if((color1 === "red") && (color2 === "blue")){
        console.log("You just made Purple.");
    } else if((color1 === "red") && (color2 === "yellow")) {
        console.log("You just made Orange.")
    }  else if((color1 === "blue") && (color2 === "yellow")) {
        console.log("You have made Green.")
    } else {
        console.log("ERROR")
    }
} else if(option === 2) {
    //color deconstruction code
    let color3 = prompt("What color would you like to deconstruct? (purple, orange, green) ")
    if(color3 === "purple") {
        console.log("Red and Blue were used to make Purple.");
    } else if(color3 === "orange") {
        console.log("Red and Yellow were used to make Orange.")
    } else if(color3 === "green") {
        console.log("Blue and Yellow were used to make Green.")
    }
}