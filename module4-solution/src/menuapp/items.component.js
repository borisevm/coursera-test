(function() {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/itemsList.template.html',
    bindings: {
      items: '<'
    }
  });
})();
