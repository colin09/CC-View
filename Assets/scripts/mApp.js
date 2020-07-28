var mApp = angular.module('mApp', ['ngRoute', 'ngSanitize']);


module.config(function ($routeProvider) {
    $routeProvider.when('/index', //数据摘要
        {
            templateUrl: '/M/Home/Index',
            controller: "indexController"
        })
        .otherwise({
            redirectTo: "/dataDigest"
        });
});