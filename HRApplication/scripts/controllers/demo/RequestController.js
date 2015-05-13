hrApp.controller('RequestController', ['$scope', '$http', function($scope, $http){

    $scope.jobList = [];
    $http.get("http://demo.teamnet.ro:8282/hrapp/jobs")
        .success (function (data, status, headers, config){
            $scope.jobList = data;
        //console.log(data);
    })
//    TODO #10 - make AJAX call
}]);
