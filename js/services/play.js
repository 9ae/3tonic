angular.module('tritonic.midi').factory('Play', function(){
    var player = {
        ready: false
    };

    player.init = function(instrument){
        MIDI.loadPlugin({
            instrument: instrument,
            onsuccess: function() {
                player.ready = true;
            }
        });
    };

    player.play = function(noteChord, velocity, duration){
        if(!player.ready){
            throw "Player not ready";
        }

        if (typeof(noteChord) === 'number'){
            MIDI.noteOn(0, noteChord, velocity, 0);
            MIDI.noteOff(0, noteChord, duration);
        } else {
            MIDI.chordOn(0, noteChord, velocity, 0);
            MIDI.chordOff(0, noteChord, duration);
        }
    };

    return player;
});