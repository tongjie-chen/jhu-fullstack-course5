angular.module("MenuApp", ['data', 'ui.router'])
    .controller("MenuAppCtrl", MenuAppCtrl)
    .controller("HomeCtrl", HomeCtrl)
    .controller("CategoryCtrl", CategoryCtrl)

CategoryCtrl.$inject = ['$scope', 'MenuDataService', 'categoryData']
function CategoryCtrl($scope, MenuDataService, categoryData) {
    console.log("categories");
    console.log(categoryData.data);
    $scope.data = categoryData.data;
}

function MenuAppCtrl(){
    
}

HomeCtrl.$inject = ['MenuDataService', 'myData'];
function HomeCtrl(MenuDataService, myData) {
    // this.MenuDataService = data.MenuDataService;
// function HomeCtrl($http) {
//     var getAllCategories = function() {
//         return $http({
//             url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
//         })
//     }
    
    console.log("test");
    // MenuDataService.getAllCategories().then(
    //     function(response){
    //         console.log(response.data)
    //     }
    // )
    console.log(myData);
}

