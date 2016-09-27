var app = angular.module('tritonic.midi', []);

app.controller('VocalsCtrl', ['$scope', 'Play', function($scope, Play){

	var selectedNote = new Note(36, 4, 70);

	function play(){
		Play.play(selectedNote.key, selectedNote.strength, selectedNote.duration);
	}

    $scope.higher = function(){
        selectedNote.higher();
    };

    $scope.lower = function(){
    	selectedNote.lower();
    }

    $scope.half = function(){
    	selectedNote.half();
    }

    $scope.double = function(){
    	selectedNote.double();
    }

    $scope.justPlay = function(){
    	play();
    	console.log(selectedNote);
    }

    Play.init("acoustic_grand_piano");

}]);