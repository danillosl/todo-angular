angular.module('app', ['ui.router', 'ngResource', 'ngMaterial', 'ngMessages']);

angular.module('app').controller('containerController', ContainerController);

/** @ngInject */
function ContainerController($mdSidenav, $mdToast) {
  this.selected = [];
  this.title = "";
  this.toolbar = {};
  this.user = {};
  this.sidenav = {};
  this.$mdSidenav = $mdSidenav;
  this.$mdToast = $mdToast;

  this.$onInit = function () {
    this.section = {
      name: 'Section 1',
      expand: true,
      actions: [
        {
          name: 'adicionar',
          icon: 'settings',
          link: '/adicionar'
        },
        {
          name: 'Todos',
          icon: 'settings',
          link: '/listar'
        }
      ]
    };
  };

  this.toggleSidenav = function (menu) {
    this.$mdSidenav(menu).toggle();
  };
}
