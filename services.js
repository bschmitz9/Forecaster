
//============================Services =========================================
myApp.service('weatherService', ['$resource', function ($resource){
        //default weather city that can be passed between controllers, San Jose until the ng-model gets updated
        //in the input field
        this.weather = "San Jose, CA";

        //get weather data from this api, tell its ok to get data from another website with the JSON_CALLBACK & JSONP.
        //the api says its ok to get data from another website
        this.getWeather = function (city, days){
            var currentWeather = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});

        //this gets a result from our api, which we will loop through on the view
        //we pass in the city the user enters and the number of days being passed into the url and extracted via routeParams
        return currentWeather.get({q: city, cnt: days});
    };
}]);