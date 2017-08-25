var app = angular.module("mainApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'login.html'
	})
	.when('/dashboard',{//conditional routing... to prevent direct access
		resolve:{
			"check": function($location, $rootScope){
				if(!$rootScope.loggedIn){
					$location.path('/');
				}
			}
		},
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginController', function($scope, $location, $rootScope){
	$scope.submit = function(){
		//$rootScope.thisName = "something";//$rootScope - attaches all objects to global scope
		
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.loggedIn = true; //$rootScope - kind of super global variable
			$location.path('dashboard');//or window.location.hash = '#/dashboard';
		}else{
			alert('Wrong authentication...');
		}
	}
});