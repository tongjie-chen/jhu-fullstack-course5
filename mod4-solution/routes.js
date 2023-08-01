// home (`home`), categories list (`categories`), items list (`items`).
angular.module('MenuApp')
    .config(RoutesConfig);

// RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: 'Home page <a ui-sref="categories" style="button">Categories</a>',
            controller: 'HomeCtrl as homeCtrl',
            resolve: {
                myData: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }            
        })
    
        .state('categories', {
            url: '/categories',
            template: '<categories ng-repeat="cat in categoryCtrl.categoryData" cat="cat"></categories>',
            controller: 'CategoryCtrl as categoryCtrl',
            resolve: {
                categoryData: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories().then(function(response) {console.log(response.data); return response.data});
                }]
            }
        })

        .state('items', {
            url: '/items/{cat}',
            template: '<items ng-repeat="menu_item in itemCtrl.data.menu_items" menu-item="menu_item"></items>',
            controller: 'ItemCtrl as itemCtrl',
            resolve: {
                data: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    console.log(MenuDataService)
                    return MenuDataService.getItemsForCategory($stateParams.cat).then(function(response) {return response.data});
                }]
            }
        })

    $urlRouterProvider.otherwise('/home');
}
