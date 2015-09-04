export default angular.module('casino.directives.displayGames', ['casino.services.gameService'])

	.directive('displayGames', ['gameService', function (gameService) {
	    return {
	        restrict: 'A',
	        templateUrl: require('./games.html')
	    }
	}]);