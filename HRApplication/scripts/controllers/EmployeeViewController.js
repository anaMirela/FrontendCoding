hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {

        $scope.employee = {};
        url = commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeid;
        $http.get(url)
            .success (function (data, status, headers, config){
             $scope.employee = data;
        })
        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/employeeslist');
        }

    }]);