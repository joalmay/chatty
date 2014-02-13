'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = MessageService.getMessages().then(function(data) {
  	$scope.messages = data;
});
  });
