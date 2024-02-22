import si from 'systeminformation'
import chalk from 'chalk'
import clear from 'clear'
import readline from 'readline'
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
    console.log (chalk.yellow("Displaying Total Memory..."))
}

function helloMessage () {
    console.log (chalk.blue("Welcome to the Memory section!"))
}

function meminfoMessage() {
    console.log (chalk.yellow("Getting Memory Info..."))
}
/// Storage

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
            meminfoMessage();
            memInfo();
            break
            default:
                console.log(chalk.red("Invalid input,closing. please input 1 or 2 next time!"));
            }
            rl.close();
        });
    }
getUserInput();