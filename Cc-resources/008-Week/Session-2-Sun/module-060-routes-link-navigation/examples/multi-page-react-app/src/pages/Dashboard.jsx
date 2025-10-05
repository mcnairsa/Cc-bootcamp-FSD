import { useState } from 'react';
import './Dashboard.css';

function Dashboard({ isAuthenticated, user, cart, onRemoveFromCart, onLogin }) {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    if (!loginForm.email || !loginForm.password) {
      setLoginError('Please fill in all fields');
      return;
    }

    const result = onLogin(loginForm);
    if (!result.success) {
      setLoginError(result.error);
    } else {
      setLoginForm({ email: '', password: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  if (!isAuthenticated) {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="login-section">
            <h1>Login to Your Dashboard</h1>
            <p>Access your account to view orders, cart, and personal information</p>

            <form onSubmit={handleLoginSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {loginError && (
                <div className="error-message">{loginError}</div>
              )}

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>

            <div className="demo-info">
              <h3>Demo Login</h3>
              <p>Use any email and password to login to the demo</p>
              <p><strong>Example:</strong> demo@example.com / password123</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="container">
        <header className="dashboard-header">
          <h1>Welcome back, {user.name}!</h1>
          <p>Manage your account and view your shopping activity</p>
        </header>

        <div className="dashboard-content">
          {/* User Info Card */}
          <div className="dashboard-card user-info">
            <h3>Account Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Name:</label>
                <span>{user.name}</span>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <span>{user.email}</span>
              </div>
              <div className="info-item">
                <label>Member since:</label>
                <span>{new Date(user.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="info-item">
                <label>Account ID:</label>
                <span>#{user.id}</span>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="dashboard-card cart-summary">
            <h3>Shopping Cart ({cart.length} items)</h3>
            {cart.length > 0 ? (
              <>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <strong>Total: ${getTotalPrice()}</strong>
                </div>
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <a href="/products" className="shop-link">Start Shopping</a>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="dashboard-card quick-stats">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{cart.length}</div>
                <div className="stat-label">Items in Cart</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">${getTotalPrice()}</div>
                <div className="stat-label">Cart Value</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0</div>
                <div className="stat-label">Orders</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">⭐ 5.0</div>
                <div className="stat-label">Rating</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">🛒</div>
                <div className="activity-details">
                  <p>Account created successfully</p>
                  <span className="activity-time">{new Date(user.joinDate).toLocaleString()}</span>
                </div>
              </div>
              {cart.length > 0 && (
                <div className="activity-item">
                  <div className="activity-icon">➕</div>
                  <div className="activity-details">
                    <p>Added {cart.length} item(s) to cart</p>
                    <span className="activity-time">Just now</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;