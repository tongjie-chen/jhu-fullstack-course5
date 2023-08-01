// home (`home`), categories list (`categories`), items list (`items`).
angular.module('MenuApp')
    .config(RoutesConfig);

// RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: 'Home page',
            controller: 'HomeCtrl as homeCtrl',
            resolve: {
                myData: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }            
        })
    
        .state('categories', {
            url: '/categories',
            template: '<categories></categories>',
            controller: 'CategoryCtrl as categoryCtrl',
            resolve: {
                categoryData: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{cat}',
            template: '<items></items>',
            controller: 'ItemCtrl as itemCtrl',
            resolve: {
                data: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.cat);
                }]
            }
        })

    $urlRouterProvider.otherwise('/home');
}
