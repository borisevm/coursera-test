(function() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePathConstant'];
  function MenuDataService($http, ApiBasePathConstant) {
    var service = this;

  service.getAllCategories = function() {
    return $http({
      method: "GET",
      url: (ApiBasePathConstant + "/categories.json")
    }).then(function(response) {
          return response.data;
        });
  };

  service.getItemsForCategories = function(categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePathConstant + "/menu_items.json?category=" + categoryShortName)
    }).then(function(response) {
          return response.data;
        });
  };
}
})();
