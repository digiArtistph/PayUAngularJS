function CustomerIndexController($scope, $http) {
	var caption = {
		'new': 'New customer',
		'search': 'Search customers'
	}
	$scope.caption = caption;
}

function CustomerCreateController($scope, $http) {
	var caption = {
		'title': 'Save Customer Data',
		'customerId': 'Customer ID',
		'customerAddress': 'Address',
		'customerPhone': 'Phone',
		'submit': 'Save',
		'index': 'Back'
	}
	
	$scope.caption = caption;
	getDataList($scope, $http, 'customers');
	
	$scope.customerForm = {};
	
	$scope.customerForm.submitForm = function(item, event) {
		console.log('Customer ID: ' + $scope.customerId);
		console.log('Customer #: ' + $scope.customerAddress);
		console.log('Customer #: ' + $scope.customerPhone);
		console.log('Data successfully saved.');
		$scope.customerId = '1';
	};
}

function CustomerSearchController($scope, $http, $filter) {
	var caption = {
		'title': 'Search Customers',
		'customerId': 'Customer ID',
		'customerAddress': 'Address',
		'customerPhone': 'Phone',
		'submit': 'Search',
		'index': 'Back'
	}
	
	$scope.caption = caption;
	getDataList($scope, $http, 'customers');
	
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