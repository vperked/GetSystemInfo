import si from 'systeminformation'
import clear from 'clear'
import readline from 'readline'
import chalk from 'chalk'
import { get } from 'http'

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
        ping();
    }, 1000)
}

function ping () {
    si.inetLatency(`${ip}`)
    .then (data => {
        if (data === null) {
            console.log(error("IP is invalid or null."))
        } else {
            console.log(data);
        }
    })
    .catch (error => {
        console.log(error("Error!"))
    })
}

function pingMessage () {
    console.log (chalk.yellow( `Awaiting response from ${ip}`))
    console.log (error())
}

function diskLayout () {
    si.diskLayout()
    .then (data => console.log(data)) 
}

function diskMessage() {
    console.log(chalk.green("Getting Drive Info..."))
}

/// END

/// Storage
let ip = "1.1.1.1"
const error = chalk.red

/// Getting User Input


function getUserInput() {
    rl.question("", (userInput) => {
        clear()
        switch (userInput.trim()) {
            case '1':
                pingMessage()
                ping()
                keepGoing()
                clear
                break
            case '2':
                diskMessage()
                diskLayout()
                clear
                break
            default:
                console.log(error("Invalid input. Please press 1 or 2."));
                console.log(chalk.blue("Or input exit to exit."))
        }
     if (userInput.trim().toLowerCase() !== 'exit') {
            getUserInput();
     } else {
        rl.close();
    }
    });
}

getUserInput()