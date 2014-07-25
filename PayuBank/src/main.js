var PayuBankModule = angular.module('PayuBank', []);

PayuBankModule.config(['$routeProvider', function($routes) {
	$routes.
		when('/account', {
			templateUrl: 'src/views/account/index.html',
			controller: AccountIndexController
		}).
		when('/account/new', {
			templateUrl: 'src/views/account/create.html',
			controller: AccountCreateController
		}).
		when('/account/search', {
			templateUrl: 'src/views/account/search.html',
			controller: AccountSearchController
		}).
		when('/customer', {
			templateUrl: 'src/views/customer/index.html',
			controller: CustomerIndexController
		}).
		when('/customer/new', {
			templateUrl: 'src/views/customer/create.html',
			controller: CustomerCreateController
		}).
		when('/customer/search', {
			templateUrl: 'src/views/customer/search.html',
			controller: CustomerSearchController
		}).
		otherwise({
			redirectTo: '/account'
		});
}]);