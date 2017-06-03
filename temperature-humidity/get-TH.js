var sensor1 = require('jsupm_th02');
var cmd = require('./runCmd');

module.exports = {
  	getTemp: function(interval, limit, callback){
      var obj = {
         table: []
      };
      var counter = 0;
      var _limit = (limit*1000)/interval;

      var refreshId = setInterval(function() {
        var th02 = new sensor1.TH02();
        var temperature = th02.getTemperature();
        var humidity = th02.getHumidity()
        console.log(temperature + " " + humidity);
        obj.table.push(
          {
            temp: temperature,
            humi: humidity
          }
        );
        counter++;
        if (counter == _limit) {
          clearInterval(refreshId);
          var fs = require('fs');
          var fileName = `/home/root/temp/tempHumi_${Math.floor(new Date()/1000)}.json`;
          fs.writeFile(fileName, JSON.stringify(obj), 'utf8', function(err) {
              if(err) {
                  return console.log(err);
              }
              cmd.runBashCmd(`aws s3 cp ${fileName} s3://sg-hackday/experiment/1234/`);
              console.log("uploaded to s3!");
              callback();
          });
        }
      }, interval);
    }
};
