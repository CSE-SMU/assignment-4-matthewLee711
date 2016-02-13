var dateModule = angular.module('datepickerBasicUsage',
    ['ngMaterial', 'ngMessages']).controller('todoController', function($scope) {
  $scope.myDate = new Date();
  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  }
});


angular.module('ToDo', []).
  // Controller added to prevent functions from global scope
  controller('todoController',['$scope',function($scope) {
    $scope.todos = [
      {'title':'Build a todo app', 'description':'work', 'date': '2016-02-18', 'done':true},
      {'title':'Welcome', 'description':'Try out my to do list!', 'date':'2016-02-18', 'done': false}
    ];
    var orderBy = $scope('orderBy');

    $scope.order = function(predicate) {
      $scope.predicate = predicate;
      $scope.todoList = orderBy($scope.todoList, predicate);
    };
    $scope.order('title');


    //Function which adds items to array
    $scope.addTodo = function(){
      $scope.todos.push({'title':$scope.newtodo,'description':$scope.newdescription,
        'date':$scope.newdate, 'done':false})
      $scope.newtodo = ''
    }
  //Function which removes items from array
    $scope.clearCompleted = function(){
      $scope.todos = $scope.todos.filter(function(item) {
        return !item.done
      })
    }

  }])    