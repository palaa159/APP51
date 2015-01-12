/* App
 
 */

var app = angular.module('app', ['ionic', 'ngCordova']); // defining angular world
// Cache $http
app.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.cache = true;
    }
]);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});