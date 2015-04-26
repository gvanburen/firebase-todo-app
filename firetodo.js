angular.module('todoApp', ['firebase'])
	// .constant('FIREBASE_URL', 'https://burning-heat-343.firebaseio.com/#-JnnMTiEzdmcvzDWRJua|041400235b63313c480960d33200291f')
	// .factory('firebaseReference', function(FIREBASE_URL){
	// 	return new Firebase( FIREBASE_URL );
	// })
.controller('toDoCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
		var ref = new Firebase('https://burning-heat-343.firebaseio.com/')
		$scope.items = $firebaseArray(ref);

		$scope.addTodo = function(e){
			if (e.keyCode != 13) return;
			$scope.items.$add({
				name: $scope.newTodo
			});
			$scope.newTodo = "";
		}
		$scope.removeTodo = function(idx){
			$scope.items.$remove(idx);
		}
	}
]);