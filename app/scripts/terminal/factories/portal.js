//Resource factory for CRUD user
angular.module('webappApp')
.factory('Portal', function () {
  var Portal = {};
 
  Portal.connect = function(portal_url) {
    if(Portal.ws) { return; }
 
    var ws = new WebSocket(portal_url);
 
    ws.onopen = function() {
      Portal.callback("Succeeded to open a connection");
    };
 
    ws.onerror = function() {
      Portal.callback("Failed to open a connection");
    }
 
    ws.onmessage = function(message) {
      Portal.callback(message.data);
    };
 
    Portal.ws = ws;
  }
 
  Portal.send = function(message) {
    Portal.ws.send(message);
  }
 
  Portal.subscribe = function(callback) {
    Portal.callback = callback;
  }
 
  return Portal;
});