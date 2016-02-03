from mingus.containers import Track
from mingus.containers.instrument import Piano, Guitar
from mingus.midi import fluidsynth

class FlowTrack(Track):

    def __init__(self, instrument=None):
        super(FlowTrack, self).__init__(instrument)
        if type(instrument) is Piano:
            fluidsynth.init('grand_piano.sf2')

    def print_and_play(self):
        for n in self.get_notes():
            print n
        fluidsynth.play_Track(self, 1, 80)