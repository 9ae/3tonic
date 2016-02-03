import random

import mingus.core.chords as chords
import mingus.core.keys as keys

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