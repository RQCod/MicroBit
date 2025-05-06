input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola mundo, microbit!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
