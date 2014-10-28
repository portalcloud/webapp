//Resource factory for CRUD user
angular.module('webappApp')
.factory('ChatService', function () {
  var Terminal = {};
 
  Terminal.connect = function() {
    if(Terminal.ws) { return; }
 
    var ws = new WebSocket("ws://localhost:8000/socket/");
 
    ws.onopen = function() {
      Terminal.callback("Succeeded to open a connection");
    };
 
    ws.onerror = function() {
      Terminal.callback("Failed to open a connection");
    }
 
    ws.onmessage = function(message) {
      Terminal.callback(message.data);
    };
 
    Terminal.ws = ws;
  }
 
  Terminal.send = function(message) {
    Terminal.ws.send(message);
  }
 
  Terminal.subscribe = function(callback) {
    Terminal.callback = callback;
  }
 
  return Terminal;
}]);
