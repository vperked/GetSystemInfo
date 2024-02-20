const si = require('systeminformation')
const readline = require ('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Welcome to the CPU section of GSI!")



/// Main Functions!

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


function getUserInput() {
    rl.question("Press 1 to display CPU current speed, Press 2 to display CPU information: ", (userInput) => {
        switch (userInput.trim()) {
            case '1':
                displayCPUSpeed();
                break;
            case '2':
                displayCPUinfo();
                break;
            default:
                console.log("Invalid input. Please press 1 or 2.");
        }

        rl.close();
    });
}

getUserInput();