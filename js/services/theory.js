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

theo.assignOctaves = function(chord, octave) {

    var ch = []
    last_int = null
    for(var i=0; i<chord.length; i++){
        var n = chord[i];
        note_int = teoria.note(n).key()
        if (last_int && note_int < last_int){
            octave += 1;
        }
        note_string = n+(''+octave);
        ch.push(teoria.note(note_string));
        last_int = note_int;
    }
    return ch;
}

theo.chord = function(key, type){
    return teoria.note(key).chord(type).notes();
}

theo.invert = function(chord, i){
    if(i > chord.length - 1){
        throw "Invalid inversion";
    }

    var arr = chord.splice(0, i);

    for(var j=0; j<arr.length; j++){
        chord.push(arr[j].interval('P8'));
    }
    return chord;
}

theo.printNotes = function(notesList){
    var str = notesList.map(function(e){
        return e.scientific();
    }).join(' ');
    console.log(str);
}

return theo;
});