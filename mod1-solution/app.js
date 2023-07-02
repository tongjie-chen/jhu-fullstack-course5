(function(){
    "use strict";

    angular.module("LunchCheck", [])

        .controller("LunchCheckCtrl", LunchCheckCtrl);
    LunchCheckCtrl.$inject = ['$scope'];
    function LunchCheckCtrl($scope) {
        $scope.message = "Please enter data first";
        $scope.checkFood = function (){
            if ($scope.selection.split(",").length > 3)
                $scope.message = "Too much!";
            else
                $scope.message = "Enjoy!";
        }
    }
}
)();
