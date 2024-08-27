def on_button_pressed_a():
    servos.P0.run(100)
    servos.P1.run(100)
    servos.P2.run(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    servos.P0.run(0)
    servos.P1.run(0)
    servos.P2.run(0)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    basic.show_string("Jackson Wengler")
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

music.play(music.string_playable("E B C5 A B G A F ", 120),
    music.PlaybackMode.UNTIL_DONE)

def on_forever():
    pass
basic.forever(on_forever)
