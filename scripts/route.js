var myApp = angular.module('myApp',['ngRoute']);


myApp.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when('/home', {
		templateUrl : 'htmls/home.html',
		controller : 'HOME_CONTROLLER'
	})
	// .when('/menu', {
	// 	templateUrl : 'content/menu.html',
	// 	controller : 'menuCtrl'
	// })
	.otherwise({
		redirectTo : '/home'
	});
}])