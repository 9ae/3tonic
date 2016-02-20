var app = angular.module('tritonic.midi', []);

app.controller('MCtrl', ['$scope', function($scope){

    $scope.ready = false;

    function init(){
        console.log('loading instruments');
        MIDI.loadPlugin({
            instrument: "acoustic_grand_piano",
            onsuccess: function() {
                console.log('successfully loaded');
                $scope.ready = true;

                var delay = 0; // play one note every quarter second
                var note = 50; // the MIDI note
                var velocity = 127; // how hard the note hits
                // play the note
                MIDI.setVolume(0, 127);
                MIDI.noteOn(0, note, velocity, delay);
                MIDI.noteOff(0, note, delay + 0.75);
            }
        });
    };

    init();

    function funKeyToNote(k){
        return MIDI.keyToNote[k];
    }

    $scope.play = function(){
        var chord = ['C3', 'E3', 'G3'].map(funKeyToNote);
        console.log(chord);
        MIDI.chordOn(0, chord, 127, 0);
        MIDI.chordOff(0, chord, 2);
    };

}]);