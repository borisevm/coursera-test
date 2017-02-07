(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
        items: '<',
        onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'found',
    bindToController: true,
    transclude: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var controller = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowed = this;

  narrowed.narrowItDown = function(searchTerm) {    
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm)
    .then(function(foundItems) {
      if (searchTerm === "" || searchTerm === undefined) {
        narrowed.found = [];
        narrowed.message = "Nothing found";        
      }
      else if (foundItems.length === 0) {
        narrowed.found = [];
        narrowed.message = "Nothing found";
      } else {
        narrowed.found = foundItems;
        narrowed.message = false;
      }
    });
  }

  narrowed.removeItem = function(itemIndex) {
    narrowed.found.splice(itemIndex, 1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;  

  service.getAllMenuItems = function() {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    return response;
  }

  service.getMatchedMenuItems = function(searchTerm) {
    var foundItems = [];
    if (searchTerm !== undefined) {
      var searchTerm = searchTerm.toLowerCase();
    }
    return service.getAllMenuItems().then(function(response) {
      var allItems = response.data.menu_items;
      for (var i = 0; i < allItems.length; i++) {
          var description = allItems[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(allItems[i]);
           }
       }
      return foundItems;
    });
  }  
}

})();
