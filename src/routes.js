angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/listar');

  $stateProvider
    .state('/listar', {

      url: '/listar',
      data: {
        listar: true
      },
      template: '<listar-todo></listar-todo>'

    })
    .state('/adicionar', {

      url: '/adicionar',
      data: {
        listar: false
      },
      template: '<adicionar-todo></adicionar-todo>'

    })
    .state('/editar', {

      url: '/editar/{id}',
      data: {
        listar: false
      },
      template: '<adicionar-todo></adicionar-todo>'

    });

  $mdThemingProvider.theme('default').primaryPalette('indigo');
}
