(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.itemsToBuy = ShoppingListCheckOffService.getToByItems();
    toBuy.removeFromList = function(id) {
      return ShoppingListCheckOffService.moveToBought(id);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      {
      name: "Wine",
      quantity: "2 bottles"
    },
    {
      name: "Beer",
      quantity: "10 cans"
    },
    {
      name: "Cookies",
      quantity: "5 bags"
    },
    {
      name: "Coffee",
      quantity: "3 packs"
    },
    {
      name: "Juice",
      quantity: "5 liters"
    }];
    var boughtItems = [];

    service.moveToBought = function(id) {
      var item = toBuyItems[id];
      toBuyItems.splice(id, 1);
      boughtItems.push(item);
    };

    service.getToByItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    }
  };
})();
