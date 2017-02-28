(function() {
  'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  //Redirection to home page
  $urlRouterProvider.otherwise('/');

  //UI states
  $stateProvider

  //Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  //Categories state
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  //Menu items state
  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategories($stateParams.categoryId);
      }]
    }
  });
}
})();
