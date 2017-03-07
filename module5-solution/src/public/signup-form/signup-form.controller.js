(function() {
  'use strict';

  angular.module('public')
  .controller('SignupFormController', SignupFormController);

  SignupFormController.$inject = ['SignupFormService'];
  function SignupFormController(SignupFormService) {
    var signupCtrl = this;

    signupCtrl.submit = function() {    	
    	SignupFormService.getFavoriteDish(signupCtrl.user.dish).then(function(response) {
    		  signupCtrl.success = true;
    		  signupCtrl.errormsg	= 'Your information has been saved';
          signupCtrl.user.favoriteDish = response.data;
          SignupFormService.setUserInfo(signupCtrl.user);
          
        }).catch(function (error) {
      		signupCtrl.success = false;
      		signupCtrl.errormsg	= 'No such menu number exists'
    	});
    }



  }

})();
