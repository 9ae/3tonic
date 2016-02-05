from kivy.app import App
from kivy.uix.widget import Widget

class Tritonic(Widget):
    pass

class TritonicApp(App):

    def build(self):
        return Tritonic()

TritonicApp().run()