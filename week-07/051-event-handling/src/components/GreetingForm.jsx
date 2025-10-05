import { useState } from 'react';

export default function GreetingForm() {
    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
            />
            <p>Hello, {name || "stranger"}!</p>
        </div>
    )
};