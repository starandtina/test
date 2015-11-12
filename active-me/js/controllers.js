angular.module('starter.controllers', [])

.controller('NavCtrl', function ($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})

.controller('ExploreCtrl', function ($scope, Events, $ionicPopover) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.events = Events.all();

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });
})

.controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
  debugger
  $scope.eventDetail = Events.get($stateParams.eventId);
})

.controller('MyActiveCtrl', function ($scope, MyEvents) {
  $scope.events = MyEvents.all();
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
