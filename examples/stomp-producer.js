var stompjs = require('stompjs');
var client = stompjs.overWS('ws://localhost:61614/stomp');
var headers = {
  login: 'mylogin',
  passcode: 'mypasscode',
  // additional header
  'client-id': 'my-client-id'
};
client.debug = console.log;
client.connect(headers, function (error) {
  // display the error's message header:
  if (error.command == "ERROR") {
    console.error(error.headers.message);
  } else {
    console.log("Connected");
    var quote = {symbol: 'APPL', value: 195.46};
    client.send("/test", {}, JSON.stringify(quote));
  }
});