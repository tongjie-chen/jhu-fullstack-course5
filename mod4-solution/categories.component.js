angular.module('MenuApp')
    .component('categories', {
        // 'controller': "CategoryCtrl",
        'template': '<li ui-sref-active="active"><a ui-sref="/items/{{$ctrl.cat.short_name}}">{{$ctrl.cat.name}}</a></li>',
        // 'template': '<li ui-sref-active="active"><a href="/items/A">{{$ctrl.cat.name}}</a></li>',        
        'bindings': {
            cat: '<'
        }
    })


