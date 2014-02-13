'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($q, $http) {
    return {
    	getMessages: function() {
	  		var deferred = $q.defer();

	  		$http.get("http://127.0.0.1:9500").success(function(data) {
	  			//console.log("Mesagge", data);
	  			deferred.resolve(data);
	    	});

	    	//console.log("deferred", deferred.promise);

	    	return deferred.promise;
		},
		putMessage: function(textMessage) {
	  		var deferred = $q.defer();
	  		var m="angular Message";

        $http({
          method: 'POST',
          url: 'http://127.0.0.1:9500',
          data: {
            message: textMessage
          }
        }).success(function(data) {
          deferred.resolve(data);
        });

        return deferred.promise;

	  	/*	$http.post("http://127.0.0.1:9500").success(function(data) {
	  			console.log("Mesagge", data);
	  			deferred.resolve(data);
	    	});

	    	console.log("deferred", deferred.promise);

	    	

	    	return deferred.promise;*/
		}

    }
  });
