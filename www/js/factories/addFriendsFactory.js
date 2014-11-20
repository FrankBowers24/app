angular.module('App.AddFriendsFactory', [])

.factory('AddFriendsFactory', function(){

  return {
    getSentenceEnd: function(requests){
      if (requests === 0){
        return 'requests.';
      }
      if (requests === 1){
        return 'request!';
      }
      if (requests > 1){
        return 'requests!';
      }
    }

  };
});