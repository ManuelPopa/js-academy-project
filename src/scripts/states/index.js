export default angular.module('states', [
    'ui.router',
    require('./home').name,
    require('./casino').name,
    require('./category').name,
    require('./404').name
])
