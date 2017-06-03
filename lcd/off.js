module.exports = {
  offLcd: function(){
    eUpmVersion = true;
    var mraa = require('mraa');
    var lcd = require('jsupm_i2clcd');
    var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
    display.displayOff();
    display.backlightOff();
  }
};
