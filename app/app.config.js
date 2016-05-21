var myApp = angular.module('myApp', ['ngRoute'])
            .config(routeConfig);

routeConfig.$inject = ['$routeProvider'];

function routeConfig($routeProvider) {
  $routeProvider

  .when('/welcome', {
    controller : 'welcomeCtrl as vm',
    templateUrl: 'features/welcome/welcome.html'
  })

  .when('/viewAll', {
    controller: 'viewAllCtrl as vm',
    templateUrl: 'features/viewAll/viewAll.html'
  })

  .when('/viewBlog/:blogID', {
    controller: 'viewBlogCtrl as vm',
    templateUrl: 'features/viewBlog/viewBlog.html'
  })

  .when('/editBlog/:blogID', {
    controller: 'editBlogCtrl as vm',
    templateUrl: 'features/editBlog/editBlog.html'
  });

  $routeProvider.otherwise({redirectTo: '/welcome'});
}