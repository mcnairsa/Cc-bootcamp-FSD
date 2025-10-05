import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Import custom hooks
import useAuth from './hooks/useAuth';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // Global state management
  const [user, setUser] = useLocalStorage('user', null);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Authentication hook
  const { isAuthenticated, login, logout } = useAuth(user, setUser);

  // Theme effect
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Cart management functions
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app">
        <Navigation
          isAuthenticated={isAuthenticated}
          user={user}
          cart={cart}
          theme={theme}
          onToggleTheme={toggleTheme}
          onLogout={logout}
        />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={
              <Products
                cart={cart}
                onAddToCart={addToCart}
              />
            } />
            <Route path="/products/:id" element={
              <ProductDetail
                cart={cart}
                onAddToCart={addToCart}
              />
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={
              <Dashboard
                isAuthenticated={isAuthenticated}
                user={user}
                cart={cart}
                onRemoveFromCart={removeFromCart}
                onLogin={login}
              />
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
