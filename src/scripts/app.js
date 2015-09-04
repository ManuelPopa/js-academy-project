/* ---------------------------------------------CASINO---------------------------------------------*/

require("../../bower_components/angular-ui-router/release/angular-ui-router")


var app = angular.module('emJsAcademy', [
    require('./components').name,
    require('./states').name
]).config(function ($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/404');
}).run(function ($state, $rootScope, emWebApi) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.error('$stateChangeError', event, toState, toParams, fromState, fromParams)
    });
});

window.global = {};

/* ---------------------------------------------Services---------------------------------------------*/

// app.factory('gameService', ['emWebApi',  function (emWebApi) {

//     /* ------------------- for easy understanding ------------------- */
//     // var FIELDS =
//     // {
//     //     Slug                    : 1,
//     //     Vendor                  : 2,
//     //     Name                    : 4,
//     //     ShortName               : 8,
//     //     Description             : 16,
//     //     AnonymousFunMode        : 32,
//     //     FunMode                 : 64,
//     //     RealMode                : 128,
//     //     NewGame                 : 256,
//     //     License                 : 512,
//     //     Popularity              : 1024,
//     //     Width                   : 2048,
//     //     Height                  : 4096,
//     //     Thumbnail               : 8192,
//     //     Logo                    : 16384,
//     //     BackgroundImage         : 32768,
//     //     Url                     : 65536,
//     //     HelpUrl                 : 131072,
//     //     Categories              : 262144,
//     //     Tags                    : 524288,
//     //     Platforms               : 1048576,
//     //     RestrictedTerritories   : 2097152,
//     //     TheoreticalPayOut       : 4194304,
//     //     BonusContribution       : 8388608,
//     //     JackpotContribution     : 16777216,
//     //     FPP                     : 33554432,
//     //     Currencies              : 8589934592
//     // };          
    
//     return {
//             getGames: function (parameter) {
//                 var myFilter = [];
//                 if ( parameter !== undefined ){
//                    myFilter.push(parameter);
//                 }
//                 return emWebApi.call('/casino#getGames', {
//                     expectedFields: 4 + 8192 + 262144 + 33554432 + 2 + 65536,
//                     filterByCategory: myFilter 
//                     }).then(function (response) { 
//                     return response.games;
//                 });
//             },

//             getVendors: function () {
//                 return emWebApi.call('/casino#getGameVendors').then(function (data) {
//                     return data.vendors;
//                     });
//             },

//             getGameCat: function () {
//                 return emWebApi.call('/casino#getGameCategories').then(function (resp) {
//                     return resp.categories;
//                     });
//             }
//     }
// }]);


// /* ---------------------------------------------Controller---------------------------------------------*/

// app.controller('gameController' , ['$scope', 'gameService', '$stateParams',
//     function ($scope, gameService, $stateParams) {
//         var games = [];
//         var value = $stateParams.category == "all" ? undefined  : $stateParams.category;
//         gameService.getGames(value).then(function (newGames){
//             $scope.games = newGames;
//             $scope.$apply(); 
//         });

//         gameService.getVendors().then(function (myVendors){
//             $scope.vendors = myVendors;
//             $scope.$apply();
//         });

//         gameService.getGameCat().then(function (myCateg){
//             $scope.categories = myCateg;
//             $scope.$apply();
//         });
            
//     }
// ]);


// /* ---------------------------------------------Directive---------------------------------------------*/

// app.directive('displayGames', ['gameService', function (gameService) {
//     return {
//         restrict: 'A',
//         templateUrl: require('./components/casino/directives/games.html')
//     }
// }]);



