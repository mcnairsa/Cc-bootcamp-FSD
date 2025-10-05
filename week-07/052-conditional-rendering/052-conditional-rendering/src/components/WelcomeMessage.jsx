import { useState } from 'react';

export default function WelcomeMessage() {
const [isLoggedIn, setIsLoggedIn] = useState (false);

return (
        <div>
            {isLoggedIn && <h1>Welcome back!</h1>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log Out" : "Log In"}
            </button>
        </div>
    );
}