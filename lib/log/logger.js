const log4js = require("log4js");
const config = require("../../config/log4js.config")
var console;

// console Logger
log4js.configure(config);

console = log4js.getLogger();

module.exports = {
  console
};