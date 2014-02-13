'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($q, $http) {
    return {
    	getMessages: function() {
	  		var deferred = $q.defer();

	  		$http.get("http://127.0.0.1:9500").success(function(data) {
	  			console.log("Mesagge", data);
	  			deferred.resolve(data);
	    	});

	    	console.log("deferred", deferred.promise);

	    	return deferred.promise;
		}

    }
  });
