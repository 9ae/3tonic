angular.module('tritonic.midi').factory('Theory', function(){
var theo = {
    keys: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    scales: [
        'aeolian',
        'blues',
        'chromatic',
        'dorian',
        'doubleharmonic',
        'harmonicminor',
        'ionian',
        'locrian',
        'lydian',
        'majorpentatonic',
        'melodicminor',
        'minorpentatonic',
        'mixolydian',
        'phrygian',
        'wholetone']
};

theo.scalesForKey = function(key, style){
    var scaleStyle = style || 'ionian';
    return teoria.note(key).scale(scaleStyle).simple();
};

theo.chord = function(key){
    return teoria.note(key).chord('M').simple();
}

return theo;
});