angular
    .module('app')
    .service('todoService', function ($resource) {
      var data = $resource('http://10.1.1.71:8080/api/todos/:id',
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
