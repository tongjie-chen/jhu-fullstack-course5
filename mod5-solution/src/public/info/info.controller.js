angular.module('public')
    .controller("InfoController", InfoController);

InfoController.$inject = ['SignupService']
function InfoController(SignupService) {
    this.data = SignupService.retrieveData();
    console.log(this.data);
}
