function AccountIndexController($scope, $http) {
	var caption = {
		'new': 'New Account',
		'search': 'Search Accounts'
	}
	$scope.caption = caption;
}

function AccountCreateController($scope, $http) {
	var caption = {
		'title': 'Save Account Data',
		'accountId': 'Account ID',
		'accountNumber': 'Account #',
		'customerId': 'Customer',
		'submit': 'Save',
		'index': 'Back'
	}
	
	$scope.caption = caption;
	getDataList($scope, $http, 'customers');
	
	$scope.accountForm = {};
	
	$scope.accountForm.submitForm = function(item, event) {
		console.log('Account ID: ' + $scope.accountId);
		console.log('Account #: ' + $scope.accountNumber);
		console.log('Customer ID: ' + $scope.customer.customerId);
		console.log('Data successfully saved.');
		$scope.accountId = '1';
	};
}

function AccountSearchController($scope, $http, $filter) {
	var caption = {
		'title': 'Search Accounts',
		'accountId': 'Account ID',
		'accountNumber': 'Account #',
		'customerId': 'Customer',
		'submit': 'Search',
		'index': 'Back',
		'chooseCustomer': '-- choose customer --'
	}
	
	$scope.search = {'customerId': '!!'};
	
	$scope.caption = caption;
	getDataList($scope, $http, 'customers');
	getDataList($scope, $http, 'accounts');
	
	$scope.showDetail = function(customer_id) {
		var found = $filter('filter')($scope.customers, {customerId: customer_id}, true);
		if (found.length) {
			return found[0].customerName;
		} else {
			return 'Not found';
		}
	}
}

function getDataList($scope, $http, file) {
	var customers = [];
	$http.get('data/' + file + '.json').success(function(data) {
		$scope[file] = data;
	});
}