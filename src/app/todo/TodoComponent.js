angular
    .module('app')
    .component('listarTodo', {
      templateUrl: 'app/todo/partials/Listar.Todo.html',
      controller: TodoController
    });

angular
    .module('app')
    .component('adicionarTodo', {
      templateUrl: 'app/todo/partials/Adicionar.Todo.html',
      controller: TodoController
    });
