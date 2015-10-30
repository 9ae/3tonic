export class NoteBase {
    
    constructor(value){
        this.noteBase = value;
    }
}

export class Note extends NoteBase {

    constructor(note, octave){
        super(note);
        this.octave = octave;
    }

}