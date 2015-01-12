angular.module('app.services', [])

.factory('TokenUtil', function() {
    return {
        checkToken: function(token) {
            // ...
            // Dummy check token
            if(token === 'AWESOME123') {
            	return true;
            }
        }
    };
})

.factory('AuthenticationService', ['$http', '$rootScope', '$timeout',
    function($http, $rootScope, $timeout) {
        // Service container
        var service = {};

        service.Login = function(username, password, callback) {
            // POST to server
            // $http.post('/login', {})
            // Dummy POST to server
            $timeout(function() {
                var response = {
                    // Cool
                    success: username === 'test' && password === 'test',
                    token: 'AWESOME123'
                };
                if (!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);
        };

        return service;
    }
]);