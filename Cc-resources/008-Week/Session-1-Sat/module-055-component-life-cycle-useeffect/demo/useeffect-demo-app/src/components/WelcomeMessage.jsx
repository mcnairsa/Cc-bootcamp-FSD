import { useEffect, useState } from "react";

export default function WelcomeMessage() {
  const [message, setMessage] = useState("");

  // This runs after every render
  useEffect(() => {
    console.log("Component rendered!");
    setMessage("Welcome to our app!");
  });

  return <h1>{message}</h1>;
}
