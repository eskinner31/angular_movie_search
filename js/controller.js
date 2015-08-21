app.controller('Main', function($scope, $routeParams  , $http, $location){
  $scope.search = function(params){
    $http.get("http://www.omdbapi.com/?s="+params+"").then(function(data){
      $scope.results = data.data.Search;
    })
  }
  if($location.url() !== '/'){
    $scope.search($location.url());
  }
})

app.controller('Show', function($scope, $routeParams, $http, $location){
  console.log($routeParams);
  $scope.showSearch = function(params){
    $http.get("http://www.omdbapi.com/?i="+params+"").then(function(data){
      console.log(params);
      $scope.showResults = data
    })
  }
  $scope.showSearch($routeParams.id);
})
