app.controller('MainController', ['$scope', function($scope) {
 	$scope.apps = [ 
    { 
      icon: 'img/move.jpg', 
      title: 'MOVE', 
      developer: 'MOVE, Inc.', 
      price: 0.99 
    }, 
    { 
      icon: 'img/shutterbugg.jpg', 
      title: 'Shutterbugg', 
      developer: 'Chico Dusty', 
      price: 2.99 
    } ,
    { 
      icon: 'img/forecast.jpg', 
      title: 'WhatsApp', 
      developer: 'WhatsApp Inc.', 
      price: 0.00 
    },
        { 
      icon: 'img/gameboard.jpg', 
      title: 'TubeCast', 
      developer: 'Webrox', 
      price: 0.00
    }
  ]
  
}]);