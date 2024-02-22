import si from 'systeminformation'
import clear from 'clear'
import readline from 'readline'
import chalk from 'chalk'

/// NOTE TO SELF: FIGURE OUT IF YOU WANT TO IMPORT COMMANDS AND EXECUTE THEM HERE OR JUST EXECUTE THE INDIVIDUAL COMMANDS!!!!!!!!!!!!!!!!!!!!!



/// Hello Message
helloMessage()

/// Create redline interface.

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

/// Main Functions

function helloMessage() {
    console.log(chalk.blue.bold("Welcome to GSI! This is the welcome page!"));
    console.log(chalk.red("This project was made to improve my backend skills, in the commands folder is where all the active functions are."))
    console.log(chalk.green.bold("This file has basic things, input numbers 1,2 or 3 to find out what hidden features there are."))
}

function keepGoing () {
    setInterval(() => {
    }, 1000)
}

function ping () {
    si.inetLatency('1.1.1.1')
    .then (data => console.log (data));
}

function pingMessage () {
    console.log (chalk.yellow("Getting your latency to 1.1.1.1..."))
}

/// Getting User Input


function getUserInput() {
    rl.question("", (userInput) => {
        clear()
        switch (userInput.trim()) {
            case '1':
                pingMessage()
                ping()
                keepGoing()
                break
            default:
                console.log("Invalid input. Please press 1 or 2.");
        }
        rl.close();
    });
}

getUserInput();