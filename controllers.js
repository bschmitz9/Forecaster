//============================== Controllers ===================================

//define our controller for the index view, where the user enters in the city they want a forecast for
myApp.controller('mainController', ['$scope', '$location',  'weatherService', function($scope, $location, weatherService){
       
       //set the scope to be the current value of the service
       $scope.weather = weatherService.weather;

       //keep an eye on our weather variable in scope so that when it changes we can update
       //our service which can then update the controller view on the forecast page as well
       //using two way binding with the ng-model in our input form
       $scope.$watch('weather', function (){
            weatherService.weather = $scope.weather;
       });

       $scope.submit = function (){
         $location.path('/forecast');
       };

}]);


//defines the controller for our second view, where we see the weather forecast for his or city
myApp.controller('weatherController', ['$scope', '$routeParams', 'weatherService', function($scope, $routeParams, weatherService){
    //we use $routeParams to extract the days variable we are passing in the route, so that we can
    //show the number of days forecast the user would like to see
    //routeParams returns with strings
    $scope.days = $routeParams.days || '3';

    //set the scope to be the current value of the service
    $scope.weather = weatherService.weather;

    //this gets a result from our api, which we will loop through on the view
    //we pass in the city the user enters and the number of days being passed into the url and extracted via routeParams
    $scope.weatherResult = weatherService.getWeather($scope.weather, $scope.days);

    //convert the temp we get back from the api into farenheit
    $scope.convertToFarenheit = function (degK){
            return Math.round((1.8 * (degK - 273)) + 32);
    };

    //convert the date to the current date and we set the format on the view
    //use the date filter on the view to show the data in a nice readable format
    $scope.convertToDate = function (dt){
            return new Date(dt * 1000);
    };
}]);