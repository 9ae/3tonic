from mingus.containers import NoteContainer
import mingus.core.chords as chords
import mingus.core.progressions as prog

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

simple_3chords_piano('D')
simple_3chords_guitar('D')