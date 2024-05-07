import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const TrackClicks = () => {
  // State to track the number of button clicks
  const [count, setCount] = useState(() => {
    // Initialize state from cookie if available
    return Number(Cookies.get('clickCount') || 0);
  });

  useEffect(() => {
    // Update the cookie whenever the count changes
    Cookies.set('clickCount', count, { expires: 7 });
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    alert(Cookies.get('clickCount'))
  };

  return (
    <div>
      <h1>Button has been clicked {count} times</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default TrackClicks;
