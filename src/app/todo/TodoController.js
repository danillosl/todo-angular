/** @ngInject */
function TodoController(todoService, $stateParams, $state) {
  var self = this;
  self.todo = {};
  self.todos = [];

  self.$onInit = function () {
    if ($state.current.data.listar) {
      self.todos = todoService.query();
    }

    if (!($stateParams.id === undefined)) {
      self.todo = todoService.get({
        id: $stateParams.id
      });
    }
  };

  self.save = function () {
    todoService.save({id: null}, self.todo, function (response) {
      $state.go('/listar');
    });
  };

  self.remover = function (todo) {
    todoService.delete({id: todo.id}, function (response) {
      var index = self.todos.indexOf(todo);
      self.todos.splice(index, 1);
    });
  };
}
