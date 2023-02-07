input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
})
basic.showString("Klasa e IX-Reshtan")
basic.showNumber(9)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showIcon(IconNames.TShirt)
