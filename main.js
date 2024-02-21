const si = require ('systeminformation')
const readline = require ('readline');
const { clear } = require('console');

/// Hello Message
helloMessage()

/// Create redline interface.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})




/// Main Functions

function helloMessage() {
    console.log("Welcome to GSI! This is the welcome page!")
}

/// Getting User Input


function getUserInput() {
    rl.question("", (userInput) => {
        clear()
        switch (userInput.trim()) {
            case '1':
                totalMemInfo()
                displayTotalMem();
                break
            default:
                console.log("Invalid input. Please press 1 or 2.");
        }
        rl.close();
    });
}

getUserInput();