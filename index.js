const color = require("colors");
const fs = require("node:fs");

class Logger {
    constructor(){
        
    if(!fs.existsSync('log.txt')){
            fs.writeFileSync('log.txt',' ');
            console.log("Log.txt Bulunamadı.. Yenisi Oluşturuldu");
        }
    }
    log(logger){
        console.log(color.bold('[LOG]:'), color.blue(logger))
        fs.appendFileSync('log.txt', `[LOG]: ${logger}\n`)
    }
    warn(logger){
        console.warn(color.yellow('[WARN]:'), color.blue(logger))
        fs.appendFileSync('log.txt', `[WARN]: ${logger}\n`)

    }
    error(logger) {
        console.error(color.red('[ERROR]:'), color.blue(logger))
        fs.appendFileSync('log.txt', `[ERROR]: ${logger}\n`)
    }
}

module.exports = Logger;
