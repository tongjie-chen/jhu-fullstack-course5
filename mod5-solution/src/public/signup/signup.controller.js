angular.module("public")
    .controller("SignupController", SignupController);

SignupController.$inject = ['$http', 'SignupService']
function SignupController($http, SignupService) {
    var ctrl = this;
    ctrl.validated = false;
    
    ctrl.go = function() {
        // console.log(ctrl.user)
        ctrl.completed = false;
        var fav = ctrl.fav;
        var splits = fav.match(/[A-Z]+|[0-9]+/g);
        if (splits.length > 1) {
            var cat_short_name = splits[0];
            var menu_number = splits[1]-1;
            ctrl.user.cat_short_name = cat_short_name;
            ctrl.user.menu_number = menu_number;
            $http({
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + cat_short_name + "/menu_items/" + menu_number + ".json"
            }).then(function(response) {
                if (response.data) {
                    ctrl.fav_valid = true;
                    SignupService.saveData(ctrl.user);
                    ctrl.completed = true;
                }
                else
                    ctrl.fav_valid = false;

                ctrl.validated = true;
            })}
        else
            ctrl.fav_valid = false;
    }
}
