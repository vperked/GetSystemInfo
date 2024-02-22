import si from 'systeminformation'
import readline from 'readline'
import clear from 'clear'
import chalk from 'chalk'


/// Storing Stuff...
const error = chalk.bold.red
const Message = chalk.green

/// Hello Message
helloMessage()

/// Create Readline Interface

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


/// Main Functions

function machineConnections () {
    si.networkConnections()
    .then (data => console.log(data))
    .catch (error => console.error(error))
}



function allUsers () {
    si.users()
    .then (data => console.log(data))
    .catch (error => console.error(error))
}


function currentLoad(interval) {
setInterval(function() {
    si.currentLoad(). then (data => {
        console.log(data);
    });
}, interval);
}

function currentLoadMessage () {
    console.log(Message("Getting your current load..."));
}

function consMessage () {
    console.log(Message("Getting Connections & Users..."))
}

function helloMessage(){
    console.log(Message("Welcome to the Network Commands Section!"));
}

function networkStatsMessage () {
    console.log(Message("Getting your network stats..."))
}
 
function networkStats(interval) {
    setInterval(function() {
        si.networkStats().then (data => {
            console.log(data);
        });
    }, interval);
}

 
/// Getting your input

function getUserInput() {
    rl.question("Press 1 to bring up your Machines current Load, Press 2 to get current machine connections & Active users, Press 3 to get your network stats: ", (userInput) => {
        clear()
        switch (userInput.trim()) {
            case '1':
                currentLoadMessage()
                currentLoad(10000)
                clear
                break;
            case '2':
                consMessage()
                machineConnections(10000)
                allUsers(5000)
                clear
                break
            case '3':
                networkStatsMessage()
                networkStats(2000)
                clear
                break
            default:
                console.log(error("Invalid input. Please press 1, 2 or 3."));
        }

        rl.close();
    });
}

getUserInput()