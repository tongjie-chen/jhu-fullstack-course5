(function(){
    "use strict";

    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.message = "Please enter data first";
        $scope.selection = "";
        $scope.checkFood = function (){
            if ($scope.selection.length == 0)
                $scope.message = "Empty!";
            else if ($scope.selection.split(",").length > 3)
                $scope.message = "Too much!";
            else
                $scope.message = "Enjoy!";
        }
    }
}
)();
