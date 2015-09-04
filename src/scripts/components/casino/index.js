export default angular.module('casino', [
    'ui.router',
    require('./controllers/gameController').name,
    require('./directives/displayGames').name,
    require('./services/gameService').name
]);
