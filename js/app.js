var app = angular.module("movieSearcher", ['ngAnimate','ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'Main'
    })
    .when('/:id', {
      templateUrl: 'partials/show.html',
      controller: 'Show'
    })
    .otherwise({
      redirectTo: '/'
    })

    //$locationProvider.html5Mode(true);
})
