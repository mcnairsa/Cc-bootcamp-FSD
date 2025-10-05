import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Routes>
        {/* for the root patch  */}
        {/* prefix to path will typically be http://localhost:5173 or something similar or the deployed domain name */}
        {/* element is the page we want to display when our address bar is pointing to that path */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/user-profile/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
