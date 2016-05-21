(function(){
  'use strict'

  myApp.controller('viewAllCtrl', viewAllCtrl);

  viewAllCtrl.$inject = ['$location', 'blogService', "$timeout"];

  function viewAllCtrl($location, blogService, $timeout) {
    var vm = this;

    vm.blogs = "";

    vm.getBlogs =  getBlogs;
    vm.editBlog = editBlog;
    vm.deleteBlog = deleteBlog;
    vm.viewBlog = viewBlog;

    function getBlogs() {
     return blogService.getBlogs()
        .then(function(response) {
          vm.blogs = response;
        })
    }

    function editBlog(id) {
      $timeout(function() {
        $location.url("/editBlog/:"+id);
      }, 0);
    }

    function deleteBlog(id) {
      return blogService.deleteBlog(id)
      .then(function(response) {
         vm.getBlogs();
        })
    }

    function viewBlog(id) {
      $timeout(function() {
          $location.url("/viewBlog/:"+id);
      }, 0);
    }

  }
})()
