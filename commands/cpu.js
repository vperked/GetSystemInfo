import si from 'systeminformation'
import readline from 'readline'
import clear from 'clear'
import chalk from 'chalk'

/// Welcome Message!
helloMessage()

/// Create Readline Interface

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/// Main Functions!

function displayCPUCache () {
    si.cpuCache()
    .then (data => console.log(data))
    .catch (error => console.error(error));
}

    function displayCPUSpeed() {
    si.cpuCurrentSpeed()
    .then (data => console.log(data))
    .catch (error => console.error(error))
}

function displayCPUinfo() {
    si.cpu()
    .then (data => console.log(data))
    .catch (error => console.error(error));
}

function CPUspeedMessage () {
    console.log (chalk.green("Getting your CPU Speed..."));
}

function CPUInfoMessage () {
    console.log (chalk.green("Getting your CPU Info..."));
}

function CPUCacheInfoMessage () {
    console.log (chalk.green("Getting your CPU Cache..."));
} 

function helloMessage () {
    console.log (chalk.greenBright("Hello! Welcome to the CPU Section of GSI."))
}

/// Getting your input.

function getUserInput() {
    rl.question("Press 1 to bring up your CPU Speed, Press 2 to bring up info about your CPU, Press 3 to bring up your current CPU cache. ", (userInput) => {
        clear() 
        switch (userInput.trim()) {
            case '1':
                CPUspeedMessage()
                displayCPUSpeed()
                break;
            case '2':
                CPUInfoMessage()
                displayCPUinfo();
                break;
                case '3':
                CPUCacheInfoMessage() 
                displayCPUCache();
                break;
            default:
                console.log("Invalid input. Please press 1,2 or 3.");
            }
            if (userInput.trim().toLowerCase() !== 'exit') {
                   getUserInput();
            } else {
               rl.close();
           }
           });
        }

getUserInput();

/// End