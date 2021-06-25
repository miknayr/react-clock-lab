/* app state */
let secs = 0
let mins = 0
let hours = 0
/* dom selectors */
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')


/* functions */

// convert seconds into degrees
const toDegrees = (increment, step) => {
    return(increment / step * 360)
}

//callback for setInterval
const clockRun = () => {
    secs++
    const secDegrees = toDegrees(secs, 60)
    secondHand.style.transform = `rotate(${secDegrees}deg)`
    if((secs % 60) === 0) {
        mins++
        const minDegrees = toDegrees(mins, 60)
        minuteHand.style.transform = `rotate(${minDegrees}deg)`
    }
    if((secs % 3600) === 0) {
        hours++
        const hourDegrees = toDegrees(hours, 12)
        hourHand.style.transform = `rotate(${hourDegrees}deg)`
    }
}
// interval
const interval = setInterval(clockRun, 1000)


