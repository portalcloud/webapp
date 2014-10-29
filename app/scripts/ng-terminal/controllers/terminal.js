 angular.module('webappApp')
  .controller('TerminalCtrl', ['$scope', function ($scope) {
    var ws = new WebSocket("ws://0.0.0.0:8080/echo");
    ws.onmessage = function(e) {
      $scope.$broadcast('terminal-output', { output: true, breakLine: true, text: [event.data]});
    };
  	$scope.$broadcast('terminal-output', { output: true, breakLine: true, text: ["wellcome to portalcloud"] });
  	$scope.$on('terminal-input', function (e, consoleInput) {
  		$scope.prompt.user('portalcloud');
  		$scope.prompt.path('/some/path/');
        var cmd = consoleInput[0];
        ws.send(cmd);
        //$scope.$broadcast('terminal-output', { output: true, breakLine: true, text: ["wellcome to portalcloud"] });
  });
}])
;