(function() {
  'use strict';
  angular.module('public')
  .controller('InfoFormController', InfoFormController);

  InfoFormController.$inject = ['SignupFormService', 'myInfo'];
  function InfoFormController(SignupFormService, myInfo) {
    var infoCtrl = this;       
    infoCtrl.myInfo = myInfo;  
    console.log(infoCtrl.myInfo);  

    if (!angular.equals(infoCtrl.myInfo, {})) {
      infoCtrl.signed = true;
      console.log(infoCtrl.signed);
    } else {  
      infoCtrl.signed = false;
    }
  }

})();
