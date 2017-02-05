var twilio = require("twilio");
var moment = require('moment');
var accountSid = 'ACfd209efa74f5e1d3dbcd00ba2253fa8d'; // Your Account SID from www.twilio.com/console
var authToken = '4140acf89d142f8bbf7f61f367349cfb';   // Your Auth Token from www.twilio.com/console
var client = new twilio.RestClient(accountSid, authToken);

function phone() {
  client.messages.create({
      body: 'Danger, possible threat detected. \n'+ moment().format('LLL'),
      to: '+14383936425',  // Text this number
      from: '+17053151120 ' // From a valid Twilio number
  }, function(err, message) {
      console.log(message);
  });
}

module.exports.phone = phone;
