input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    servos.P0.run(100)
    servos.P1.run(100)
    servos.P2.run(100)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    servos.P0.run(0)
    servos.P1.run(0)
    servos.P2.run(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Jackson Wengler")
})
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
