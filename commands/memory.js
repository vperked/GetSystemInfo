const si = require('systeminformation')
const readline = require ('readline');
const { clear } = require('console');

/// Hello Message
helloMessage()


/// Create Readline Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/// Main Functions

function displayTotalMem () {
    si.mem()
    .then (data => console.log(data))
    .catch (error => console.error(error));
}


function memInfo () {
    si.memLayout()
    .then (data => console.log(data)) 
    .catch (error => console.error(error));
}


function totalMemInfo () {
    console.log ("Getting your Memory Info...")
}

function helloMessage () {
    console.log ("Welcome to the memory section!")
}

/// Getting your input.

function getUserInput() {
    rl.question("Press 1 to Display your Total Memory or Press 2 to display Info about your Memory:", (userInput) => {
        clear()
        switch (userInput.trim()) {
            case '1':
                totalMemInfo()
                displayTotalMem();
                break
            case '2':
            memInfo();
            break
            default:
                console.log("Invalid input. Please press 1 or 2.");
            }
            if (userInput.trim().toLowerCase() !== 'exit') {
                   getUserInput();
            } else {
               rl.close();
           }
           });
        }
getUserInput();