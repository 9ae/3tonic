from kivy.app import App
from kivy.uix.widget import Widget

class Tritonic(Widget):
    print c

class TritonicApp(App):

    def build(self):
        return Tritonic()

TritonicApp().run()