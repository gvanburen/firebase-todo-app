angular.module('todoApp', ['firebase'])
	.constant('FIREBASE_URL', 'https://burning-heat-343.firebaseio.com/todos')
	.factory('firebaseReference', function(FIREBASE_URL){
		return new Firebase( FIREBASE_URL );
	})
	.controller('toDoCtrl', ['$scope','$firebaseArray', 'firebaseReference', function($scope, $firebaseArray, firebaseReference){
		$scope.logMeIn = function(){
			var ref = firebaseReference;
			ref.authWithOAuthPopup("google", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			    $scope.items = $firebaseArray(firebaseReference);
			  }
			})
		}

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