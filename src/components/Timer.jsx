import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const d_day = "March, 4, 2023";

  const getTime = () => {
    const time = Date.parse(d_day) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(d_day), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <label className='countdown_title'>Countdown</label>
      <div className="countdown_wrapper">
        <div className="countdown_child">
          <label className='title_label'>Days</label>
          <label className='content_label'>{days}</label>
        </div>
        <div className="countdown_child">
          <label className='title_label'>Hours</label>
          <label className='content_label'>{hours}</label>
        </div>
        <div className="countdown_child">
          <label className='title_label'>Minutes</label>
          <label className='content_label'>{minutes}</label>
        </div>
        <div className="countdown_child">
          <label className='title_label'>Seconds</label>
          <label className='content_label'>{seconds}</label>
        </div>
      </div>
    </div>
  );
};

export default Timer;