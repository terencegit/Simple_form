var myApp = angular.module('myApp',[]);
app.controller('userController', function($scope, $http){
//You create an empty object
$scope.user ={};

$scope.formSubmit = function()
{
	console.log($scope.user);
};
});
