(function() {
	'use strict';
	angular.module('myApp',['ngResource', 'ui.router']).config(configure).run(runBlock);
	
	configure.$inject = ['$stateProvider'];
	function configure($stateProvider) {
		$stateProvider.state('customers' , {
			url : '/customers',
			templateUrl: 'views/customers.html',
			controller: 'CustomerListController'
		}).state('viewCustomer', {
			url: '/customers/:id/view',
			templateUrl: 'views/customer-view.html',
			controller: 'CustomerViewController'
		}).state('editCustomer', {
			url: '/customers/:id/edit',
			templateUrl: 'views/customer-edit.html',
			controller: 'CustomerEditController'
		}).state('addCustomer',{
			url:'customers/new',
			templateUrl: 'views/customer-add.html',
			controller: 'CustomerCreationController'
		});
	};
	runBlock.$inject = ['$state'];
	function runBlock($state) {
		$state.go('customers');
	};
})();





/*myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

myApp.controller('DoubleController', ['$scope', function($scope) {
	$scope.double = function(value) { 
		return value * 2;
	};
}]);

myApp.controller('SpicyController', ['$scope', function($scope) {
	$scope.spice = 'very';
	
	$scope.chiliSpicy = function() {
		$scope.spice = 'chili';
	}
	
	$scope.jalapenoSpicy = function() {
		$scope.spice = 'jalapeno';
	}
}]);*/

/*angular.module('myApp').controller('MainCtrl', function($scope) {
	var self = this;
	self.message = 'hello';
	
	self.updateMessage = function(message) {
		self.message = message;
	};
})

angular.module('myApp').controller('MyController', ['$scope', 'notify', function($scope, notify) {
	$scope.callNotify = function(msg) {
		notify(msg);
	};
}]).
factory('notify', ['$window', function(win){
	var msgs = [];
	return function(msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			win.alert(msgs.join("\n"));
			msgs = [];
		}
	};
}]);*/

/*angular.module('myApp').factory('Customer', function($resource) {
	return $resource('/customers/:id', {id:'@id'}, {
		update: {
			method: 'PUT'
		}
	});
});*/

/*myApp.controller('ResourceController', function($scope, Customer) {
	$scope.customers = Customer.query();
});*/