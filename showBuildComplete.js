var lcd = require('./lcd/display-text');
var lcdOff = require('./lcd/off');
var buzzer = require('./buzzer/on')

buzzer.buzz();

setTimeout(function() {
    lcd.showMessage("Hooray~~","Pull Completed...");
}, 5000);

lcdOff.offLcd();
