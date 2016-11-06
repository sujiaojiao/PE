var app = angular.module("shop",["filters","ngRoute"]);
app.directive("navBar",function() {
	  return { 
	  	templateUrl:"template/navBar.html"
	  }
})

app.config(function ($routeProvider) {
	$routeProvider.when("/products",{templateUrl:"template/products.html"});
	$routeProvider.when("/checkout",{templateUrl:"template/checkout.html"});
	$routeProvider.otherwise({templateUrl:"template/products.html"});
});

app.controller("mainCtrl",function($scope) {
	 //存放购物车数量
	        $scope.carts = [];
	        $scope.addTocart = function(p) {	        	   	        	
	        	var hasThisProduct = false;  //假定购物出没有要加入的商品
	        	  for(var i=0;i<$scope.carts.length;i++){
	        	  	if ($scope.carts[i].product.name == p.name) {
	        	  		hasThisProduct = true; //经检查，购物车有这个商品	        	  		
	        	  		//商品数量++
	        	  		$scope.carts[i].count++;
	        	  		break;
	        	  	} 
	        	  }
	        	  if(hasThisProduct == false){
	        	  	 $scope.carts.push({product:p,count:1});
	        	  }	       
	        	   console.log($scope.carts);
	        }	       
	     
	     //求和
	     $scope.totalCount = function(){
	     	var total = 0;
	     	var totalPrice = 0;
	     	for (var i=0;i<$scope.carts.length; i++) {
	     		total += $scope.carts[i].count; 
	     		totalPrice += $scope.carts[i].count * $scope.carts[i].product.price;
 	     	}
	     	$scope.totalPrice = totalPrice;
	     	return total;
	     }
});
