app.controller("checkoutCtrl",function($scope) {
	$scope.delete = function(p){
		
		for (var i=0;i<$scope.carts.length;i++) {
			
			if ($scope.carts[i].product.name == p.product.name) {
				console.log("delete");
				$scope.carts.splice(i,1);break;
			}
		}
	}
});