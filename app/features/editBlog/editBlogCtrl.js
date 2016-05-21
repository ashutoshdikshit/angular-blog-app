(function(){
  'use strict'
  myApp.controller('editBlogCtrl', editBlogCtrl);

  editBlogCtrl.$inject = ['blogService', '$location'];

  function editBlogCtrl(blogService, $location){
    var vm =  this;

    vm.title = "";
    vm.text = "";
    vm.blog = "";
    vm.blogId = "";
    vm.message = "";
    vm.success = false;

    vm.blogID = $location.path().split(":")[1];

    vm.getBlog = getBlog;
    vm.updateBlog = updateBlog;
    vm.clearForm =  clearForm;


    function getBlog() {
      return blogService.getBlog(vm.blogID)
      .then(function(response){
        vm.blog = response;
      })
    }

    function updateBlog() {
      return blogService.editBlog(vm.blog.title, vm.blog.text, vm.blogID)
      .then(function(respone){
        vm.success = true;
        vm.clearForm();
      })
    }

    function clearForm() {
      vm.blog.title = "";
      vm.blog.text = "";
    }
  }
})()
