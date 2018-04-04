var coordinate = angular
  .module('coordinate', ['ngRoute'])
  .config(($routeProvider, $locationProvider)=> {
    $locationProvider.hashPrefix('');
    $routeProvider
  	  .when('/', {
  	    templateUrl: 'layout/home'
  	  })
  	  .when('/app/:app_slug', {
  			templateUrl: function (params) { return '/app/' + params.app_slug },
  		})
  	  .otherwise({ redirectTo: '/' });
  });
