var app = angular.module("myApp", ["ngRoute",'ngAnimate', 'ui.bootstrap', 'dndLists']);
app.config(function($routeProvider) {
    $routeProvider

    .when("/card/:listIndex?/:cardIndex?", {
        templateUrl : "html/card.html",
        controller: "CardController"
    })
    .when("/board", {
        templateUrl : "html/board.html",
        controller: "BoardController"
    }).
    otherwise({
        redirectTo: '/board'
      });
});
