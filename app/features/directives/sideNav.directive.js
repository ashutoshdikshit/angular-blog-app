(function(){
  'use strict';

  myApp.directive('sideNav', sideNav);

  function sideNav(){
    var directive = {
      restrict: 'EA',
      templateUrl: 'features/directives/sideNav.directive.html',
      scope: {},
      controller: sideNavCtrl
    };

    return directive;
    
    sideNavCtrl.$inject = ["blogService", "$location", "$timeout"];

    function sideNavCtrl($scope, blogService, $location, $timeout) {
      $scope.blogs = "";
      $scope.totalBlogs = $scope.blogs.length;

      $scope.viewBlog = viewBlog;
      $scope.getBlogs = getBlogs;

      function getBlogs() {
       return blogService.getBlogs()
          .then(function(response) {
            $scope.blogs = response;
            $scope.totalBlogs = $scope.blogs.length;
          })
      }

      function viewBlog(id) {
        $timeout(function() {
            $location.url("/viewBlog/:"+id);
        }, 0);
      }
    }
  }
})();