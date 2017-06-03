var mraa = require('mraa');

function buzz(){
  var myBuzzer = new mraa.Gpio(4);
  myBuzzer.dir(mraa.DIR_OUT);

  var time = 4;
  var beepTime=0;

  var refreshId = setInterval(function() {
    myBuzzer.write(1);
    setTimeout(function() {
        myBuzzer.write(0);
    }, 200);
    beepTime++;
    if(time == beepTime){
        myBuzzer.write(0);
      clearInterval(refreshId);
    }
  }, 400);
}

module.exports = {
  	buzz
};
