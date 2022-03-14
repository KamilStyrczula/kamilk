let mapValue = 0
let item = 0
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
basic.forever(function () {
    item = input.acceleration(Dimension.X)
    mapValue = pins.map(
    item,
    -1025,
    1025,
    165,
    15
    )
    pins.servoWritePin(AnalogPin.P0, mapValue)
})
basic.forever(function () {
    item = input.acceleration(Dimension.Y)
    mapValue = pins.map(
    item,
    -1025,
    1025,
    5,
    190
    )
    pins.servoWritePin(AnalogPin.P1, mapValue)
})
