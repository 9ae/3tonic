from mingus.containers import Track, Composition
from mingus.containers.instrument import Piano
import mingus.core.chords as chords
import mingus.core.progressions as prog
import mingus.core.notes as notes
from mingus.midi import fluidsynth

from ext import (
    GuitarTrack,
    PianoTrack)
from randy import Randy

def simple_3chords_piano(k=None):
    if k is None:
        k = Randy.key()

    print 'Piano Song in '+k

    riff = PianoTrack()

    chord_prog = prog.to_chords(['I', 'IV', 'V', 'I'], k)
    for ch in chord_prog:
        ic = Randy.invert(ch)
        riff.add_chord(ic)

    riff.set_as_split_chords()
    riff.print_and_play()

def simple_3chords_guitar(k=None):
    if k is None:
        k = Randy.key()

    print 'Guitar Song in '+k

    riff = GuitarTrack()

    chord_prog = prog.to_chords(['I', 'IV', 'V', 'I'], k)
    for ch in chord_prog:
        ic = Randy.invert(ch)
        riff.add_chord(ic)

    riff.set_as_beat_strum()
    #riff.from_chords(['Am','Dm',['G', 'G7']], 0.25)
    riff.print_and_play()

'''
class Memoize:
    def __init__(self, fn):
        self.fn = fn
        self.memo = {}
    def __call__(self, arg):
        if arg not in self.memo:
            self.memo[arg] = self.fn(arg)
            return self.memo[arg]

@Memoize
'''
def fib(n):
    if n==1 or n==2:
        return 1
    return fib(n-1) + fib(n-2)
'''
    a,b = 1,1
    for i in range(n-1):
        a,b = b,a+b
    return a
'''

def fib_seq(offset=0):
    track = Track(instrument=Piano())

    stop_at = 60
    i = 1
    f = 1
    while f < stop_at:
        f = fib(i) + offset
        ni = f % 12
        octave = (f / 12) + 1
        note = notes.int_to_note(ni)
        track.add_notes('%s-%d'%(note, octave), 4)

        i += 1
    return track

def fib_song():
    fluidsynth.init('soundfonts/grand_piano.sf2')
    comp = Composition()
    comp.add_track(fib_seq())
    comp.add_track(fib_seq(offset=4))
    comp.add_track(fib_seq(offset=8))
    fluidsynth.play_Composition(comp)

fib_song()