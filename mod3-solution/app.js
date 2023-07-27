angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
.directive('listItemDescription', ListItemDescription)
    .directive('foundItems', foundItems);

NarrowItDownController.inject=['$scope', '$http', 'MenuSearchService']
function NarrowItDownController($scope, $http, MenuSearchService) {
    // var getMatchedMenuItems = MenuSearchService.getMatchedMenuItems;
    // var found = MenuSearchService.getMatchedMenuItems("chicken");
    // console.log(found);
    $scope.getMatchedMenuItems = MenuSearchService.getMatchedMenuItems;
    $scope.matchFun = function(result){
        $scope.found = Object.values(result.data).map(function(it){return it.menu_items}).flat(1).filter(function(it){return it.description.includes($scope.searchTerm.toLowerCase())});
        console.log($scope.found);
    };
    $scope.removeItem = function(index) {
        $scope.found.splice(index, 1);
    }
    // var found_promise = $scope.getMatchedMenuItems('broth');
    // // $scope.searchTerm = "beef"
    // found_promise.then(function(result){
    //     var foundItems = Object.values(result.data).map(function(it){return it.menu_items}).flat(1).filter(function(it){return it.description.includes($scope.searchTerm.toLowerCase())});
    //     console.log(foundItems);
    // })
}

MenuSearchService.inject=['$http']
function MenuSearchService($http) {
    var service = this;
    
    this.getMatchedMenuItems = function(searchTerm) {
        console.log(searchTerm);
        // var foundItems;
        return $http({
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        })
            // .then(function(result){
            // this.foundItems = Object.values(result.data).map(function(it){return it.menu_items}).flat(1).filter(function(it){return it.description.includes(searchTerm.toLowerCase())});
            // return foundItems;
        // });
        return this.foundItems;
    }
    // var test = this.getMatchedMenuItems('chicken');
    // console.log(test);
}

function foundItems() {
    var ddo = {
        templateUrl:"foundItems.template.html"
    };
    return ddo;
}

function ListItemDescription() {
  var ddo = {
    template: '{{ item.quantity }} of {{ item.name }}'
  };

  return ddo;
}
