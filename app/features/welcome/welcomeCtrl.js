(function(){
  'use strict'

  myApp.controller('welcomeCtrl', welcomeCtrl);

  welcomeCtrl.$inject = ['blogService', '$location'];

  function welcomeCtrl(blogService, $location){
    var vm =  this;

    vm.title = "";
    vm.text = "";
    vm.blogs = "";
    vm.totalBlogs = "";
    vm.blog = "";
    vm.success =  false;

    vm.saveBlog = saveBlog;
    vm.getBlogs = getBlogs;
    vm.clearForm = clearForm;


    function saveBlog() {
      return blogService.saveBlog(vm.title, vm.text)
      .then(function(response){
        if(response.title.length != 0){
          vm.success = true;
          vm.getBlogs();
          vm.clearForm();
        }
      })
    }

    function getBlogs() {
     return blogService.getBlogs()
        .then(function(response) {
          vm.blogs = response;
          vm.totalBlogs = vm.blogs.length;
        })
    }

    function clearForm() {
      vm.title = "";
      vm.text = "";
    }
  }

})()