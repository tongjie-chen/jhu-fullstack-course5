angular.module('MenuApp')
    .component('items', {
        template: "<li>{{$ctrl.menuItem.name}}</li>",
        // controller: 'ItemCompCtrl',
        bindings: {
            menuItem: '<'
        }
    })
    .controller('ItemCtrl', ItemCtrl)
    // .controller('ItemCompCtrl', ItemCompCtrl);

function ItemCtrl(data) {
    this.data = data
    // console.log(data);
    // console.log("items")
}
