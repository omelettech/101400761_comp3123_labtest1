//Remove log files
console.log("question 3")
const fs = require("fs")
const crypto = require("crypto");

function createLogDir() {
    return new Promise((resolve, reject) => {
        fs.mkdir("logs", (err) => {
            err === null ? resolve("created /logs") : reject(err);
        })
    })

}

function create10LogFiles() {
    const r = () => crypto.randomBytes(20).toString('hex');
    for (let i = 0; i < 10; i++) {
        fs.appendFile("logs/log" + i.toString() + ".txt", r(), err => {
            err ? console.error(err) : console.log("Created a new file: log" + i.toString())
        })
    }


}

function removeLogDir() {
    console.log("Files to be deleted:")
    fs.readdirSync("logs").forEach(file => {
        console.log(file)
    })

    fs.rm('logs', {recursive: true}, (err) => {
        if (err) {
            console.error(err)

        } else {
            console.log("logs folder deleted")
        }
    })
}

//main function
//Checks whether log exists and adds it if it doesnt and removes if it does
function ChangeLogFolder() {
    fs.access('logs', (err) => {

        if (!err) {
            //logs folder exists
            removeLogDir()

        } else {
            //file doesnt exist so create one
            createLogDir()
                .then(() => {
                    create10LogFiles()
                })
                .catch()
            //logs folder exists now
        }
    })

}


ChangeLogFolder()