import random

from mingus.midi import fluidsynth
from mingus.containers import NoteContainer
from mingus.containers import Bar
import mingus.core.keys as keys
import mingus.core.chords as chords

fluidsynth.init('grand_piano.sf2')

def simple_3chord(k=None):
    if k is None:
        all_keys = keys.base_scale
        k = all_keys[random.randint(0, len(all_keys)-1)]

    print 'Song in '+k

    riff = Bar(k)

    riff.place_notes(chord_as_container(chords.I(k)), 4)
    riff.place_notes(chord_as_container(chords.IV(k)), 4)
    riff.place_notes(chord_as_container(chords.V(k)), 4)
    riff.place_notes(chord_as_container(chords.I(k)), 4)

    fluidsynth.play_Bar(riff, 1, 80)

def chord_as_container(chord_list, octave=''):
    ch = [n+octave for n in chord_list]
    return NoteContainer(ch)

simple_3chord()