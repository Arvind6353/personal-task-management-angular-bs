angular.module('myApp').factory('CardsService', function() {

	var obj = {};
	obj.cards = [];
	obj.boards = {};
	

	obj.boards.board=[
	                  {title:'s'},
	                  {title:'c'},
	                  {title:'w'},
	                  {title:'j'}
	                  ];
	
	obj.boards.lists = [
	                   
	                   {title:'s'},
	                   {title:'w'},
	                   {title:'d'},
	                   {title:'b'}
	                   
	                   ];
	obj.boards.title="";

	obj.addCards = function(card, boardIndex,listIndex) {
		obj.boards.board[boardIndex].lists[listIndex].cards.push(card);
	};

	obj.getCard = function(boardInd,listInd, cardInd) {
		return obj.boards.board[boardIndex].lists[listInd].cards[cardInd];
	};

	obj.deleteCard = function(card, boardIndex,listIndex, cardIndex) {
		obj.boards.board[boardIndex].lists[listIndex].cards.splice(cardIndex, 1);
	};

	obj.editCard = function(card, boardIndex,listIndex, cardIndex) {
		obj.boards.board[boardIndex].lists[listIndex].cards[cardIndex] = card;
	};

	obj.setLists = function(lists) {
		obj.boards.board[boardIndx].lists = lists;
	};

	obj.getBoard = function() {
		return obj.boards;
	};

	obj.setBoard=function(title){
		obj.boards.title=title;	
	}
	
	return obj;
	
});