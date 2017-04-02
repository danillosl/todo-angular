angular
    .module('app')
    .service('todoService', function ($resource) {
      var data = $resource('http://localhost:8080/api/todos/:id',
        {
          id: '@id'
        },
        {
          update: {
            method: 'PUT'
          }
        });
      return data;
    });
