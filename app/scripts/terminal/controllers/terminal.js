 angular.module('webappApp')
  .controller('TerminalCtrl', ['$scope', 'Portal', function ($scope, Portal) {
    var callback = function(data) {
      $scope.$broadcast('terminal-output', { output: true, breakLine: true, text: [data]});
      $scope.$apply();
    };
    Portal.subscribe(callback);
    Portal.connect("ws://echo.websocket.org");

  	$scope.$on('terminal-input', function (e, consoleInput) {
  		$scope.prompt.user('portalcloud');
  		$scope.prompt.path('/some/path/');
        var cmd = consoleInput[0];
        Portal.send(cmd.command);
  });
}]);