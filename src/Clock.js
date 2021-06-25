import { useState, useEffect } from "react"

export default function Clock() {
   const [secs, setSecs] = useState(0)
   const [mins, setMins] = useState(0)
   const [hours, setHours] = useState(0)
   const [intervalHolder, setIntervalHolder] = useState(null)

   const toDegrees = (increment, step) => {
        return (increment / step) * 360
    }

    const stopTimer = () => {
        clearInterval(intervalHolder)
    }

    useEffect(() => {
        const secondHand = document.getElementById("second")
        const minuteHand = document.getElementById("minute")
        const hourHand = document.getElementById("hour")

        let intervalRun = setInterval(() => {
            let newSecs = secs + 1
            setSecs(newSecs)
            const secDegrees = toDegrees(secs, 60)
            secondHand.style.transform = `rotate(${secDegrees}deg)`
            if((secs % 60) === 0){
              let newMins = mins + 1
              setMins(newMins)
              const minDegrees = toDegrees(mins, 60)
              minuteHand.style.transform = `rotate(${minDegrees}deg)`
            }
            if((secs % 3600) === 0){
              let newHours = hours + 1
              setHours(newHours)
              const hourDegrees = toDegrees(hours, 12)
              hourHand.style.transform = `rotate(${hourDegrees}deg)`
            }
          }, 1000)
        setIntervalHolder(intervalRun)
        console.log(intervalHolder)
        return clearInterval(intervalHolder)
    }, [secs])

   return (
    <div id="clock">
        <img id="face" src="img/clockface.png"/>
        <img id="second" src="img/second-hand.png"/>
        <img id="minute" src="img/minute-hand.png"/>
        <img id="hour" src="img/hour-hand.png"/>
    </div>
    )
}