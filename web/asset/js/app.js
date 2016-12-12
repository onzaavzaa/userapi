var userApp = angular.module('userApp', []);

userApp.controller('UserCtrl', function ($scope, $http) {

	$http.get('http://localhost/userapi/index.php/api/example/users').success(function(data){
		//alert(data);
		$scope.data = data;
	}).error(function(data){

	});
/*
	$scope.refresh = function(){
		$http.get('userapi/index.php/api/example/users').success(function(data){
			$scope.tasks = data;
		}).error(function(data){
			$scope.tasks = data;
		});
	}

	$scope.addTask = function(){
		var newTask = {title: $scope.taskTitle};
		$http.post('userapi/index.php/api/example/users', newTask).success(function(data){
			$scope.refresh();
			$scope.taskTitle = '';
		}).error(function(data){
			alert(data.error);
		});
	}

	$scope.deleteTask = function(task){
		$http.delete('userapi/index.php/api/example/users' + task.id);
		$scope.tasks.splice($scope.tasks.indexOf(task),1);
	}

	$scope.updateTask = function(task){
		$http.put('userapi/index.php/api/example/users', task).error(function(data){
			alert(data.error);
		});
		$scope.refresh();
	}  */

});
