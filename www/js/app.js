/* App
  Modules:
  – Ionic for Mobile Framework
  – ngCordova for injecting phonegap plugin
  – LocalStorageModule for interfacing with Local Storage
 */
var APP_NAME = 'Sth51';

var app = angular.module('app', ['ionic', 'ngCordova', 'LocalStorageModule', 'app.controllers', 'app.services']); // defining angular world
// Cache $http
app.config(['$httpProvider', 'localStorageServiceProvider',
    function($httpProvider, localStorageServiceProvider) {
        $httpProvider.defaults.cache = true;
        // LocalStorage
        localStorageServiceProvider
            .setPrefix(APP_NAME)
            .setStorageType('localStorage')
            .setNotify(true, true)
            .setStorageCookie(14); // Expire in 14 days
    }
]);

app.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        // EVENT LISTENERS
        document.addEventListener('resume', function() {
            // $state.go('tabs.films');
            console.log('*** App resumed ***');
        });
    })
        .then(function() {
            console.log('*** App finished loading ***');
        });
});