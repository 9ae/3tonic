import { KeyMatrixCtrl } from './controllers/key_matrix';

function playTest(){
    //create one of Tone's built-in synthesizers and connect it to the master output
var synth = new Tone.SimpleSynth().toMaster();

//play a middle c for the duration of an 8th note
//synth.triggerAttackRelease("A1", "4n");
synth.triggerAttackRelease("C8", "4n");
synth.triggerAttackRelease("C3", "4n");

}

angular
    .module('tritonic', [])
    .controller('KeyMatrixCtrl', KeyMatrixCtrl);