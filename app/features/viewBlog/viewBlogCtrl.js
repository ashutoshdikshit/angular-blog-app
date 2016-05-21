(function(){
  'use strict'

  myApp.controller('viewBlogCtrl', viewBlogCtrl);

  viewBlogCtrl.$inject = ['blogService', '$location', '$timeout'];

  function viewBlogCtrl(blogService, $location, $timeout){
    var vm =  this;

    vm.blog = "";
    vm.blogId = "";
    vm.collectionDate = '2002-04-26T09:00:00';

    vm.getOneBlog = getOneBlog;
    vm.getBlogs = getBlogs;
    vm.viewBlog = viewBlog;
    vm.editBlog = editBlog;

    function getOneBlog() {
      vm.blogID = $location.path().split(":")[1];
      return blogService.getBlog(vm.blogID)
      .then(function(response){
        vm.blog = response;
        vm.blog.timestamp = new Date(vm.collectionDate);
        vm.getBlogs();
      })
    }

    function getBlogs() {
     return blogService.getBlogs()
        .then(function(response) {
          vm.blogs = response;
        })
    }

    function viewBlog(id) {
      $location.url("/viewBlog/:"+id);
    }

    function editBlog(id) {
      $timeout(function() {
        $location.url("/editBlog/:"+id);
      }, 0);
    }
  }
})()

