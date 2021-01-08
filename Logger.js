class Logger {
    constructor(log) {
        if (log === true) {
            this.log = function(input) { console.log(input); };
        }
        else {
            this.log = function(input) { };
        }
    }
}

module.exports = { Logger }