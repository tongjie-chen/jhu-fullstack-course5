(function(){
    'use strict';
    
    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListManagement", ShoppingListManagement);

    ToBuyController.$inject=["$scope", "ShoppingListManagement"]
    function ToBuyController($scope, ShoppingListManagement) {
        $scope.toBuyItems = ShoppingListManagement.toBuyItems;
        $scope.checkOff = ShoppingListManagement.buyItem;
    };

    AlreadyBoughtController.$inject=["$scope", "ShoppingListManagement"]
    function AlreadyBoughtController($scope, ShoppingListManagement) {
        $scope.boughtItems = ShoppingListManagement.boughtItems;
    };

    function ShoppingListManagement() {
        var service = this;
        service.toBuyItems = [
            {name: "banana",
             quantity:"3"},
            {name: "apple",
             quantity:"2"},
            {name: "bread",
             quantity:"1"},
            {name: "rice",
             quantity:"5"},
            {name: "cookies",
             quantity:"10"},
            {name: "milk",
             quantity:"1"},
            {name: "egg",
             quantity:"12"}
        ];
        service.boughtItems = [];

        service.buyItem = function(index){
            var item = service.toBuyItems[index];
            service.boughtItems.push(item);
            service.toBuyItems.splice(index, 1);
        };

    }
})()



