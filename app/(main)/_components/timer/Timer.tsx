import React, { useEffect, useState } from 'react'

const Timer = ({again , reset}) => {
  const [timeLeft, setTimeLeft] = useState(2 * 60);

  useEffect(() => {
    if (timeLeft > 0) {
      again(false)
      const intervalId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup on unmount
    } else {
      again(true)
    }
  }, [timeLeft]);

  useEffect(() => {
    if(!reset)
      setTimeLeft(2 * 60)
  }, [reset]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={"text-primary-400 text-sm px-1"}>
      {timeLeft > 0 ? (
        <div>
          {(String(minutes).padStart(2, '0'))}:{(String(seconds).padStart(2, '0'))}
        </div>
      ) : (
        <div>0</div>
      )}

    </div>
  )
}

export default Timer
