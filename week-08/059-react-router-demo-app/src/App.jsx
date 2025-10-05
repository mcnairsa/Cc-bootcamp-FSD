import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Navigation';
import './App.css'


function App() {

  return (
    <>
    <h1>Bar</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/user-profile" element={<UserProfile />}/>
      </Routes>
      <Navigation />
    </>
  )
}

export default App;
