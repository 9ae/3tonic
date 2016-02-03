from mingus.containers import NoteContainer
from mingus.containers.instrument import Piano, Guitar
import mingus.core.chords as chords
import mingus.core.progressions as prog

from ext import (
    FlowTrack)
from randy import Randy

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

simple_3chord()