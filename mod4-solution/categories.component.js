angular.module('MenuApp')
    .component('categories', {
        'controller': "CategoryCtrl as categoryCtrl",
        'template': "<li ng-repeat='item in categoryCtrl.categoryData.data'>{{item.short_name}}</li>",
        'bindings': {
            categoryData: '<'
        }
    })
    .controller("CategoryCtrl", CategoryCtrl)

// CategoryCtrl.$inject = ['categoryData']
function CategoryCtrl(categoryData) {
    console.log("categories");
    console.log(categoryData.data);
}
