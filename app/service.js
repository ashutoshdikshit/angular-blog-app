myApp.factory('blogService', blogService);

blogService.$inject = ['$http'];

function blogService ($http) {
  var service = {
    saveBlog : saveBlog,
    getBlogs: getBlogs,
    getBlog: getBlog,
    deleteBlog : deleteBlog,
    editBlog: editBlog
  };

  var api = "http://restedblog.herokuapp.com/ashutosh/api/";
  
  return service;

  function getBlog(id) {
    //return $http.get(api+id)
     return $http.get("https://demo5216266.mockable.io/id")
    .then(getBlogComplete)
    .catch(getBlogFailed);

    function getBlogComplete(response) {
      return response.data;
    }

    function getBlogFailed(error) {
      console.log('XHR failed for getData' + error.data);
    }
  }

  function getBlogs() {
    return $http.get("https://demo5216266.mockable.io/allBlogs")
    .then(getBlogsComplete)
    .catch(getBlogsFailed);

    function getBlogsComplete(response) {
      return response.data;
    }

    function getBlogsFailed(error) {
      console.log('XHR failed for getData' + error.data);
    }
  }
  
  function saveBlog(blogTitle, blogText) {
    var data = {
        title : blogTitle,
        text :  blogText
      }
    

    data = JSON.stringify(data);
    //$http.defaults.headers.post = {'content-type': 'application/json'};
    return $http.post("https://demo5216266.mockable.io/create",data)
    .then(saveBlogComplete)
    .catch(saveBlogFailed);

    function saveBlogComplete(response) {
      return response.data;
    }

    function saveBlogFailed(error) {
      console.log("XHR Failed for POST Data" + error.data);
    }
  }

  function editBlog(blogTitle, blogText, id) {
    var data = {
        title : blogTitle,
        text :  blogText
      }

    data = JSON.stringify(data);
    $http.defaults.headers.post = {'content-type': 'application/json'};
    return $http.post(api + id,data)
    .then(editBlogComplete)
    .catch(editBlogFailed);

    function editBlogComplete(response) {
      return response.data;
    }

    function editBlogFailed(error) {
      console.log("XHR Failed for POST Data" + error.data);
    }
  }

  function deleteBlog(id) {
    $http.defaults.headers.post = {'content-type': 'application/json'};
    return $http.delete(api + id)
    .then(deleteBlogComplete)
    .catch(deleteBlogFailed);

    function deleteBlogComplete(response) {
      return response.data;
    }

    function deleteBlogFailed(error) {
      console.log("XHR Failed for POST Data" + error.data);
    }
  }


}