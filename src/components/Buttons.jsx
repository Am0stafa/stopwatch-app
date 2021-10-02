import React, { useState } from 'react'

const Buttons = ({setTimerOn, setTime,timerOn, time}) => {
    const [showbtn , setShowbtn] = useState(false);

    return (
        <div id="buttons">
           { 
               ( timerOn===false && time ===0 ) && (<button onClick={() =>setTimerOn(true) } >Start</button>) 
           }
           
           {
           timerOn && (<button onClick={() =>{
               setTimerOn(false) 
               setShowbtn(true)
               } } >Stop</button>)
           
           }
       {
        showbtn && (  <button onClick={() =>{setTimerOn(true)
            setShowbtn(false)

        } } >Resume</button>)
       }
       
       {
        showbtn && (  <button onClick={() =>{setTime(0)  
        setShowbtn(false)

        } } >Reset</button>)
       }
        </div>
    )
}

export default Buttons
