input.onButtonPressed(Button.A, function () {
    basic.showNumber(dolares_estadounidenses)
    basic.showString("USD=")
    euros = dolares_estadounidenses / 1.18325
    basic.showNumber(euros)
    basic.showString("EUR")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(dolares_estadounidenses)
    basic.showString("USD=")
    dolares_canadienses = dolares_estadounidenses / 0.07579
    basic.showNumber(dolares_canadienses)
    basic.showString("CAD")
})
let dolares_canadienses = 0
let euros = 0
let dolares_estadounidenses = 0
basic.showString("Michelle Cantu A01285327")
dolares_estadounidenses = 10
