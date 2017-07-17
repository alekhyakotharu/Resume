(function() {


var myApp = angular.module('myApp',['ngRoute','ngAnimate','myController','myService'])
    .config(function($routeProvider,$locationProvider){
        $routeProvider.when('/about',
            {
                templateUrl : 'partials/about.html',
                controller  : 'aboutctrl'
            });
        $routeProvider.when('/experience',
            {
                templateUrl : 'partials/experience.html',
                controller  : 'expctrl'
            });
        $routeProvider.when('/skills',
            {
                templateUrl : 'partials/skills.html',
                controller  : 'skillsctrl'
            });
        $routeProvider.when('/projects',
            {
                templateUrl : 'partials/projects.html',
                controller  : 'projctrl'
            });
        $routeProvider.when('/qualifications',
            {
                templateUrl : 'partials/qualifications.html',
                controller  : 'qualctrl'
            });
        $routeProvider.when('/courses',
            {
                templateUrl : 'partials/courses.html',
                controller  : 'coursesctrl'
            });
        $routeProvider.otherwise(
            {
                redirectTo  : '/about'
            });
    });

}());