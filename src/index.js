const color = require("colors");
const fs = require("node:fs");
const moment = require("moment");

class Logger {
    constructor(){
        
    if(!fs.existsSync('log.txt')){
            fs.writeFileSync('log.txt',' ');
            console.log("Log.txt Bulunamadı.. Yenisi Oluşturuldu");
        }
    }
    log(logger){
        var date = moment().locale("TR").format('LLLL');
        
        console.log(color.bold('[LOG]:'), color.blue(logger))
        fs.appendFileSync('log.txt', `[${date}][LOG]: ${logger}\n`)
    }
    warn(logger){
        var date = moment().locale("TR").format('LLLL');
        console.warn(color.yellow('[WARN]:'), color.blue(logger))
        fs.appendFileSync('log.txt', `[WARN]: ${logger}\n`)

    }
    error(logger) {
        var date = moment().locale("TR").format('LLLL');
        console.error(color.red('[ERROR]:'), color.blue(logger))
        fs.appendFileSync('log.txt', `[ERROR]: ${logger}\n`)
    }
}

module.exports = Logger;
