app.controller('eventCtrl', function($scope, $route){
    $scope.view = $route.current.controllerAs;
    $scope.user = "sharonsitti";

    $scope.messages = [
        {name: "dariafrost", text: "Hey everybody! Where do you wanna meet?"},
        {name: "zoebronshteyn", text: "Hi! How does Rabin Square at 21:30 sound?"}
    ];

    $scope.toggleGoing = function() {
        $scope.isGoing = !$scope.isGoing;
    }

    $scope.sendMessage = function() {
        $scope.messages.push({name: $scope.user, text: $scope.message});
        $scope.message = "";
    }
});

app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event})();
                });

                event.preventDefault();
            }
        });
    };
});