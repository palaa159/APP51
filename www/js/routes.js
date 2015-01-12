/* Routes

*/

// config routing
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                controller: 'LoginCtrl'
            })
            .state('main', {
                url: "/main",
                templateUrl: "views/main.html",
                controller: 'MainCtrl'
            });
            // TODO
            // Maybe we need this in Room page
            // .state('tabs', {
            //     url: "/tab",
            //     abstract: true,
            //     templateUrl: "tabs.html"
            // });
        $urlRouterProvider.otherwise("/main");
    }
]);