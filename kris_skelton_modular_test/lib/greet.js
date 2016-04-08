"use strict";
const Greet = module.exports = function() {
  Greet.prototype.response = function(name) {
    return ("Hello, " + name || "world!");
  };
};
var cli = new Greet();
if (process.argv[2]) {
  console.log(cli.response(process.argv[2]));
}
