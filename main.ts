input.onButtonPressed(Button.A, function () {
    let random = 0
    if (random == randint(0, 1)) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    let x = 0
    basic.clearScreen()
    if (x == randint(0, 3)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (x == randint(0, 3)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (x == randint(0, 3)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("welcome to T or D")
})
