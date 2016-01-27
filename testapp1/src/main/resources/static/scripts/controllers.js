(function() {
	'use strict';
	angular.module('myApp').
		controller('CustomerListController', customerListController).
		controller('CustomerViewController', customerViewController).
		controller('CustomerEditController', customerEditController).
		controller('CustomerCreationController', customerCreationController);
	
	function customerListController($scope, $state, PopupService, CustomerService) {
		$scope.customers = CustomerService.query();
		
		$scope.deleteCustomer = function(customer) {
			if (PopupService.showPopup('Really delete this?')) {
				customer.$delete(function() {
					$scope.customers = CustomerService.query();
					$state.go('customers');
				});
			};
		};
	};
	
	function customerViewController($scope, $stateParams, CustomerService) {
		$scope.customer = CustomerService.get({id:$stateParams.id});
	};
	
	function customerEditController($scope, $state, $stateParams, CustomerService) {
		$scope.updateCustomer = function() {
			$scope.customer.$update(function () {
				$state.go('customers');
			});
		};
		$scope.loadCustomer = function() {
			$scope.customer = CustomerService.get({id:$stateParams.id});
		};
		
		$scope.loadCustomer();
	};
	
	function customerCreationController($scope, $state, $stateParams, CustomerService) {
		$scope.customer = new CustomerService();
		
		$scope.addCustomer = function() {
			$scope.customer.$save(function(){
				$state.go('customers');
			});
		};
		
	};
	
})();