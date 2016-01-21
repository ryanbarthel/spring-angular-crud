(function() {
	
	'use strict';
	
	angular.module('myApp').
	factory('CustomerService', CustomerService).
	service('PopupService', PopupService);
	
	function CustomerService($resource) {
		return $resource('/api/customers/:id', {id:'@id'}, {
			update: {
				method: 'PUT'
			}
		});
	};
	
	function PopupService($window) {
		this.showPopup = function(message) {
			return $window.confirm(message);
		};
	};
})();