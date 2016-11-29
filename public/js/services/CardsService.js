angular.module('myApp').factory('CardsService', function() {

	var obj = {};
	obj.cards = [];
	obj.board = {};
	obj.board.lists = [];
	obj.board.title="";

	obj.addCards = function(card, listIndex) {
		obj.board.lists[listIndex].cards.push(card);
	};

	obj.getCard = function(listInd, cardInd) {
		return obj.board.lists[listInd].cards[cardInd];
	};

	obj.deleteCard = function(card, listIndex, cardIndex) {
		obj.board.lists[listIndex].cards.splice(cardIndex, 1);
	};

	obj.editCard = function(card, listIndex, cardIndex) {
		obj.board.lists[listIndex].cards[cardIndex] = card;
	};

	obj.setLists = function(lists) {
		obj.board.lists = lists;
	};

	obj.getBoard = function() {
		return obj.board;
	};

	obj.setBoard=function(title){
		obj.board.title=title;	
	}
	
	return obj;
	
});