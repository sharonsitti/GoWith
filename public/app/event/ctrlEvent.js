app.controller('eventCtrl', function ($scope, $route, fbService, $routeParams) {
    var loginStatuses = fbService.getStatusList();
    $scope.view = $route.current.controllerAs;
    getEventData();
    $scope.attendees = [
        {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'},
        {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'},
        {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'}

    ];

    $scope.messages = [
        {user: {fbId: 'dariafrost', firstName: 'Daria', lastName: 'Frost'}, text: "Hey everybody! Where do you wanna meet?"},
        {user: {fbId: 'zoebronshteyn', firstName: 'Zoe', lastName: 'Bronshteyn'}, text: "Hi! How does Rabin Square at 21:30 sound?"}
    ];

    function getEventData() {
        var id = $routeParams.id;
        if (id && window.events && window.events.length) {
            for (var i=0; (i < window.events.length) && !($scope.event); i++) {
                if (window.events[i].id === id) {
                    $scope.eventData = window.events[i];
                }
            }
        }
    }

    function goWith () {
        $scope.currentUser = fbService.getCurrentUser();
        $scope.currentUser.isGoing = true;
        $scope.toggle('isGoing');
        $scope.attendees.unshift($scope.currentUser);

        if(!$scope.$$phase) {
            $scope.$apply();
        }
    }

    function notGoing() {
        var indexToRemove = -1;
        $scope.currentUser.isGoing = false;
        $scope.toggle('isGoing');

        for (var i=0; (i < $scope.attendees.length && indexToRemove == -1); i++) {
            if ($scope.attendees[i].fbId == $scope.currentUser.fbId) {
                indexToRemove = i;
            }
        }

        $scope.attendees.splice(indexToRemove, 1);
    }

    $scope.clickGoWith = function () {
        if ($scope.currentUser && $scope.currentUser.isGoing) {
            notGoing();
            return;
        }

        fbService.getLoginStatus(function (status) {
            if (status === loginStatuses.connected) {
                goWith();
            } else {
                fbService.login(goWith);
            }
        });

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