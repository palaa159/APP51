/* APP CONTROLLER

*/
angular.module('app.controllers', [])

/* LOGIN
	inspired from http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx
*/

.controller('LoginCtrl', function($scope, $rootScope, $state, AuthenticationService, localStorageService) {
	$scope.login = function() {
		$scope.dataLoading = true;
		AuthenticationService.Login($scope.username, $scope.password, function(response) {
			// callback
			if(response.success) {
				// Store Token in LocalStorage
				console.log('Token returned '+ response.token);
				localStorageService.set('token', response.token);
				// console.log('Get token %s', localStorageService.get('token'));
				$state.go('main');
				// Return to normal state
				$scope.dataLoading = false;
				$scope.username = '';
				$scope.password = '';
			} else {
				$scope.error = response.message;
				$scope.dataLoading = false;
			}
		});
	};
	console.log('>>> Login page loaded');
})

.controller('MainCtrl', function($scope, $rootScope, $state, TokenUtil, localStorageService) {
	// Check for Token expiration
	console.log('Get token: %s', localStorageService.get('token'));
	if(TokenUtil.checkToken(localStorageService.get('token'))) {
		console.log('*** Token found and not expired ***');
	} else {
		console.log('*** No token found or expired ***');
		// go to login page
		$state.go('login');
	}
	$scope.welcome_msg = 'Welcome';
	console.log('>>> Main page loaded');
});