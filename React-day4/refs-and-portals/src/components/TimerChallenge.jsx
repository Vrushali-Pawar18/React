import { useState, useRef } from "react";
import ResultModal from "./ResultModel.jsx";

//let timer;

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timeractive = timeRemaining > 0 && timeRemaining < targetTime*1000;
   
    if(timeRemaining <=0){
        clearInterval(timer.current);
        dialog.current.open();

    }

    function handleReset(){
    setTimeRemaining(targetTime *1000);
    }
   
    // const [timerExpired, setTimerExpired] = useState(false);
    // const [timerStarted, setTimerStarted] = useState(false);


    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeremaining => prevTimeremaining -10);
        }, 10);

        setTimerStarted(true);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal 
            ref={dialog} 
            targetTime={targetTime} 
            remainingTime = {timeRemaining}
            onReset = {handleReset}  />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timeractive ? handleStop : handleStart}>
                        {timeractive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timeractive ? 'active' : undefined}>
                    {timeractive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}