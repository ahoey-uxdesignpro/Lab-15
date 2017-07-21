var app = angular.module(madLib,[]);

app.controller('madLibCtrl', function($scope){
  $scope.list=[];
  $scope.madLib=function(listItem){
  $scope.list.push({
    info:listItem.info
  });

  };
});

}
