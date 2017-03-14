(function() {
    'use strict';

    angular
        .module('WeatherApp')
        .controller('WeatherAppCtrl', WeatherAppCtrl);

    /* @ngInject */
    function WeatherAppCtrl($http, toastr) {
        var vm = this;

        // Declare empty array to ng-repeat
        vm.cities = [];

        // Function to add city by search bar
        vm.addCity = function addCity() {
            $http
                // Calling the API through the search input and assigning the corresponding JSON
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + vm.cityName + '&appid=13b6edb6efe681b822061d2ab2197a98')
                .then(function(response) {
                    vm.cityInfo = response.data;
                    // Convert values to from Kalivn to fahrenheit
                    vm.convertTemp = convertKtoF(vm.cityInfo.main.temp);
                    vm.convertMinTemp = convertKtoF(vm.cityInfo.main.temp_min);
                    vm.convertMaxTemp = convertKtoF(vm.cityInfo.main.temp_max);
                    // Get current date then add it to the cities array to be printed out through ng-reapeat
                    vm.time = new Date();
                    vm.cities.unshift({
                        cityTitle: vm.cityInfo.name,
                        dates: vm.time
                    });
                    vm.cityName = '';
                })
                .catch(function(error) {
                    toastr.error('API Call Error');
                });
        };

        // Function for default search buttons
        vm.getWeather = function getWeather(searchTerm) {
            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + searchTerm + '&appid=13b6edb6efe681b822061d2ab2197a98')
                .then(function(response) {
                    vm.cityInfo = response.data;
                    vm.convertTemp = convertKtoF(vm.cityInfo.main.temp);
                    vm.convertMinTemp = convertKtoF(vm.cityInfo.main.temp_min);
                    vm.convertMaxTemp = convertKtoF(vm.cityInfo.main.temp_max);
                    vm.time = new Date();
                    vm.cities.unshift({
                        cityTitle: vm.cityInfo.name,
                        dates: vm.time
                    });
                })
                .catch(function(error) {
                    toastr.error('API Call Error');
                });
        };

        // Function to convert from Kalivn to fahrenheit
        function convertKtoF(temperature) {
            var tempFinal = Math.round(9 / 5 * (temperature - 273) + 32);
            return tempFinal;
        };
    };
})();
