import { useState } from 'react';

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message ,setMessage] = useState("");
    
    const handleSubmit =(event) => {
        event.preventDefault();

        alert(`Email: ${email}\nMessage: ${message}`);
    
        setEmail("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}