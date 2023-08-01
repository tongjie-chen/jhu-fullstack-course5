angular.module('MenuApp')
    .component('categories', {
        // 'controller': "CategoryCtrl",
        'template': "Test<li ng-repeat='item in data'>{{item.short_name}}</li>",
        'bindings': {
            categoryData: '<'
        }
    })

