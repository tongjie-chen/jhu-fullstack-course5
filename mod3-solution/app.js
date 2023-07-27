angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('listItemDescription', ListItemDescription)
    .directive('foundItems', foundItems);

NarrowItDownController.inject=['$scope', '$http', 'MenuSearchService']
function NarrowItDownController($scope, $http, MenuSearchService) {
    $scope.getMatchedMenuItems = MenuSearchService.getMatchedMenuItems;
    $scope.matchFun = function(result){
        if ($scope.searchTerm) {
            $scope.found = Object.values(result.data).map(function(it){return it.menu_items}).flat(1).filter(function(it){return it.description.includes($scope.searchTerm.toLowerCase())});
        }
        else
            $scope.found = [];
        console.log($scope.found);
    };
    $scope.onRemove = function(index) {
        $scope.found.splice(index, 1);
    }
}

MenuSearchService.inject=['$http']
function MenuSearchService($http) {
    var service = this;
    
    this.getMatchedMenuItems = function(searchTerm) {
        console.log(searchTerm);
        return $http({
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        })
    }
}

function foundItems() {
    var ddo = {
        scope: {
            found: "<",
            onRemove2: "&onRemove"
        },
        templateUrl:"foundItems.template.html",
        controller: ListController,
        controllerAs: "list",
        bindToController: true
    };
    return ddo;
}

function ListController() {
    // var list = this;
    // list.onRemove2 = function(index){
    //     list.found.splice(index, 1);
    // }
}

function ListItemDescription() {
    var ddo = {
        template: '{{ item.name }}'
    };

    return ddo;
}
