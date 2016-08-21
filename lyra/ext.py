from mingus.containers import Bar, Track
from mingus.containers.instrument import Piano, Guitar
import mingus.core.notes as notes
from mingus.midi import fluidsynth

def assign_octaves(chord, octave):

    ch = []
    last_int = None
    for n in chord:
        note_int = notes.note_to_int(n)
        if last_int and note_int < last_int:
            octave += 1
        note_string = '%s-%d'%(n, octave)
        ch.append(note_string)
        last_int = note_int
    return ch


class FlowTrack(Track):

    def __init__(self, instrument=None):
        super(FlowTrack, self).__init__(instrument)

        if type(instrument) is Guitar:
            fluidsynth.init('soundfonts/acoustic_guitar.sf2')
        else:
            fluidsynth.init('soundfonts/grand_piano.sf2')

        self.rate = 100

        self.chords = []
        self.key = 'C'
        self.octave = 4

    def add_chord(self, chord):
        self.chords.append(chord)

    def print_and_play(self):
        if len(self.bars) == 0:
            raise Exception("Nothing to play")

        for n in self.get_notes():
            print n
        fluidsynth.play_Track(self, 1, self.rate)

class PianoTrack(FlowTrack):

    def __init__(self):
        super(PianoTrack, self).__init__(Piano())

    def set_as_split_chords(self):
        self.bars = []
        noted_chords = map(lambda x: assign_octaves(x, self.octave), self.chords)
        for ch in noted_chords:
            b = Bar(key=self.key)
            if len(ch) == 3:
                b.place_notes(ch[0], 4)
                b.place_notes(ch[2], 4)
                b.place_notes(ch[1], 4)
                b.place_notes(ch[2], 4)
            elif len(ch) == 4:
                b.place_notes(ch[0], 4)
                b.place_notes(ch[2], 4)
                b.place_notes(ch[1], 4)
                b.place_notes(ch[3], 4)
            else:
                b.place_notes(ch, 1)
            self.add_bar(b)


class GuitarTrack(FlowTrack):

    def __init__(self):
        super(GuitarTrack, self).__init__(Guitar())

    def set_as_beat_strum(self):
        self.bars = []
        for ch in self.chords:
            b = Bar(key=self.key)
            i = 0
            while i<4:
                b.place_notes(ch, 4)
                i += 1
            self.add_bar(b)