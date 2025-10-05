import { useState } from "react";
import "../styles/WelcomeMessageTernary.css";

export default function WelcomeMessageTernary() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* If true, do the thing right after the ? - if { } */}
      {/* else path on ternary is the part after the : */}
      {/* This allows us to not change our layout when the text is hidden */}
      {<h1 className={`${isLoggedIn ? "" : "hidden"}`}>Welcome back!</h1>}

      {/* add an onclick to flip the value and see the changes */}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
