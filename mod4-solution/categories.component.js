angular.module('MenuApp')
    .component('categories', {
        // 'controller': "CategoryCtrl",
        'templateUrl': 'categories.template.html',
        // 'template': '<li ui-sref-active="active"><a href="/items/A">{{$ctrl.cat.name}}</a></li>',        
        'bindings': {
            cat: '<'
        }
    })


