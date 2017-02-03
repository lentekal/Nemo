let TodoCtrl = ($scope) => {
    $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
    ];


        let totalTodos = $scope.todos.length;


    $scope.clearCompleted = () => {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };

    $scope.addTodo = () => {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };
};