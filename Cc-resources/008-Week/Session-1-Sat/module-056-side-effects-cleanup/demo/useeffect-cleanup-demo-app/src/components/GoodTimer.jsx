import { useState, useEffect } from "react";
export default function GoodTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

// react will run this function for use once the GoodTimer goes away from the page
// switch from a page that has GoodTimer, to a page a page that doesn't 
// cleanup function run when the component is no longer used on the page / page has changed
    return ()=>{
        clearInterval(timerId);
    }
  }, []);

  return <div>Count: {count}</div>;
}
