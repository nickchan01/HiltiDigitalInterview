import { useEffect, useState } from "react"

/**
 * 
 * @param initialTime initial time in milisecs
 * @param callback function executed when timer reaches 0
 * @param interval optional to change interval for updates
 */


export const useCountdown = (initialTime : number, callback : () => void, interval=1000) => {
    
    const [time, setTime] = useState(initialTime)
    const [count, setCount] = useState(0);
    
    useEffect(()=> {
        const customInterval = setInterval(() => {
            if(time > 0) {
                setTime((prev) => prev - interval)
            }
            if(time === 0 && count <= 3){
                setCount(count + 1);
                setTime(10000)
                console.log(count)
            }
        }, interval)
        
        if(time === 0) callback()

        return() => clearInterval(customInterval)

    },[time])

    return time
    return count
}