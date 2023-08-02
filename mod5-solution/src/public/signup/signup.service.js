angular.module("public")
    .service("SignupService", SignupService);

function SignupService() {
    this.saveData = function(data) {
        this.userData = data;
        console.log("data saved" + data);
        console.log(data);
    }

    this.retrieveData = function() {
        if (this.userData)
            return this.userData;
        else
            return null;
    }
}
