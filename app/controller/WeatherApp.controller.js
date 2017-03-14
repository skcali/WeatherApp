(function() {
    'use strict';

    angular
        .module('WeatherApp')
        .controller('WeatherAppCtrl', WeatherAppCtrl);

    /* @ngInject */
    function WeatherAppCtrl($http) {
        var vm = this;

        vm.cityName = '';
        vm.cities = [];

        vm.addCity = function addCity() {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + vm.cityName + '&appid=13b6edb6efe681b822061d2ab2197a98').then(function(response) {
                vm.cityInfo = response.data;
                vm.cities.push(vm.cityInfo.name);
                vm.convertTemp = Math.round(9/5 * (vm.cityInfo.main.temp - 273) + 32);
                vm.convertMinTemp = Math.round(9/5 * (vm.cityInfo.main.temp_min - 273) + 32);
                vm.convertMaxTemp = Math.round(9/5 * (vm.cityInfo.main.temp_max - 273) + 32);
                vm.date = Date.now();
                vm.cityName = '';
            });
        };
        vm.addWDC = function addWDC(){
          $http.get('http://api.openweathermap.org/data/2.5/weather?q=washingtondc&appid=13b6edb6efe681b822061d2ab2197a98').then(function(response) {
              vm.cityInfo = response.data;
              vm.cities.push(vm.cityInfo.name);
              vm.convertTemp = Math.round(9/5 * (vm.cityInfo.main.temp - 273) + 32);
              vm.convertMinTemp = Math.round(9/5 * (vm.cityInfo.main.temp_min - 273) + 32);
              vm.convertMaxTemp = Math.round(9/5 * (vm.cityInfo.main.temp_max - 273) + 32);
              vm.date = Date.now();
          });
        };
        vm.addNY = function addNY(){
          $http.get('http://api.openweathermap.org/data/2.5/weather?q=newyork&appid=13b6edb6efe681b822061d2ab2197a98').then(function(response) {
              vm.cityInfo = response.data;
              vm.cities.push(vm.cityInfo.name);
              vm.convertTemp = Math.round(9/5 * (vm.cityInfo.main.temp - 273) + 32);
              vm.convertMinTemp = Math.round(9/5 * (vm.cityInfo.main.temp_min - 273) + 32);
              vm.convertMaxTemp = Math.round(9/5 * (vm.cityInfo.main.temp_max - 273) + 32);
              vm.date = Date.now();
          });
        };
        vm.addLondon = function addLondon(){
          $http.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=13b6edb6efe681b822061d2ab2197a98').then(function(response) {
              vm.cityInfo = response.data;
              vm.cities.push(vm.cityInfo.name);
              vm.convertTemp = Math.round(9/5 * (vm.cityInfo.main.temp - 273) + 32);
              vm.convertMinTemp = Math.round(9/5 * (vm.cityInfo.main.temp_min - 273) + 32);
              vm.convertMaxTemp = Math.round(9/5 * (vm.cityInfo.main.temp_max - 273) + 32);
              vm.date = Date.now();
          });
        };
        vm.addTokyo = function addTokyo(){
          $http.get('http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=13b6edb6efe681b822061d2ab2197a98').then(function(response) {
              vm.cityInfo = response.data;
              vm.cities.push(vm.cityInfo.name);
              vm.convertTemp = Math.round(9/5 * (vm.cityInfo.main.temp - 273) + 32);
              vm.convertMinTemp = Math.round(9/5 * (vm.cityInfo.main.temp_min - 273) + 32);
              vm.convertMaxTemp = Math.round(9/5 * (vm.cityInfo.main.temp_max - 273) + 32);
              vm.date = Date.now();
          });
        };
        vm.addSD = function addSD(){
          $http.get('http://api.openweathermap.org/data/2.5/weather?q=san%20diego&appid=13b6edb6efe681b822061d2ab2197a98').then(function(response) {
              vm.cityInfo = response.data;
              vm.cities.push(vm.cityInfo.name);
              vm.convertTemp = Math.round(9/5 * (vm.cityInfo.main.temp - 273) + 32);
              vm.convertMinTemp = Math.round(9/5 * (vm.cityInfo.main.temp_min - 273) + 32);
              vm.convertMaxTemp = Math.round(9/5 * (vm.cityInfo.main.temp_max - 273) + 32);
              vm.date = Date.now();
          });
        };
    };
})();
