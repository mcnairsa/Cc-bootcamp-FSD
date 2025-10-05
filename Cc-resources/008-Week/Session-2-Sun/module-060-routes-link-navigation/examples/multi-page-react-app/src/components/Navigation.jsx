import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isAuthenticated, user, cart, theme, onToggleTheme, onLogout }) {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/">TechStore</NavLink>
        </div>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Dashboard
          </NavLink>
        </div>

        <div className="nav-actions">
          <button
            onClick={onToggleTheme}
            className="theme-toggle"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <div className="cart-icon">
            🛒
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </div>

          <div className="user-section">
            {isAuthenticated ? (
              <div className="user-menu">
                <span className="user-name">Hi, {user?.name}</span>
                <button onClick={onLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <span className="login-prompt">Login in Dashboard</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;