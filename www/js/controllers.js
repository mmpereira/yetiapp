angular.module('starter.controllers', [])


.controller('PhotoCtrl', function($scope, $cordovaCamera, $cordovaVibration) {


  $scope.vibrate = function() {
    
    console.log('vibration: ', $cordovaVibration);
    $scope.vibrating = "bzzzz";
    $cordovaVibration.vibrate(100);
  };

  $scope.takePhoto = function() {
  
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };
  
    $cordovaCamera.getPicture(options).then(function(imageData) {
      // var image = document.getElementById('myImage');
      $scope.image = "data:image/jpeg;base64," + imageData;
      
      
    }, function(err) {
      // error
    });  
  };

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
