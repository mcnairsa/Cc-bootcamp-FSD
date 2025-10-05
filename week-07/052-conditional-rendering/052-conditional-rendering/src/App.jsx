import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  const userOne = {
    name: "Louise",
    email: "louisemcnair69@email.com"
  }
  return (
    <>
      <h1>Conditional Rendering Demo</h1>
      <h2>Welcome Message Conditionally Rendered</h2>
      <WelcomeMessage />
      <h2>User Profile no user data </h2>
      <UserProfile />
      <h2>User Profile with user data </h2>
      <UserProfile user={userOne}/> 
    </>
  );
}

export default App;