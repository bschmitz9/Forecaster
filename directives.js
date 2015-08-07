myApp.directive('cityWeather', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherDirective.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            // convertToDate: "&",
            // dateFormat: "@"
        }
    };
});
