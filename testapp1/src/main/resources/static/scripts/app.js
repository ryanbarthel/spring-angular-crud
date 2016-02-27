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

