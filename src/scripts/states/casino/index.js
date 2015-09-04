export default angular.module('state.casino', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state("casino", {
            url: '/Casino',
            views: {
                header: {
                    templateUrl: require('../partials/header.html')
                },
                content: {
                    templateUrl: require('./casino.html'),
                },
                footer: {
                    templateUrl: require('../partials/footer.html')
                }
            }
        })
    }])
    