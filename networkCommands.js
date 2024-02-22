import si from 'systeminformation'
import readline from 'readline'
import clear from 'clear'
import chalk from 'chalk'
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



function currentLoad() {
    si.currentLoad()
    .then (data => console.log(data))
    .catch(error => console.error(error));
}

function currentLoadMessage () {
    console.log("Getting your current load...")
}

function helloMessage(){
    console.log("Welcome to the Network Commands Section!")
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
    rl.question("Press 1 to bring up your Machines current Load, Press 2 to get current machine connections, Press 3 to get your network stats: ", (userInput) => {
        clear()
        switch (userInput.trim()) {
            case '1':
                currentLoadMessage()
                currentLoad()
                clear
                break;
            case '2':
                machineConnections()
                allUsers()
                clear
                break
            case '3':
                networkStats(2000)
                clear
                break
            default:
                console.log("Invalid input. Please press 1");
        }

        rl.close();
    });
}

getUserInput()