angular.module('myApp').controller('BoardController',function ($scope, $uibModal, $log,CardsService) {


	// get the board details on load of page
	$scope.board=CardsService.getBoard();
	$scope.lists=$scope.board.lists;
    
	$scope.boardTitle=$scope.board.title;
	
	if($scope.boardTitle)
		$scope.isBoardCreated=true;
	
	
	$scope.createBoard=function(){
		$scope.isBoardCreated=true;
		CardsService.setBoard($scope.boardTitle);
	}
	
    $scope.deleteList=function(list){
    	var idx = $scope.lists.indexOf(list);
    	$scope.lists.splice(idx,1);
    	CardsService.setLists($scope.lists);
    };

	$scope.animationsEnabled = true;

	$scope.addList = function () {

	// modal to add the list title
		var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'addList.html',
	      controller: 'AddListModalCtrl'
	    });

	    modalInstance.result.then(function (selectedItem) {

	      $scope.list={};
	      $scope.list.title=selectedItem;
	      $scope.list.cards=[];
	      
	      $scope.lists.push($scope.list);
	
	      CardsService.setLists($scope.lists);
	      
	    }, function () {

	    });
	  };

	  $scope.toggleAnimation = function () {
	    $scope.animationsEnabled = !$scope.animationsEnabled;
	  };

	  
	  $scope.widgets = [{ x:0, y:0, width:1, height:1 }, { x:0, y:0, width:3, height:1 }];
	  
});

// Modal controller for creating a new list
 angular.module('myApp').controller('AddListModalCtrl', function ($scope, $uibModalInstance) {

	  $scope.ok = function () {
	    $uibModalInstance.close($scope.listTitle);
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
	});

	
	
	
	