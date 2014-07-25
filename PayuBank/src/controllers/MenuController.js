function Menu($scope, $location){
	selectMenu($scope, $location);

	$scope.$on('$routeChangeSuccess', function () {
		selectMenu($scope, $location);
	});
}

function selectMenu($scope, $location) {
	if($location.path().indexOf('account') >= 0){
		$scope.accountMenu = 'selected';
		$scope.customerMenu = '';
		$scope.movementMenu = '';
	} else if($location.path().indexOf('customer') >= 0){
		$scope.accountMenu = '';
		$scope.customerMenu = 'selected';
		$scope.movementMenu = '';
	} else if($location.path().indexOf('movement') >= 0){
		$scope.accountMenu = '';
		$scope.customerMenu = '';
		$scope.movementMenu = 'selected';
	}
}