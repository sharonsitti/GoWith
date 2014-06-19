app.directive('userEntity', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            fbUsername: '=',
            firstName: '='
        },
        templateUrl: '/directives/partials/userEntity.html',
        link: function(scope, elem, attrs) {

        }
    };
});