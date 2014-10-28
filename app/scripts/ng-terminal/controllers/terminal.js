 angular.module('webappApp')
  .controller('TerminalCtrl', ['$scope', function ($scope) {
  	$scope.$broadcast('terminal-output', { output: true, breakLine: true, text: ["wellcome to portalcloud"] });
  	$scope.$on('terminal-input', function (e, consoleInput) {
  		$scope.prompt.user('portalcloud');
  		$scope.prompt.path('/some/path/');
        var cmd = consoleInput[0];
        $scope.$broadcast('terminal-output', { output: true, breakLine: true, text: ["wellcome to portalcloud"] });


  });
}])
;