hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'employeeService', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, employeeService, commonResourcesFactory) {

        $scope.employee = { };
        url = commonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeid;
        $http.get(url)
            .success (function (data, status, headers, config){
            $scope.employee = data;
        })

        $scope.back = function() {
            $location.url('/employeeslist');
        }


    }]);