coordinate.controller('create', ['$scope', function($scope, $location) {
  $scope.group = {
    'name': 'Create A Group'
  };

  $scope.submit = ()=> {
    $.ajax({
      type: 'POST',
      url: '/app',
      data: JSON.stringify($scope.group),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: (msg)=> console.log(msg.d),
      error: (msg)=> console.log(msg.d)
    });
  }
}]);
