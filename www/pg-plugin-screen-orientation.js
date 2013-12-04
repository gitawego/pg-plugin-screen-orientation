var exec = require("cordova/exec");
var ScreenOrientation = function() {};

ScreenOrientation.prototype.set = function(str, success, fail) {
  cordova.exec(null, null, "ScreenOrientation", "set", [str]);
};

var screenOrientation = new ScreenOrientation();

module.exports = screenOrientation;
    