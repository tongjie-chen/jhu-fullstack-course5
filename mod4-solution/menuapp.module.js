angular.module("MenuApp", ['data', 'ui.router'])
    .controller("MenuAppCtrl", MenuAppCtrl)
    .controller("HomeCtrl", HomeCtrl)

function MenuAppCtrl(){
    
}

HomeCtrl.$inject = ['MenuDataService'];
function HomeCtrl(MenuDataService) {
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
    // console.log(myData);
}

