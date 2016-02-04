from mingus.containers import NoteContainer
from mingus.containers.instrument import Piano, Guitar
import mingus.core.chords as chords
import mingus.core.progressions as prog

from ext import (
    FlowTrack)
from randy import Randy

def simple_3chord(k=None, octave=None):
    if k is None:
        k = Randy.key()

    print 'Song in '+k

    riff = FlowTrack(Piano())

    chord_prog = prog.to_chords(['I', 'IV', 'V', 'I'], k)
    for ch in chord_prog:
        ic = Randy.invert(ch)
        if octave:
            ic = map(lambda n: n+octave, ic)
        riff.add_notes(ic)

    riff.print_and_play()

simple_3chord(octave='-3')