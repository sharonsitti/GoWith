app.controller('eventCtrl', function ($scope, $route) {
    $scope.view = $route.current.controllerAs;
    $scope.currentUser = {fbUsername: 'sharonsitti', firstName: 'Sharon', lastName: 'Sitti'};

    $scope.attendees = [
        {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'}

    ]
    $scope.messages = [
        {user: {fbUsername: 'dariafrost', firstName: 'Daria', lastName: 'Frost'}, text: "Hey everybody! Where do you wanna meet?"},
        {user: {fbUsername: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'}, text: "Hi! How does Rabin Square at 21:30 sound?"}
    ];

    $scope.toggleGoing = function () {
        $scope.isGoing = !$scope.isGoing;
    };

    $scope.toggle = function (variable) {
        $scope[variable] = !$scope[variable];
    };

    $scope.sendMessage = function () {
        $scope.messages.push({name: $scope.user, text: $scope.message});
        $scope.message = "";
    }
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter, {'event': event})();
                });

                event.preventDefault();
            }
        });
    };
});