export default angular.module('casino.controllers.gameController', ['casino.services.gameService'])

    .controller('gameController' , ['$scope', 'gameService', '$stateParams',
		    function ($scope, gameService, $stateParams) {
	        var games = [];
	        var value = $stateParams.category == "all" ? undefined  : $stateParams.category;
	        gameService.getGames(value).then(function (newGames){
	            $scope.games = newGames;
	            $scope.$apply(); 
	        });

	        gameService.getVendors().then(function (myVendors){
	            $scope.vendors = myVendors;
	            $scope.$apply();
	        });

	        gameService.getGameCat().then(function (myCateg){
	            $scope.categories = myCateg;
	            $scope.$apply();
	        });
	            
	    }
	]);