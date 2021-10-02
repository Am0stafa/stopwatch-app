import React, { useEffect, useState } from 'react'
import Buttons from './components/Buttons';
import Timer from './components/Timer';

const App = () => {
  const [time , setTime] = useState(0);
  const [timerOn , setTimerOn] = useState(false);
  
  useEffect(() => {
    let interval = null;
    
    if(timerOn){
      interval = setInterval(() =>{
        setTime(previous => previous+10)
      },10)
    }else{
      clearInterval(interval);
    }
    
    return ()=>{
      clearInterval(interval);
    }
    
  },[timerOn])

  return (
    <div className="Timers">
      <Timer time={time}/>
      <Buttons setTimerOn={setTimerOn} setTime={setTime} timerOn={timerOn} time={time}/>
    </div>
  )
}

export default App
