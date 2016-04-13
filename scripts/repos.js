(function(module) {
  var repo = {};
  repo.all = [];
  repo.request = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + token
      },
      success: function(data, message, xhr) {
        console.log(data);
        console.log(message);
        repo.all = data;
        callback();
      },
      error: function(data, status) {
        console.log(status);
      }

    });

    repo.with = function(attr) {
      return repo.all.filter(function(repo) {
        return repo[attr];
      });
    };
  };
  module.repo = repo;
})(window);
