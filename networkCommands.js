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




/// Getting your input

function getUserInput() {
    rl.question("Press 1 to look at your machines current Load. ", (userInput) => {
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
            default:
                console.log("Invalid input. Please press 1");
        }

        rl.close();
    });
}

getUserInput()