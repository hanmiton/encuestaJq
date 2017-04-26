angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'app/views/pages/poll.html'
	})

	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})

	.otherwise({ redirectTo: '/'});

	$locationProvider.html5Mode({
		enabled: true,
		requiredBase: false
	});
	
});