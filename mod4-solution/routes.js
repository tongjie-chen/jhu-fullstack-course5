// home (`home`), categories list (`categories`), items list (`items`).
angular.module('MenuApp')
    .config(RoutesConfig);

// RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: 'Home page'
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
            url: '/items',
            template: 'items',
        })

    $urlRouterProvider.otherwise('/home');
}
