```javascript
import { useState, useEffect } from 'react';

function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // MUST remove event listener on cleanup!
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>{windowSize.width} x {windowSize.height}</div>;
}

export default WindowSizeTracker;

// Keyboard event cleanup example
function KeyboardHandler() {
  const [lastKey, setLastKey] = useState('');

  useEffect(() => {
    function handleKeyPress(event) {
      setLastKey(event.key);
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return <div>Last key pressed: {lastKey}</div>;
}

export default KeyboardHandler;
```