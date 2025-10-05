import "./App.css";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import WelcomeMessageTernary from "./components/WelcomeMessageTernary";

function App() {
  const userOne = {
    // name: "Sarah",
    // email: "sarah@gmail.com",
  };

  return (
    <>
      <h1>Conditional Rendering Demo</h1>
      {/* Using && to conditionally render */}
      <h2>Welcome Message Conditionally Render</h2>
      <WelcomeMessage />
      {/* Ternary Operator with Conditional Classes */}
      <h2>Welcome Message Ternary with Class</h2>
      <WelcomeMessageTernary />
      {/* Safe Rendering with Null/undefined checks */}
      {/* User is not passed in */}
      <h2>User Profile no user data</h2>
      <UserProfile />
      {/* Pass in the user object, and the data displays */}
      <h2>User Profile with user Data</h2>
      <UserProfile user={userOne} />
    </>
  );
}

export default App;
