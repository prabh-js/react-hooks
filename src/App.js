import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';


const AmazingClock = () => {
  const convertTime = (date = new Date()) => {
    const firstTime = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`).toString();
    return firstTime;
  }

  const [time, setTime] = useState(convertTime);
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = convertTime(new Date());
      setTime(currentTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our amazing clock component!!</h1>
        {time}
      </header>
    </div>
  );
}

export default AmazingClock;
