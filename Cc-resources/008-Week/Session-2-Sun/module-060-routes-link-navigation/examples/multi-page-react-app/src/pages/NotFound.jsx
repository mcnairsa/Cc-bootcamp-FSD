import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <div className="error-illustration">
            <h1 className="error-code">404</h1>
            <div className="error-icon">🤖</div>
          </div>

          <div className="error-text">
            <h2>Oops! Page Not Found</h2>
            <p>
              The page you're looking for seems to have vanished into the digital void.
              Don't worry, it happens to the best of us!
            </p>
          </div>

          <div className="action-buttons">
            <Link to="/" className="btn-primary">
              🏠 Go Home
            </Link>
            <Link to="/products" className="btn-secondary">
              🛍️ Browse Products
            </Link>
          </div>

          <div className="helpful-links">
            <h3>Maybe you were looking for:</h3>
            <ul>
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
              <li><Link to="/dashboard">Your Dashboard</Link></li>
            </ul>
          </div>

          <div className="search-suggestion">
            <p>
              <strong>Still can't find what you're looking for?</strong><br />
              Try our search feature or contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;