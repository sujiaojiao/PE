// 服务（service）
app.controller("productsCtrl",function($http,$scope) {
	$http({method:"get",url:"php/getProducts.php"}).then(function(response){		
		$scope.products = response.data;
		  //获取页数 
         $scope.getPages = function(){
	        	  var count = $scope.categoryProducts.length/3;
	        	  var pages = [];
	        	  for (var i=0;i<count;i++) {
	        	  	pages.push(i+1);
	        	  }
	        	  $scope.pages = pages;
	        }
		
    //函数过滤方法
//		$scope.makeCategoryes = function() {
//			var categoryNames = [];
//			var obj = {};
//			for (var i=0;i<$scope.products.length;i++) {
//				var category = $scope.products[i].category;
//				if (angular.isUndefined(obj[category])) {
//					categoryNames.push(category);
//					obj[category] = true;
//				}
//			}
//			$scope.categoryNames = categoryNames;
//		}
//		$scope.makeCategoryes();
		
		
//		$scope.getProductsOfCategory('全部');
		$scope.getProductsOfCategory = function(category) {
			
			//记住选中的是哪个按钮
			$scope.choosedCategory = category;
					
			var categoryProducts = [];
			if (category=='全部') {
				categoryProducts = $scope.products;
			}else{
				for (var i=0;i<$scope.products.length;i++) {
					if ($scope.products[i].category == category) {
						categoryProducts.push($scope.products[i]);
					}					
			    }				
			}	
			$scope.categoryProducts = categoryProducts;
			$scope.getPages();
			 $scope.getProductsPerPage(1);
		}		
	       
	        
	        $scope.getclassofChoosedCategory = function(category) {
	        	  return  $scope.choosedCategory == category?"btn-primary":"";
	        } 
	     
	       $scope.getProductsPerPage = function(page) {
	       	// 记录当前页码 
	       	$scope.currentpage = page;
	       	var perPageProducts = [];
	       	  for (var i=(page-1)*3;i<Math.min($scope.categoryProducts.length,page*3) ;i++) {
	       	  	perPageProducts.push($scope.categoryProducts[i]);
	       	  }
	       	  $scope.perPageProducts = perPageProducts;
	       }
	       
	       //选择页码时变色
	       $scope.getclassofChoosedPage = function(page) {
	        	  return  $scope.currentpage == page?"btn-primary":"";	        	     
	        }
	        $scope.getProductsOfCategory('全部');   
      
	},function(error) {
		
	})
});