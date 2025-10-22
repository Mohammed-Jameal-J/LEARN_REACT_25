import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [message, setMessage] = useState('Waiting for the timer...');

  useEffect(() => {
    // Start a timer that logs a message after 5 seconds
    const timer = setTimeout(() => {
      setMessage('The timer has finished after 5 seconds!');
      console.log('This runs after 5 seconds');
    }, 5000);

    // Cleanup function that clears the timer when the component unmounts or effect runs again
    return () => {
      clearTimeout(timer);
      console.log('Cleanup - Timer cleared');
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>{message}</h1>
      <p>Check the console to see timer logs and cleanup activity.</p>
    </div>
  );
};

export default TimerComponent;
