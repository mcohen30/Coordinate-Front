coordinate.controller('form', ['$scope', function($scope) {
  $scope.user = {
    'first':  'John',
    'last': 'Doe',
    'email': 'j.doe@example.com',
    'username': 'superhero'
  };

 $scope.submit = ()=> {
    $.ajax({
      type: 'POST',
      url: '/users',
      data: JSON.stringify($scope.user),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: (msg)=> alert(msg.d),
      error: (msg)=> alert(msg.d)
    });
  }
}]);
