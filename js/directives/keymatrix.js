angular.module('tritonic')
	.directive('keyMatrix', function(){
		return {
			restrict: 'E',
			controller: ['$scope', function($scope){
				var synth = new Tone.SimpleSynth().toMaster();

				$scope.notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

				$scope.playNote = function(key, octave) {
					synth.triggerAttackRelease(key+octave, "4n");
				};

				$scope.getOctaves = function(start, end) {
					var list = [];
						for(var i=start; i<=end; i++){
							list.push(i+'')
						}
					return list;
				}
			}],
			templateUrl: 'js/directives/keymatrix.html'
		};
	});