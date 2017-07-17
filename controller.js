
var myController = angular.module('myController',[]);

myController.controller('expctrl',['$scope','expService',
    function($scope,expService){
        $scope.jobResource=expService.query();
    }]);

myController.controller('projctrl',['$scope','projService',
    function($scope,projService){
        $scope.projResource=projService.query();
    }]);

myController.controller('skillsctrl',['$scope','skillService',
    function($scope,skillService){
        $scope.skillResource=skillService.query();
    }]);

myController.controller('qualctrl',['$scope','eduService',
    function($scope,eduService){
        $scope.eduResource=eduService.query();
    }]);

myController.controller('coursesctrl',['$scope','courseService',
    function($scope,courseService){
        $scope.courseResource=courseService.query();
    }]);

myController.controller('aboutctrl',function($scope){
    console.log('inside abt contrl')
});
