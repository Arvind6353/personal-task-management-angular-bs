angular.module('myApp').controller('CardController', function($scope,$routeParams,$location,CardsService) {
    
	
    $scope.cardClone={
    		
    		title:"",
    		description:"",
    		comments:[]
    };

	
    
    if($routeParams.cardIndex!=-1){
    	
    	$scope.cardClone=angular.copy(CardsService.getCard($routeParams.listIndex,$routeParams.cardIndex));

    	$scope.deleteMode=true;
    }
    
    if($routeParams.cardIndex==-1){
    	$scope.createMode=true;
    }
    
    
    $scope.addComments=function(txt){
    	
    	$scope.editMode=true;
    	var obj={
    			text:txt
    	}
    	
    	$scope.cardClone.comments.push(obj);
    }

    $scope.createCard=function(){
    	
    	CardsService.addCards($scope.cardClone,$routeParams.listIndex)
    
    	$location.url("/board");
    }


   $scope.editCard=function(){
    	
    	CardsService.editCard($scope.cardClone,$routeParams.listIndex,$routeParams.cardIndex)

    	$location.url("/board");
    }


   $scope.deleteCard=function(){
   	
	   CardsService.deleteCard($scope.cardClone,$routeParams.listIndex,$routeParams.cardIndex);
   
   		$location.url("/board");
   }

});