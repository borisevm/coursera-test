(function() {
  'use strict';
  angular.module('public')
  .service('SignupFormService', SignupFormService);

  SignupFormService.$inject = ['$http', 'ApiPath'];
  function SignupFormService($http, ApiPath) {
    var service = this;
    var userInfo = {};

    service.setUserInfo = function(user) {
    	userInfo = user;
    }

    service.getUserInfo = function() {
    	return userInfo;
    }

    service.getFavoriteDish = function(favoriteDish) {
    	var shortName = favoriteDish.toUpperCase();
    	return $http({
     		method: 'GET',
      		url: (ApiPath + '/menu_items/'+ shortName +'.json')
    });
    }



  }
})();
