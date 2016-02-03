import random

from mingus.midi import fluidsynth
from mingus.containers.instrument import Piano, Guitar
from mingus.containers import NoteContainer
from mingus.containers import Track
import mingus.core.keys as keys
import mingus.core.chords as chords
import mingus.core.progressions as prog

class FlowTrack(Track):

    def __init__(self, instrument=None):
        super(FlowTrack, self).__init__(instrument)
        if type(instrument) is Piano:
            fluidsynth.init('grand_piano.sf2')

    def print_and_play(self):
        for n in self.get_notes():
            print n
        fluidsynth.play_Track(self, 1, 80)

class Randy:

    @staticmethod
    def key():
        i = random.randint(0, len(keys.keys) - 1 )
        j = random.randint(0, 1)
        return keys.keys[i][j]

    @staticmethod
    def invert(chord):
        k = len(chord) - 1
        r = random.randint(0, k)
        if r==1:
            return chords.first_inversion(chord)
        elif r==2:
            return chords.second_inversion(chord)
        elif r==3:
            return chords.third_inversion(chord)
        else:
            return chord


def simple_3chord(k=None):
    if k is None:
        k = Randy.key()

    print 'Song in '+k

    riff = FlowTrack(Piano())

    chord_prog = prog.to_chords(['I', 'IV', 'V', 'I'], k)
    for ch in chord_prog:
        ic = Randy.invert(ch)
        riff.add_notes(ic)

    riff.print_and_play()

def chord_as_container(chord_list, octave=''):
    ch = [n+octave for n in chord_list]
    return NoteContainer(ch)

simple_3chord()