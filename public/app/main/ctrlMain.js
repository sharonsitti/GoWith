app.controller('mainCtrl', function($scope, $route){
    $scope.view = $route.current.controllerAs;
    $scope.events = window.events;
});