
import React, { useState, useEffect } from 'react';
import './SambhavEvents.css'
function SambhavCountdown({ targetDate }) {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeRemaining = targetTime - now;

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
    }

    return timeRemaining;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  const intervalId = setInterval(() => {
    const newTimeRemaining = calculateTimeRemaining();
    setTimeRemaining(newTimeRemaining);
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  return (
    <div>
      {timeRemaining > 0 ? (
        <div className="countdown-sambhav">
          <h4 className="sambhav-time-heading">CountDown</h4>
          <div id="sambhav-countdown" className="blink">{days}d : {hours}h : {minutes}m : {seconds}s</div>
        </div>
      ) : (
        <div>Countdown Expired</div>
      )}
    </div>
  );
}

export default SambhavCountdown;
