angular.module('MenuApp')
    .component('items', {
        'template': "Items<li ng-repeat='item in data.data'>{{item.short_name}}</li>",
        'bindings': {
            data: '<'
        }
    })
    .controller('ItemCtrl', ItemCtrl);

function ItemCtrl(MenuDataService, data) {
    console.log(data.data)
}
