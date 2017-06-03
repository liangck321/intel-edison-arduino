var lcd = require('./display-text');
var lcdOff = required('./off');

setTimeout(function() {
    lcd.showMessage("Build Completed");
}, 200);

lcdOff.offLcd();
