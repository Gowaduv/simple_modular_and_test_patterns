"use strict";
const Greet = module.exports = function(){
};
Greet.prototype.response = function(name) {
  var toScreen = ('Hello, ' + name || "world!");
  return toScreen;
};
var cli = new Greet();
if (process.argv[2]){
  console.log(cli.response(process.argv[2]));
}

// http://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-node-js  and  http://stackoverflow.com/questions/12925802/make-a-node-js-script-accept-command-line-arguments/12925835#12925835
//
