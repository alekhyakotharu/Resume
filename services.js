

var myService=angular.module('myService',['ngResource']);

myService.factory('expService',['$resource',
    function($resource){
        return $resource('lib/json/experience.json',{},{
            query:{method:'GET',isArray:true}
        });
    }]);
myService.factory('projService',['$resource',
    function($resource){
        return $resource('lib/json/projects.json',{},{
            query:{method:'GET',isArray:true}
        });
    }]);
myService.factory('skillService',['$resource',
    function($resource){
        return $resource('lib/json/skill.json',{},{
            query:{method:'GET',isArray:true}
        });
    }]);
myService.factory('eduService',['$resource',
    function($resource){
        return $resource('lib/json/education.json',{},{
            query:{method:'GET',isArray:true}
        });
    }]);
myService.factory('courseService',['$resource',
    function($resource){
        return $resource('lib/json/course.json',{},{
            query:{method:'GET',isArray:true}
        });
    }]);